/**
 * Events - Sistema de Eventos
 *
 * Sistema de eventos para comunicação entre módulos e serviços
 */

import {EventEmitter} from 'events';

// Internal types and classes for this module only
interface IResult<T, E = Error> {
  readonly isSuccess: boolean;
  readonly isFailure: boolean;
  readonly value: T;
  readonly error: E;
}

class Result<T, E = Error> implements IResult<T, E> {
  private constructor(public readonly isSuccess: boolean, public readonly value: T, public readonly error: E) {}

  public get isFailure(): boolean {
    return !this.isSuccess;
  }

  public static ok<T>(value: T): Result<T, never> {
    return new Result(true, value, undefined as never);
  }

  public static fail<E>(error: E): Result<never, E> {
    return new Result(false, undefined as never, error);
  }
}

class Logger {
  constructor(private readonly name: string) {}

  info(message: string, data?: unknown): void {
    const dataStr = data ?? '';
    console.log(`[${this.name}] INFO: ${message}`, dataStr);
  }

  warn(message: string, data?: unknown): void {
    const dataStr = data ?? '';
    console.warn(`[${this.name}] WARN: ${message}`, dataStr);
  }

  error(message: string, data?: unknown): void {
    const dataStr = data ?? '';
    console.error(`[${this.name}] ERROR: ${message}`, dataStr);
  }
}

// ========================================
// Event Types
// ========================================

export interface BaseEvent {
  readonly id: string;
  readonly timestamp: Date;
  readonly type: string;
  readonly version: string;
  readonly source: string;
  readonly correlationId?: string|undefined;
  readonly userId?: string|undefined;
  readonly metadata?: Record<string, unknown>|undefined;
}

export interface DomainEvent extends BaseEvent {
  readonly aggregateId: string;
  readonly aggregateType: string;
  readonly aggregateVersion: number;
}

export interface IntegrationEvent extends BaseEvent {
  readonly payload: Record<string, unknown>;
  readonly targetService?: string|undefined;
  readonly retryCount?: number|undefined;
  readonly maxRetries?: number|undefined;
}

export interface SystemEvent extends BaseEvent {
  readonly level: 'info'|'warning'|'error'|'critical';
  readonly message: string;
  readonly details?: Record<string, unknown>|undefined;
}

// ========================================
// Event Handler Types
// ========================================

export interface EventHandler<T extends BaseEvent = BaseEvent> {
  handle(event: T): Promise<Result<void, Error>>;
}

export interface EventSubscription {
  readonly id: string;
  readonly eventType: string;
  readonly handler: EventHandler;
  readonly priority: number;
  isActive: boolean;  // Remove readonly to allow modification
}

export interface EventBusOptions {
  maxListeners: number;
  enableLogging: boolean;
  enableMetrics: boolean;
  retryFailedEvents: boolean;
  maxRetries: number;
  retryDelay: number;
}

// ========================================
// Event Bus Implementation
// ========================================

export class EventBus {
  private readonly emitter: EventEmitter;
  private readonly subscriptions: Map<string, EventSubscription[]>;
  private readonly failedEvents: Map < string, BaseEvent&{
    retryCount: number;
    lastAttempt: Date
  }
  > ;
  private readonly logger: Logger;
  private readonly options: EventBusOptions;

  constructor(options: Partial<EventBusOptions> = {}) {
    this.options = {
      maxListeners: 100,
      enableLogging: true,
      enableMetrics: true,
      retryFailedEvents: true,
      maxRetries: 3,
      retryDelay: 5000,
      ...options
    };

    this.emitter = new EventEmitter();
    this.emitter.setMaxListeners(this.options.maxListeners);

    this.subscriptions = new Map();
    this.failedEvents = new Map();
    this.logger = new Logger('EventBus');

    this.setupRetryMechanism();
  }

  /**
   * Publish an event
   */
  async publish<T extends BaseEvent>(event: T): Promise<Result<void, Error>> {
    try {
      if (this.options.enableLogging) {
        this.logger.info('Publishing event', {eventId: event.id, eventType: event.type, source: event.source});
      }

      // Emit the event
      this.emitter.emit(event.type, event);

      // Also emit to wildcard listeners
      this.emitter.emit('*', event);

      return Result.ok(undefined);
    } catch (error) {
      this.logger.error(
          'Failed to publish event',
          {eventId: event.id, eventType: event.type, error: error instanceof Error ? error.message : String(error)});

      return Result.fail(error instanceof Error ? error : new Error(String(error)));
    }
  }

  /**
   * Subscribe to events
   */
  subscribe<T extends BaseEvent>(eventType: string, handler: EventHandler<T>, priority: number = 0):
      Result<EventSubscription, Error> {
    try {
      const subscription: EventSubscription =
          {id: this.generateSubscriptionId(), eventType, handler: handler as EventHandler, priority, isActive: true};

      // Add to subscriptions map
      if (!this.subscriptions.has(eventType)) {
        this.subscriptions.set(eventType, []);
      }

      const subscriptionList = this.subscriptions.get(eventType);
      if (!subscriptionList) {
        return Result.fail(new Error('Failed to create subscription list'));
      }

      subscriptionList.push(subscription);

      // Sort by priority (higher priority first)
      subscriptionList.sort((a, b) => b.priority - a.priority);

      // Add event listener
      const listener = async(event: T): Promise<void> => {
        if (!subscription.isActive) {
          return;
        }

        try {
          const result = await handler.handle(event);

          if (result.isFailure) {
            this.logger.error(
                'Event handler failed',
                {subscriptionId: subscription.id, eventType, eventId: event.id, error: result.error.message});

            if (this.options.retryFailedEvents) {
              this.addToRetryQueue(event);
            }
          }
        } catch (error) {
          this.logger.error('Event handler threw exception', {
            subscriptionId: subscription.id,
            eventType,
            eventId: event.id,
            error: error instanceof Error ? error.message : String(error)
          });

          if (this.options.retryFailedEvents) {
            this.addToRetryQueue(event);
          }
        }
      };

      this.emitter.on(eventType, listener);

      if (this.options.enableLogging) {
        this.logger.info('Event subscription created', {subscriptionId: subscription.id, eventType, priority});
      }

      return Result.ok(subscription);
    } catch (error) {
      return Result.fail(error instanceof Error ? error : new Error(String(error)));
    }
  }

  /**
   * Unsubscribe from events
   */
  unsubscribe(subscriptionId: string): Result<void, Error> {
    try {
      for (const [eventType, subscriptions] of this.subscriptions.entries()) {
        const index = subscriptions.findIndex(sub => sub.id === subscriptionId);

        if (index !== -1) {
          const subscription = subscriptions[index];
          if (subscription) {
            subscription.isActive = false;
            subscriptions.splice(index, 1);

            if (this.options.enableLogging) {
              this.logger.info('Event subscription removed', {subscriptionId, eventType});
            }

            return Result.ok(undefined);
          }
        }
      }

      return Result.fail(new Error(`Subscription not found: ${subscriptionId}`));
    } catch (error) {
      return Result.fail(error instanceof Error ? error : new Error(String(error)));
    }
  }

  /**
   * Get event bus statistics
   */
  getStatistics(): {activeSubscriptions: number; totalEventTypes: number; failedEvents: number; maxListeners: number;} {
    let activeSubscriptions = 0;

    for (const subscriptions of this.subscriptions.values()) {
      activeSubscriptions += subscriptions.filter(sub => sub.isActive).length;
    }

    return {
      activeSubscriptions,
      totalEventTypes: this.subscriptions.size,
      failedEvents: this.failedEvents.size,
      maxListeners: this.options.maxListeners
    };
  }

  /**
   * Clear all subscriptions
   */
  clear(): void {
    this.emitter.removeAllListeners();
    this.subscriptions.clear();
    this.failedEvents.clear();

    if (this.options.enableLogging) {
      this.logger.info('Event bus cleared');
    }
  }

  private generateSubscriptionId(): string {
    return `sub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private addToRetryQueue(event: BaseEvent): void {
    const retryKey = `${event.id}_${event.type}`;
    const existingEntry = this.failedEvents.get(retryKey);

    if (existingEntry) {
      existingEntry.retryCount++;
      existingEntry.lastAttempt = new Date();
    } else {
      this.failedEvents.set(retryKey, {...event, retryCount: 1, lastAttempt: new Date()});
    }
  }

  private setupRetryMechanism(): void {
    if (!this.options.retryFailedEvents) {
      return;
    }

    // Use a simple approach to avoid setInterval issues
    const scheduleRetry = (): void => {
      setTimeout(() => {
        this.processRetryQueue().catch(() => {
          // Log error but continue
          console.error('Error in retry queue processing');
        });
        scheduleRetry();
      }, this.options.retryDelay);
    };

    scheduleRetry();
  }

  private async processRetryQueue(): Promise<void> {
    const now = new Date();
    const entriesToRetry: Array<[
      string,
      BaseEvent &
          {
            retryCount: number;
            lastAttempt: Date
          }
    ]> = [];

    for (const [key, entry] of this.failedEvents.entries()) {
      const timeSinceLastAttempt = now.getTime() - entry.lastAttempt.getTime();

      if (timeSinceLastAttempt >= this.options.retryDelay && entry.retryCount <= this.options.maxRetries) {
        entriesToRetry.push([key, entry]);
      } else if (entry.retryCount > this.options.maxRetries) {
        this.failedEvents.delete(key);
        this.logger.error(
            'Event permanently failed after max retries',
            {eventId: entry.id, eventType: entry.type, retryCount: entry.retryCount});
      }
    }

    for (const [key, entry] of entriesToRetry) {
      try {
        await this.publish(entry);
        this.failedEvents.delete(key);

        this.logger.info(
            'Event retry successful', {eventId: entry.id, eventType: entry.type, retryCount: entry.retryCount});
      } catch (error) {
        this.logger.warn('Event retry failed', {
          eventId: entry.id,
          eventType: entry.type,
          retryCount: entry.retryCount,
          error: error instanceof Error ? error.message : String(error)
        });
      }
    }
  }
}

// ========================================
// Event Factory
// ========================================

export class EventFactory {
  private static generateId(): string {
    return `evt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  static createDomainEvent<T extends Record<string, unknown>>(
      type: string, aggregateId: string, aggregateType: string, aggregateVersion: number, data: T,
      options: {source?: string; correlationId?: string; userId?: string; metadata?: Record<string, unknown>;} = {}):
      DomainEvent&T {
    return {
      id: this.generateId(),
      timestamp: new Date(),
      type,
      version: '1.0.0',
      source: options.source ?? 'domain',
      correlationId: options.correlationId,
      userId: options.userId,
      metadata: options.metadata,
      aggregateId,
      aggregateType,
      aggregateVersion,
      ...data
    } as DomainEvent &
        T;
  }

  static createIntegrationEvent<T extends Record<string, unknown>>(type: string, payload: T, options: {
    source?: string;
    targetService?: string;
    correlationId?: string;
    userId?: string;
    metadata?: Record<string, unknown>;
    maxRetries?: number;
  } = {}): IntegrationEvent {
    return {
      id: this.generateId(),
      timestamp: new Date(),
      type,
      version: '1.0.0',
      source: options.source ?? 'integration',
      correlationId: options.correlationId,
      userId: options.userId,
      metadata: options.metadata,
      payload,
      targetService: options.targetService,
      retryCount: 0,
      maxRetries: options.maxRetries ?? 3
    };
  }

  static createSystemEvent(type: string, level: 'info'|'warning'|'error'|'critical', message: string, options: {
    source?: string;
    correlationId?: string;
    userId?: string;
    metadata?: Record<string, unknown>;
    details?: Record<string, unknown>;
  } = {}): SystemEvent {
    return {
      id: this.generateId(),
      timestamp: new Date(),
      type,
      version: '1.0.0',
      source: options.source ?? 'system',
      correlationId: options.correlationId,
      userId: options.userId,
      metadata: options.metadata,
      level,
      message,
      details: options.details
    };
  }
}

// ========================================
// Common Event Handlers
// ========================================

export class LoggingEventHandler implements EventHandler {
  private readonly logger: Logger;

  constructor(loggerName: string = 'EventHandler') {
    this.logger = new Logger(loggerName);
  }

  async handle(event: BaseEvent): Promise<Result<void, Error>> {
    try {
      this.logger.info(
          'Event received',
          {eventId: event.id, eventType: event.type, source: event.source, timestamp: event.timestamp});

      return Result.ok(undefined);
    } catch (error) {
      return Result.fail(error instanceof Error ? error : new Error(String(error)));
    }
  }
}

export class MetricsEventHandler implements EventHandler {
  private readonly metrics: Map<string, number>;

  constructor() {
    this.metrics = new Map();
  }

  async handle(event: BaseEvent): Promise<Result<void, Error>> {
    try {
      const current = this.metrics.get(event.type) ?? 0;
      this.metrics.set(event.type, current + 1);

      return Result.ok(undefined);
    } catch (error) {
      return Result.fail(error instanceof Error ? error : new Error(String(error)));
    }
  }

  getMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }
}

// ========================================
// Singleton Event Bus
// ========================================

export const globalEventBus = new EventBus({
  maxListeners: 200,
  enableLogging: true,
  enableMetrics: true,
  retryFailedEvents: true,
  maxRetries: 3,
  retryDelay: 5000
});

// ========================================
// Event Constants
// ========================================

export const EVENT_TYPES = {
  // Domain Events
  USER_CREATED: 'user.created',
  USER_UPDATED: 'user.updated',
  USER_DELETED: 'user.deleted',

  STORE_CREATED: 'store.created',
  STORE_UPDATED: 'store.updated',
  STORE_ACTIVATED: 'store.activated',
  STORE_DEACTIVATED: 'store.deactivated',

  APP_PUBLISHED: 'app.published',
  APP_INSTALLED: 'app.installed',
  APP_UNINSTALLED: 'app.uninstalled',
  APP_UPDATED: 'app.updated',

  // Integration Events
  PAYMENT_PROCESSED: 'payment.processed',
  NOTIFICATION_SENT: 'notification.sent',
  EMAIL_SENT: 'email.sent',
  SMS_SENT: 'sms.sent',

  // System Events
  SYSTEM_STARTED: 'system.started',
  SYSTEM_STOPPED: 'system.stopped',
  HEALTH_CHECK_FAILED: 'system.health_check_failed',
  ERROR_OCCURRED: 'system.error_occurred'
} as const;

export type EventType = typeof EVENT_TYPES[keyof typeof EVENT_TYPES];

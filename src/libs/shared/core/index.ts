/**
 * Core Infrastructure - Chassis Fundamental
 *
 * Classes e interfaces fundamentais que formam o núcleo do chassis
 */

import type {BaseEvent, DomainEvent, ID, Result} from '../types/index.js';

// ========================================
// Abstract Base Classes
// ========================================

/**
 * Entidade base abstrata
 */
export abstract class Entity<TProps = Record<string, unknown>> {
  protected readonly _id: ID;
  protected readonly _props: TProps;
  protected readonly _createdAt: Date;
  protected readonly _updatedAt: Date;

  constructor(props: TProps, id?: ID) {
    this._id = id ?? crypto.randomUUID();
    this._props = props;
    this._createdAt = new Date();
    this._updatedAt = new Date();
  }

  public get id(): ID {
    return this._id;
  }

  public get createdAt(): Date {
    return this._createdAt;
  }

  public get updatedAt(): Date {
    return this._updatedAt;
  }

  public equals(entity: Entity): boolean {
    return this._id === entity._id;
  }

  protected abstract validate(): void;
}

/**
 * Value Object base abstrato
 */
export abstract class ValueObject<TProps = Record<string, unknown>> {
  protected readonly _props: TProps;

  constructor(props: TProps) {
    this._props = props;
    this.validate();
  }

  public equals(vo: ValueObject<TProps>): boolean {
    return JSON.stringify(this._props) === JSON.stringify(vo._props);
  }

  protected abstract validate(): void;
}

/**
 * Aggregate Root base
 */
export abstract class AggregateRoot<TProps = Record<string, unknown>> extends Entity<TProps> {
  private _domainEvents: DomainEvent[] = [];

  protected addDomainEvent(event: DomainEvent): void {
    this._domainEvents.push(event);
  }

  public clearEvents(): void {
    this._domainEvents = [];
  }

  public getUncommittedEvents(): DomainEvent[] {
    return [...this._domainEvents];
  }

  public markEventsAsCommitted(): void {
    this._domainEvents = [];
  }
}

// ========================================
// Repository Interfaces
// ========================================

/**
 * Repository base genérico
 */
export interface Repository<TEntity extends Entity, TId = ID> {
  findById(id: TId): Promise<TEntity|null>;
  save(entity: TEntity): Promise<void>;
  delete(id: TId): Promise<void>;
  exists(id: TId): Promise<boolean>;
}

/**
 * Repository com busca
 */
export interface SearchableRepository<TEntity extends Entity, TQuery = Record<string, unknown>> extends
    Repository<TEntity> {
  findMany(query: TQuery): Promise<TEntity[]>;
  count(query: TQuery): Promise<number>;
}

// ========================================
// Use Case Interfaces
// ========================================

/**
 * Use Case base
 */
export interface UseCase<TRequest = unknown, TResponse = unknown> {
  execute(request: TRequest): Promise<Result<TResponse>>;
}

/**
 * Command Handler
 */
export interface CommandHandler<TCommand = unknown, TResult = unknown> {
  handle(command: TCommand): Promise<Result<TResult>>;
}

/**
 * Query Handler
 */
export interface QueryHandler<TQuery = unknown, TResult = unknown> {
  handle(query: TQuery): Promise<Result<TResult>>;
}

// ========================================
// Event Interfaces
// ========================================

/**
 * Event Bus
 */
export interface EventBus {
  publish(event: BaseEvent): Promise<void>;
  publishMany(events: BaseEvent[]): Promise<void>;
  subscribe<T extends BaseEvent>(eventType: string, handler: EventHandler<T>): void;
  unsubscribe(eventType: string, handler: EventHandler): void;
}

/**
 * Event Handler
 */
export interface EventHandler<T extends BaseEvent = BaseEvent> {
  handle(event: T): Promise<void>;
}

/**
 * Event Store
 */
export interface EventStore {
  append(streamId: string, events: DomainEvent[]): Promise<void>;
  getEvents(streamId: string, fromVersion?: number): Promise<DomainEvent[]>;
  getLastEvent(streamId: string): Promise<DomainEvent|null>;
}

// ========================================
// Service Interfaces
// ========================================

/**
 * Domain Service base
 */
export interface DomainService {
  readonly name: string;
}

/**
 * Application Service base
 */
export interface ApplicationService {
  readonly name: string;
}

// ========================================
// Specification Pattern
// ========================================

/**
 * Specification interface
 */
export interface Specification<T> {
  isSatisfiedBy(entity: T): boolean;
  and(spec: Specification<T>): Specification<T>;
  or(spec: Specification<T>): Specification<T>;
  not(): Specification<T>;
}

/**
 * Specification base abstrata
 */
export abstract class BaseSpecification<T> implements Specification<T> {
  public abstract isSatisfiedBy(entity: T): boolean;

  public and(spec: Specification<T>): Specification<T> {
    return new AndSpecification(this, spec);
  }

  public or(spec: Specification<T>): Specification<T> {
    return new OrSpecification(this, spec);
  }

  public not(): Specification<T> {
    return new NotSpecification(this);
  }
}

/**
 * AND Specification
 */
export class AndSpecification<T> extends BaseSpecification<T> {
  constructor(private readonly left: Specification<T>, private readonly right: Specification<T>) {
    super();
  }

  public isSatisfiedBy(entity: T): boolean {
    return this.left.isSatisfiedBy(entity) && this.right.isSatisfiedBy(entity);
  }
}

/**
 * OR Specification
 */
export class OrSpecification<T> extends BaseSpecification<T> {
  constructor(private readonly left: Specification<T>, private readonly right: Specification<T>) {
    super();
  }

  public isSatisfiedBy(entity: T): boolean {
    return this.left.isSatisfiedBy(entity) || this.right.isSatisfiedBy(entity);
  }
}

/**
 * NOT Specification
 */
export class NotSpecification<T> extends BaseSpecification<T> {
  constructor(private readonly spec: Specification<T>) {
    super();
  }

  public isSatisfiedBy(entity: T): boolean {
    return !this.spec.isSatisfiedBy(entity);
  }
}

// ========================================
// Factory Interfaces
// ========================================

/**
 * Factory base
 */
export interface Factory<T, TProps = Record<string, unknown>> {
  create(props: TProps): T;
}

/**
 * Builder pattern interface
 */
export interface Builder<T> {
  build(): T;
  reset(): Builder<T>;
}

// ========================================
// Mapper Interfaces
// ========================================

/**
 * Mapper entre domain e persistence
 */
export interface DomainMapper<TDomain, TPersistence> {
  toDomain(persistence: TPersistence): TDomain;
  toPersistence(domain: TDomain): TPersistence;
}

/**
 * Mapper entre domain e DTO
 */
export interface DtoMapper<TDomain, TDto> {
  toDto(domain: TDomain): TDto;
  toDomain(dto: TDto): TDomain;
}

// ========================================
// Unit of Work Pattern
// ========================================

/**
 * Unit of Work interface
 */
export interface UnitOfWork {
  begin(): Promise<void>;
  commit(): Promise<void>;
  rollback(): Promise<void>;
  saveChanges(): Promise<void>;
}

// ========================================
// Cache Interface
// ========================================

/**
 * Cache service interface
 */
export interface CacheService {
  get<T>(key: string): Promise<T|null>;
  set<T>(key: string, value: T, ttl?: number): Promise<void>;
  delete(key: string): Promise<void>;
  clear(): Promise<void>;
  exists(key: string): Promise<boolean>;
}

// ========================================
// Lock Interface
// ========================================

/**
 * Distributed lock interface
 */
export interface DistributedLock {
  acquire(key: string, ttl?: number): Promise<boolean>;
  release(key: string): Promise<void>;
  extend(key: string, ttl: number): Promise<boolean>;
}

// ========================================
// Notification Interface
// ========================================

/**
 * Notification service
 */
export interface NotificationService {
  send(recipient: string, message: string, channel: string): Promise<void>;
  sendBulk(recipients: string[], message: string, channel: string): Promise<void>;
}

// ========================================
// Audit Interface
// ========================================

/**
 * Audit service
 */
export interface AuditService {
  log(action: string, entityId: string, changes: Record<string, unknown>): Promise<void>;
  getHistory(entityId: string): Promise<unknown[]>;
}

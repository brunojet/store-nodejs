/**
 * Observability - Sistema de Instrumentação
 *
 * Utilitários para coleta de métricas, logs e traces para sistemas externos
 */

// ========================================
// Observability Types
// ========================================

/**
 * Níveis de log
 */
export enum LogLevel {
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info',
  DEBUG = 'debug'
}

/**
 * Contexto de log estruturado
 */
export interface LogContext {
  readonly requestId?: string;
  readonly userId?: string;
  readonly correlationId?: string;
  readonly operation?: string;
  readonly duration?: number;
  readonly [key: string]: unknown;
}

/**
 * Entrada de log estruturada
 */
export interface LogEntry {
  readonly level: LogLevel;
  readonly message: string;
  readonly timestamp: Date;
  readonly context?: LogContext;
  readonly error?: Error;
}

/**
 * Métrica de performance
 */
export interface PerformanceMetric {
  readonly name: string;
  readonly value: number;
  readonly unit: 'ms'|'count'|'bytes';
  readonly timestamp: Date;
  readonly tags?: Record<string, string>;
}

/**
 * Span de trace distribuído
 */
export interface TraceSpan {
  readonly traceId: string;
  readonly spanId: string;
  readonly parentSpanId?: string;
  readonly operationName: string;
  readonly startTime: Date;
  readonly endTime?: Date;
  readonly duration?: number;
  readonly status: 'ok'|'error'|'timeout';
  readonly tags?: Record<string, string>;
  readonly logs?: LogEntry[];
}

// ========================================
// Observability Interfaces
// ========================================

/**
 * Logger estruturado
 */
export interface StructuredLogger {
  info(message: string, context?: LogContext): void;
  warn(message: string, context?: LogContext): void;
  error(message: string, error?: Error, context?: LogContext): void;
  debug(message: string, context?: LogContext): void;
}

/**
 * Collector de métricas
 */
export interface MetricsCollector {
  counter(name: string, value?: number, tags?: Record<string, string>): void;
  gauge(name: string, value: number, tags?: Record<string, string>): void;
  histogram(name: string, value: number, tags?: Record<string, string>): void;
  timing(name: string, duration: number, tags?: Record<string, string>): void;
}

/**
 * Tracer distribuído
 */
export interface DistributedTracer {
  startSpan(operationName: string, parentSpan?: TraceSpan): TraceSpan;
  finishSpan(span: TraceSpan): void;
  addLog(span: TraceSpan, message: string, level?: LogLevel): void;
  addTag(span: TraceSpan, key: string, value: string): void;
}

// ========================================
// Instrumentation Decorators
// ========================================

/**
 * Decorator para instrumentar métodos
 */
export function Instrument(metricName?: string) {
  return function(
      target: Record<string, unknown>, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value as (...args: unknown[]) => Promise<unknown>;
    const targetConstructor = target.constructor as {name: string};
    const name = metricName ?? `${targetConstructor.name}.${propertyKey}`;

    descriptor.value = async function(...args: unknown[]): Promise<unknown> {
      const startTime = Date.now();
      const span = Observability.tracer.startSpan(name);

      try {
        const result = await originalMethod.apply(this, args);
        const duration = Date.now() - startTime;

        Observability.metrics.timing(name, duration);
        Observability.tracer.addTag(span, 'status', 'success');

        return result;
      } catch (error) {
        const duration = Date.now() - startTime;

        Observability.metrics.timing(name, duration, {status: 'error'});
        Observability.tracer.addTag(span, 'status', 'error');
        Observability.logger.error(`Error in ${name}`, error as Error);

        throw error;
      } finally {
        Observability.tracer.finishSpan(span);
      }
    };

    return descriptor;
  };
}

/**
 * Decorator para log de métodos
 */
export function LogMethod(level: LogLevel = LogLevel.INFO) {
  return function(
      target: Record<string, unknown>, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value as (...args: unknown[]) => unknown;
    const targetConstructor = target.constructor as {name: string};
    const methodName = `${targetConstructor.name}.${propertyKey}`;

    descriptor.value = function(...args: unknown[]): unknown {
      if (level === LogLevel.INFO) {
        Observability.logger.info(`Calling ${methodName}`, {method: methodName, args: args.length});
      } else if (level === LogLevel.WARN) {
        Observability.logger.warn(`Calling ${methodName}`, {method: methodName, args: args.length});
      } else if (level === LogLevel.DEBUG) {
        Observability.logger.debug(`Calling ${methodName}`, {method: methodName, args: args.length});
      }

      const result = originalMethod.apply(this, args);

      if (result instanceof Promise) {
        return result
            .then((res: unknown) => {
              if (level === LogLevel.INFO) {
                Observability.logger.info(`Completed ${methodName}`, {method: methodName, success: true});
              } else if (level === LogLevel.WARN) {
                Observability.logger.warn(`Completed ${methodName}`, {method: methodName, success: true});
              } else if (level === LogLevel.DEBUG) {
                Observability.logger.debug(`Completed ${methodName}`, {method: methodName, success: true});
              }
              return res;
            })
            .catch((error) => {
              Observability.logger.error(`Failed ${methodName}`, error as Error, {method: methodName});
              throw error;
            });
      } else {
        if (level === LogLevel.INFO) {
          Observability.logger.info(`Completed ${methodName}`, {method: methodName, success: true});
        } else if (level === LogLevel.WARN) {
          Observability.logger.warn(`Completed ${methodName}`, {method: methodName, success: true});
        } else if (level === LogLevel.DEBUG) {
          Observability.logger.debug(`Completed ${methodName}`, {method: methodName, success: true});
        }
        return result;
      }
    };

    return descriptor;
  };
}

// ========================================
// Observability Singleton
// ========================================

/**
 * Singleton de observabilidade
 */
class ObservabilityManager {
  private _logger: StructuredLogger;
  private _metrics: MetricsCollector;
  private _tracer: DistributedTracer;

  constructor() {
    this._logger = new ConsoleLogger();
    this._metrics = new NoOpMetricsCollector();
    this._tracer = new NoOpTracer();
  }

  public get logger(): StructuredLogger {
    return this._logger;
  }

  public get metrics(): MetricsCollector {
    return this._metrics;
  }

  public get tracer(): DistributedTracer {
    return this._tracer;
  }

  public configure(config: {logger?: StructuredLogger; metrics?: MetricsCollector; tracer?: DistributedTracer;}): void {
    if (config.logger) {
      this._logger = config.logger;
    }
    if (config.metrics) {
      this._metrics = config.metrics;
    }
    if (config.tracer) {
      this._tracer = config.tracer;
    }
  }
}

export const Observability = new ObservabilityManager();

// ========================================
// Default Implementations
// ========================================

/**
 * Logger console simples
 */
class ConsoleLogger implements StructuredLogger {
  info(message: string, context?: LogContext): void {
    console.log(JSON.stringify({level: 'info', message, timestamp: new Date().toISOString(), ...context}));
  }

  warn(message: string, context?: LogContext): void {
    console.warn(JSON.stringify({level: 'warn', message, timestamp: new Date().toISOString(), ...context}));
  }

  error(message: string, error?: Error, context?: LogContext): void {
    console.error(JSON.stringify({
      level: 'error',
      message,
      error: error?.message,
      stack: error?.stack,
      timestamp: new Date().toISOString(),
      ...context
    }));
  }

  debug(message: string, context?: LogContext): void {
    console.debug(JSON.stringify({level: 'debug', message, timestamp: new Date().toISOString(), ...context}));
  }
}

/**
 * Metrics collector no-op (placeholder)
 */
class NoOpMetricsCollector implements MetricsCollector {
  counter(): void {}
  gauge(): void {}
  histogram(): void {}
  timing(): void {}
}

/**
 * Tracer no-op (placeholder)
 */
class NoOpTracer implements DistributedTracer {
  startSpan(operationName: string): TraceSpan {
    return {
      traceId: crypto.randomUUID(),
      spanId: crypto.randomUUID(),
      operationName,
      startTime: new Date(),
      status: 'ok'
    };
  }

  finishSpan(): void {}
  addLog(): void {}
  addTag(): void {}
}

// ========================================
// Utility Functions
// ========================================

/**
 * Mede tempo de execução de uma função
 */
export async function measureTime<T>(
    fn: () => Promise<T>, metricName: string, tags?: Record<string, string>): Promise<T> {
  const startTime = Date.now();

  try {
    const result = await fn();
    const duration = Date.now() - startTime;
    Observability.metrics.timing(metricName, duration, {...tags, status: 'success'});
    return result;
  } catch (error) {
    const duration = Date.now() - startTime;
    Observability.metrics.timing(metricName, duration, {...tags, status: 'error'});
    throw error;
  }
}

/**
 * Cria contexto de correlação
 */
export function createCorrelationContext(requestId?: string): LogContext {
  return {requestId: requestId ?? crypto.randomUUID(), correlationId: crypto.randomUUID(), timestamp: Date.now()};
}

/**
 * Shared Module - Chassis da Aplicação POS Store
 *
 * Este módulo contém toda a infraestrutura base (chassis) do sistema:
 * - Core utilities e fundações
 * - Database connection e migrations
 * - Error handling e logging
 * - Types e interfaces compartilhadas
 * - Middleware e interceptors
 * - Configuration management
 * - Observability e monitoring
 */

// Types & Interfaces (base exports)
export * from './types/index.js';

// Core Infrastructure classes
export {AggregateRoot, AndSpecification, BaseSpecification, Entity, NotSpecification, OrSpecification, ValueObject} from './core/index.js';

// Core Infrastructure types
export type{ApplicationService, Builder, CommandHandler, DomainMapper, DomainService, EventStore, Factory, QueryHandler, Repository, SearchableRepository, Specification, UnitOfWork, UseCase} from './core/index.js';

// Database Layer
export * from './database/index.js';

// Utilities
export * from './utils/index.js';

// Middleware
export * from './middleware/index.js';

// Configuration
export * from './config/index.js';

// Observability & Instrumentation
export {Instrument, LogMethod, Observability, createCorrelationContext} from './observability/index.js';
export type{LogContext, MetricsCollector, PerformanceMetric, StructuredLogger, TraceSpan} from './observability/index.js';

// Error Handling (re-export selected items to avoid ValidationError conflict)
export {AppError, BusinessRuleError, ConflictError, DatabaseError, ErrorFactory, ErrorHandler, ExternalServiceError, ForbiddenError, InternalServerError, NotFoundError, RateLimitError, TimeoutError, UnauthorizedError} from './errors/index.js';

// Security
export * from './security/index.js';

// Validation
export * from './validation/index.js';

// Constants
export * from './constants/index.js';

// Event System (re-export selected items to avoid conflicts)
export {EVENT_TYPES, EventFactory, LoggingEventHandler, MetricsEventHandler} from './events/index.js';

// Re-export event types separately
export type{EventBusOptions, EventSubscription, EventType, SystemEvent} from './events/index.js';

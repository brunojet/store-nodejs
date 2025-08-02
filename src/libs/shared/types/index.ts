/**
 * Core Types - Fundamentos do Sistema POS
 *
 * Types fundamentais que formam a base do chassis da aplicação
 */

// ========================================
// Core Entity Types
// ========================================

/**
 * Entidade base com campos de auditoria
 */
export interface BaseEntity {
  readonly id: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly version: number;
}

/**
 * Entidade com soft delete
 */
export interface SoftDeletableEntity extends BaseEntity {
  readonly deletedAt: Date|null;
  readonly isDeleted: boolean;
}

/**
 * Metadados de auditoria
 */
export interface AuditMetadata {
  readonly createdBy: string;
  readonly updatedBy: string;
  readonly deletedBy?: string;
  readonly reason?: string;
  readonly sourceIp?: string;
  readonly userAgent?: string;
}

// ========================================
// API Response Types
// ========================================

/**
 * Resposta padrão da API
 */
export interface ApiResponse<T = unknown> {
  readonly success: boolean;
  readonly data?: T;
  readonly error?: ApiError;
  readonly meta?: ApiResponseMeta;
  readonly timestamp: string;
  readonly requestId: string;
}

/**
 * Metadados da resposta
 */
export interface ApiResponseMeta {
  readonly page?: number;
  readonly limit?: number;
  readonly total?: number;
  readonly totalPages?: number;
  readonly hasNext?: boolean;
  readonly hasPrev?: boolean;
}

/**
 * Erro da API
 */
export interface ApiError {
  readonly code: string;
  readonly message: string;
  readonly details?: Record<string, unknown>;
  readonly stack?: string;
  readonly traceId?: string;
}

// ========================================
// Business Types (POS Domain)
// ========================================

/**
 * Status do aplicativo POS
 */
export enum AppStatus {
  DRAFT = 'DRAFT',
  PENDING_REVIEW = 'PENDING_REVIEW',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  PUBLISHED = 'PUBLISHED',
  SUSPENDED = 'SUSPENDED',
  ARCHIVED = 'ARCHIVED'
}

/**
 * Tipos de aplicativo
 */
export enum AppType {
  PAYMENT = 'PAYMENT',
  INVENTORY = 'INVENTORY',
  LOYALTY = 'LOYALTY',
  ANALYTICS = 'ANALYTICS',
  INTEGRATION = 'INTEGRATION',
  UTILITY = 'UTILITY'
}

/**
 * Categorias de aplicativo
 */
export enum AppCategory {
  ESSENTIAL = 'ESSENTIAL',
  BUSINESS = 'BUSINESS',
  FINANCE = 'FINANCE',
  MARKETING = 'MARKETING',
  PRODUCTIVITY = 'PRODUCTIVITY',
  ENTERTAINMENT = 'ENTERTAINMENT'
}

/**
 * Planos de preços
 */
export enum PricingPlan {
  FREE = 'FREE',
  BASIC = 'BASIC',
  PREMIUM = 'PREMIUM',
  ENTERPRISE = 'ENTERPRISE'
}

// ========================================
// Configuration Types
// ========================================

/**
 * Configuração do ambiente
 */
export interface EnvironmentConfig {
  readonly NODE_ENV: 'development'|'staging'|'production';
  readonly PORT: number;
  readonly DATABASE_URL: string;
  readonly LOG_LEVEL: LogLevel;
  readonly CORS_ORIGIN: string;
  readonly JWT_SECRET: string;
  readonly ENCRYPTION_KEY: string;
}

/**
 * Níveis de log
 */
export enum LogLevel {
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info',
  HTTP = 'http',
  VERBOSE = 'verbose',
  DEBUG = 'debug',
  SILLY = 'silly'
}

// ========================================
// Utility Types
// ========================================

/**
 * Torna todas as propriedades opcionais, exceto as especificadas
 */
export type PartialExcept<T, K extends keyof T> = Partial<T>&Pick<T, K>;

/**
 * Seleciona apenas as propriedades especificadas
 */
export type PickNullable<T, K extends keyof T> = {
  [P in K]: T[P]|null;
};

/**
 * Remove propriedades readonly
 */
export type Mutable<T> = {
  -readonly[P in keyof T]: T[P];
};

/**
 * Tipo para IDs
 */
export type ID = string;

/**
 * Tipo para timestamps ISO
 */
export type ISODateTime = string;

/**
 * Tipo para arrays não vazios
 */
export type NonEmptyArray<T> = [T, ...T[]];

/**
 * Tipo para valores primitivos
 */
export type Primitive = string|number|boolean|Date|null|undefined;

/**
 * Deep readonly
 */
export type DeepReadonly<T> = {
  readonly[P in keyof T]: T[P] extends object ? DeepReadonly<T[P]>: T[P];
};

// ========================================
// Event Types
// ========================================

/**
 * Evento base do sistema
 */
export interface BaseEvent {
  readonly id: string;
  readonly type: string;
  readonly timestamp: Date;
  readonly version: number;
  readonly correlationId?: string;
  readonly causationId?: string;
}

/**
 * Evento de domínio
 */
export interface DomainEvent<T = unknown> extends BaseEvent {
  readonly aggregateId: string;
  readonly aggregateType: string;
  readonly data: T;
}

/**
 * Evento de integração
 */
export interface IntegrationEvent<T = unknown> extends BaseEvent {
  readonly source: string;
  readonly data: T;
}

// ========================================
// Query Types
// ========================================

/**
 * Filtros de paginação
 */
export interface PaginationFilter {
  readonly page?: number;
  readonly limit?: number;
  readonly offset?: number;
}

/**
 * Filtros de ordenação
 */
export interface SortFilter {
  readonly sortBy?: string;
  readonly sortOrder?: 'asc'|'desc';
}

/**
 * Filtros de busca
 */
export interface SearchFilter {
  readonly search?: string;
  readonly searchFields?: string[];
}

/**
 * Query base
 */
export interface BaseQuery extends PaginationFilter, SortFilter, SearchFilter {
  readonly filters?: Record<string, unknown>;
}

// ========================================
// Result Types
// ========================================

/**
 * Resultado de operação
 */
export type Result<T, E = Error> = {
  readonly success: true; readonly data: T;
}|{
  readonly success: false;
  readonly error: E;
};

/**
 * Maybe type
 */
export type Maybe<T> = T|null|undefined;

/**
 * Either type
 */
export type Either<L, R> = {
  readonly isLeft: true; readonly left: L;
}|{
  readonly isLeft: false;
  readonly right: R;
};

// ========================================
// Validation Types
// ========================================

/**
 * Erro de validação
 */
export interface ValidationError {
  readonly field: string;
  readonly message: string;
  readonly code: string;
  readonly value?: unknown;
}

/**
 * Resultado de validação
 */
export interface ValidationResult {
  readonly isValid: boolean;
  readonly errors: ValidationError[];
}

// ========================================
// Permission Types
// ========================================

/**
 * Ações do sistema
 */
export enum SystemAction {
  CREATE = 'create',
  READ = 'read',
  UPDATE = 'update',
  DELETE = 'delete',
  EXECUTE = 'execute'
}

/**
 * Recursos do sistema
 */
export enum SystemResource {
  APP = 'app',
  USER = 'user',
  STORE = 'store',
  ORDER = 'order',
  PAYMENT = 'payment',
  INVENTORY = 'inventory',
  REPORT = 'report'
}

/**
 * Permissão
 */
export interface Permission {
  readonly resource: SystemResource;
  readonly action: SystemAction;
  readonly conditions?: Record<string, unknown>;
}

/**
 * Contexto de autorização
 */
export interface AuthorizationContext {
  readonly userId: string;
  readonly storeId?: string;
  readonly roles: string[];
  readonly permissions: Permission[];
}

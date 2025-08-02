/**
 * Core Types - Sistema de Publicação de Aplicativos
 *
 * Types fundamentais baseados na modelagem Prisma
 */

// ========================================
// Core Entity Types
// ========================================

/**
 * Entidade base com campos de auditoria (padrão Prisma)
 */
export interface BaseEntity {
  readonly id: string;
  readonly criadoEm: Date;
  readonly atualizadoEm: Date;
  readonly criadoPor: string;
  readonly atualizadoPor: string;
}

/**
 * Metadados de auditoria para log
 */
export interface AuditMetadata {
  readonly entidade: string;
  readonly entidadeId?: string;
  readonly acao: string;
  readonly campo?: string;
  readonly valorAntes?: string;
  readonly valorDepois?: string;
  readonly usuarioId?: string;
  readonly usuarioNome?: string;
  readonly ip?: string;
  readonly contexto?: string;
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
// Business Types (App Store Domain)
// ========================================

/**
 * Estágios do catálogo de aplicativos
 */
export enum EstagioCatalogo {
  REVIEW = 'REVIEW',
  PILOTO = 'PILOTO',
  PRODUCAO = 'PRODUCAO'
}

/**
 * Ações do sistema para auditoria
 */
export enum AcaoAuditoria {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
  LOGIN = 'LOGIN',
  EXPORT = 'EXPORT',
  PUBLISH = 'PUBLISH'
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
}

/**
 * Níveis de log
 */
export enum LogLevel {
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info',
  DEBUG = 'debug'
}

// ========================================
// Utility Types
// ========================================

/**
 * Tipo para IDs
 */
export type ID = string;

/**
 * Tipo para timestamps ISO
 */
export type ISODateTime = string;

// ========================================
// Query Types
// ========================================

/**
 * Filtros de paginação
 */
export interface PaginationFilter {
  readonly page?: number;
  readonly limit?: number;
}

/**
 * Filtros de ordenação
 */
export interface SortFilter {
  readonly sortBy?: string;
  readonly sortOrder?: 'asc'|'desc';
}

/**
 * Query base
 */
export interface BaseQuery extends PaginationFilter, SortFilter {
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

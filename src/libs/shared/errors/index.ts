/**
 * Error Handling - Sistema de Tratamento de Erros
 *
 * Classes e utilitários para tratamento consistente de erros
 */

import type {ApiError} from '../types/index.js';

// ========================================
// Base Error Classes
// ========================================

/**
 * Erro base da aplicação
 */
export abstract class AppError extends Error {
  public readonly code: string;
  public readonly statusCode: number;
  public readonly isOperational: boolean;
  public readonly timestamp: Date;
  public readonly details?: Record<string, unknown>;

  constructor(
      message: string, code: string, statusCode: number = 500, isOperational: boolean = true,
      details?: Record<string, unknown>) {
    super(message);

    this.name = this.constructor.name;
    this.code = code;
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.timestamp = new Date();
    if (details) {
      this.details = details;
    }

    // Mantém o stack trace
    Error.captureStackTrace(this, this.constructor);
  }

  public toJSON(): ApiError {
    const baseResult = {code: this.code, message: this.message};

    const result: ApiError = this.details ? {...baseResult, details: this.details} : baseResult;

    const nodeEnv = process.env['NODE_ENV'];
    const stackTrace = this.stack;
    if (nodeEnv === 'development' && stackTrace !== null && stackTrace !== undefined && stackTrace !== '') {
      return {...result, stack: stackTrace} as ApiError & {stack: string};
    }

    return result;
  }
}

// ========================================
// Specific Error Classes
// ========================================

/**
 * Erro de validação
 */
export class ValidationError extends AppError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, 'VALIDATION_ERROR', 400, true, details);
  }
}

/**
 * Erro de recurso não encontrado
 */
export class NotFoundError extends AppError {
  constructor(resource: string, identifier?: string) {
    const message = (identifier !== null && identifier !== undefined && identifier !== '') ?
        `${resource} with identifier '${identifier}' not found` :
        `${resource} not found`;

    super(message, 'NOT_FOUND', 404, true, {resource, identifier});
  }
}

/**
 * Erro de autorização
 */
export class UnauthorizedError extends AppError {
  constructor(message: string = 'Unauthorized access') {
    super(message, 'UNAUTHORIZED', 401);
  }
}

/**
 * Erro de permissão
 */
export class ForbiddenError extends AppError {
  constructor(message: string = 'Forbidden access') {
    super(message, 'FORBIDDEN', 403);
  }
}

/**
 * Erro de conflito (recurso já existe)
 */
export class ConflictError extends AppError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, 'CONFLICT', 409, true, details);
  }
}

/**
 * Erro de business rule
 */
export class BusinessRuleError extends AppError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, 'BUSINESS_RULE_VIOLATION', 422, true, details);
  }
}

/**
 * Erro de rate limit
 */
export class RateLimitError extends AppError {
  constructor(message: string = 'Rate limit exceeded') {
    super(message, 'RATE_LIMIT_EXCEEDED', 429);
  }
}

/**
 * Erro interno do servidor
 */
export class InternalServerError extends AppError {
  constructor(message: string = 'Internal server error', details?: Record<string, unknown>) {
    super(message, 'INTERNAL_ERROR', 500, false, details);
  }
}

/**
 * Erro de banco de dados
 */
export class DatabaseError extends AppError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, 'DATABASE_ERROR', 500, false, details);
  }
}

/**
 * Erro de serviço externo
 */
export class ExternalServiceError extends AppError {
  constructor(service: string, message: string, details?: Record<string, unknown>) {
    super(
        `External service error: ${service} - ${message}`, 'EXTERNAL_SERVICE_ERROR', 502, true, {service, ...details});
  }
}

/**
 * Erro de timeout
 */
export class TimeoutError extends AppError {
  constructor(operation: string, timeout: number) {
    super(`Operation '${operation}' timed out after ${timeout}ms`, 'TIMEOUT', 408, true, {operation, timeout});
  }
}

// ========================================
// Error Factory
// ========================================

export class ErrorFactory {
  /**
   * Cria erro baseado no tipo
   */
  public static create(type: string, message: string, details?: Record<string, unknown>): AppError {
    switch (type) {
      case 'VALIDATION_ERROR':
        return new ValidationError(message, details);
      case 'NOT_FOUND':
        return new NotFoundError(message);
      case 'UNAUTHORIZED':
        return new UnauthorizedError(message);
      case 'FORBIDDEN':
        return new ForbiddenError(message);
      case 'CONFLICT':
        return new ConflictError(message, details);
      case 'BUSINESS_RULE_VIOLATION':
        return new BusinessRuleError(message, details);
      case 'RATE_LIMIT_EXCEEDED':
        return new RateLimitError(message);
      case 'DATABASE_ERROR':
        return new DatabaseError(message, details);
      case 'EXTERNAL_SERVICE_ERROR':
        return new ExternalServiceError(details?.['service'] as string || 'unknown', message, details);
      case 'TIMEOUT':
        return new TimeoutError(details?.['operation'] as string || 'unknown', details?.['timeout'] as number || 0);
      default:
        return new InternalServerError(message, details);
    }
  }

  /**
   * Cria erro a partir de objeto Error genérico
   */
  public static fromError(error: Error, details?: Record<string, unknown>): AppError {
    if (error instanceof AppError) {
      return error;
    }

    // Detecta tipos específicos de erro
    if (error.name === 'ValidationError') {
      return new ValidationError(error.message, details);
    }

    if (error.name === 'CastError' || error.name === 'ValidatorError') {
      return new ValidationError(`Invalid data: ${error.message}`, details);
    }

    if (error.name === 'MongoServerError' || error.message.includes('duplicate key')) {
      return new ConflictError('Resource already exists', details);
    }

    if (error.name === 'TimeoutError') {
      return new TimeoutError('Operation timeout', 30000);
    }

    // Erro genérico
    return new InternalServerError(error.message, {originalError: error.name, ...details});
  }
}

// ========================================
// Error Handler
// ========================================

export class ErrorHandler {
  private static logError(error: AppError|Error): void {
    const logData = {
      timestamp: new Date().toISOString(),
      error: {name: error.name, message: error.message, stack: error.stack}
    };

    if (error instanceof AppError) {
      Object.assign(
          logData.error,
          {code: error.code, statusCode: error.statusCode, isOperational: error.isOperational, details: error.details});
    }

    if (error instanceof AppError && error.isOperational) {
      console.warn('Operational Error:', logData);
    } else {
      console.error('System Error:', logData);
    }
  }

  /**
   * Trata erro e retorna resposta padronizada
   */
  public static handle(error: Error|AppError): {statusCode: number; apiError: ApiError;} {
    this.logError(error);

    let appError: AppError;

    if (error instanceof AppError) {
      appError = error;
    } else {
      appError = ErrorFactory.fromError(error);
    }

    return {statusCode: appError.statusCode, apiError: appError.toJSON()};
  }

  /**
   * Verifica se erro é operacional
   */
  public static isOperationalError(error: Error): boolean {
    if (error instanceof AppError) {
      return error.isOperational;
    }
    return false;
  }

  /**
   * Trata processo de erro não capturado
   */
  public static handleUncaughtException(error: Error): void {
    console.error(
        'Uncaught Exception:',
        {timestamp: new Date().toISOString(), error: {name: error.name, message: error.message, stack: error.stack}});

    // Em produção, encerra o processo graciosamente
    if (process.env['NODE_ENV'] === 'production') {
      process.exit(1);
    }
  }

  /**
   * Trata promise rejeitada não capturada
   */
  public static handleUnhandledRejection(reason: unknown): void {
    console.error('Unhandled Rejection:', {
      timestamp: new Date().toISOString(),
      reason: reason instanceof Error ? {name: reason.name, message: reason.message, stack: reason.stack} : reason
    });

    // Em produção, encerra o processo graciosamente
    if (process.env['NODE_ENV'] === 'production') {
      process.exit(1);
    }
  }
}

// ========================================
// Error Utilities
// ========================================

/**
 * Wrapper para async functions que captura erros
 */
export function asyncErrorHandler<T extends(...args: unknown[]) => Promise<unknown>>(fn: T): T {
  return ((...args: Parameters<T>) => {
           return Promise.resolve(fn(...args)).catch((error) => {
             throw ErrorFactory.fromError(error);
           });
         }) as T;
}

/**
 * Guard para verificar se valor é um erro
 */
export function isError(value: unknown): value is Error {
  return value instanceof Error;
}

/**
 * Guard para verificar se é AppError
 */
export function isAppError(value: unknown): value is AppError {
  return value instanceof AppError;
}

/**
 * Cria assertion error
 */
export function assert(condition: boolean, message: string): asserts condition {
  if (!condition) {
    throw new ValidationError(`Assertion failed: ${message}`);
  }
}

/**
 * Cria assertion error para valores non-null
 */
export function assertExists<T>(value: T|null|undefined, message?: string): asserts value is T {
  const errorMessage =
      (message !== null && message !== undefined && message !== '') ? message : 'Expected value to exist';

  if (value === null || value === undefined) {
    throw new ValidationError(errorMessage);
  }
}

// ========================================
// Setup Global Error Handlers
// ========================================

/**
 * Configura handlers globais de erro
 */
export function setupGlobalErrorHandlers(): void {
  process.on('uncaughtException', ErrorHandler.handleUncaughtException);
  process.on('unhandledRejection', ErrorHandler.handleUnhandledRejection);
}

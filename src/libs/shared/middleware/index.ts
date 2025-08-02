/**
 * Middleware - Middlewares Compartilhados do Chassis
 *
 * Middlewares reutilizáveis para Express
 */

import type {NextFunction, Request, Response} from 'express';
import type {ApiError, ApiResponse} from '../types/index.js';
import {generateId} from '../utils/index.js';

// ========================================
// Middleware Types
// ========================================

export interface RequestWithContext extends Request {
  context: {requestId: string; startTime: number; userId?: string; storeId?: string; correlationId?: string;};
}

export interface ErrorWithStatus extends Error {
  status?: number;
  code?: string;
  details?: Record<string, unknown>;
}

// ========================================
// Context Middleware
// ========================================

/**
 * Adiciona contexto da requisição
 */
export function contextMiddleware() {
  return (req: Request, res: Response, next: NextFunction): void => {
    const contextReq = req as RequestWithContext;

    contextReq.context = {
      requestId: generateId(),
      startTime: Date.now(),
      correlationId: req.headers['x-correlation-id'] as string || generateId()
    };

    // Adiciona headers de resposta
    res.setHeader('X-Request-ID', contextReq.context.requestId);
    const correlationId = contextReq.context.correlationId;
    if (correlationId !== null && correlationId !== undefined && correlationId !== '') {
      res.setHeader('X-Correlation-ID', correlationId);
    }

    next();
  };
}

// ========================================
// Logging Middleware
// ========================================

/**
 * Middleware de logging de requisições
 */
export function requestLoggingMiddleware() {
  return async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    const contextReq = req as RequestWithContext;
    const {requestId, startTime} = contextReq.context;

    // Log da requisição
    console.log({
      requestId,
      method: req.method,
      url: req.url,
      userAgent: req.headers['user-agent'],
      ip: req.ip,
      timestamp: new Date().toISOString()
    });

    // Intercepta o final da resposta
    const originalSend = res.send;
    res.send = function(body: unknown): Response {
      const duration = Date.now() - startTime;

      // Log da resposta
      console.log({
        requestId,
        statusCode: res.statusCode,
        duration: `${duration}ms`,
        contentLength: res.get('content-length'),
        timestamp: new Date().toISOString()
      });

      return originalSend.call(this, body);
    };

    next();
  };
}

// ========================================
// Error Handling Middleware
// ========================================

/**
 * Middleware de tratamento de erros
 */
export function errorHandlerMiddleware() {
  return (error: ErrorWithStatus, req: Request, res: Response, _next: NextFunction): void => {
    const contextReq = req as RequestWithContext;
    const requestId = contextReq.context?.requestId ?? generateId();

    // Log do erro
    console.error({
      requestId,
      error: {message: error.message, stack: error.stack, code: error.code, status: error.status},
      request: {method: req.method, url: req.url, headers: req.headers, body: req.body as unknown},
      timestamp: new Date().toISOString()
    });

    // Determina status HTTP
    const status = error.status ?? 500;

    // Cria resposta de erro padronizada
    const apiError: ApiError = {
      code: error.code ?? 'INTERNAL_ERROR',
      message: error.message || 'Internal server error',
      traceId: requestId,
      ...(error.details && {details: error.details}),
      ...(process.env['NODE_ENV'] === 'development' && error.stack !== null && error.stack !== undefined &&
          error.stack !== '' && {stack: error.stack})
    };

    const response: ApiResponse = {success: false, error: apiError, timestamp: new Date().toISOString(), requestId};

    res.status(status).json(response);
  };
}

/**
 * Middleware para capturar 404
 */
export function notFoundMiddleware() {
  return (req: Request, res: Response): void => {
    const contextReq = req as RequestWithContext;
    const requestId = contextReq.context?.requestId || generateId();

    const response: ApiResponse = {
      success: false,
      error: {code: 'NOT_FOUND', message: `Route ${req.method} ${req.url} not found`, traceId: requestId},
      timestamp: new Date().toISOString(),
      requestId
    };

    res.status(404).json(response);
  };
}

// ========================================
// Security Middleware
// ========================================

/**
 * Middleware de segurança básica
 */
export function securityMiddleware() {
  return (_req: Request, res: Response, next: NextFunction): void => {
    // Remove headers que expõem tecnologia
    res.removeHeader('X-Powered-By');

    // Headers de segurança
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

    // CSP básico
    res.setHeader(
        'Content-Security-Policy', 'default-src \'self\'; script-src \'self\'; style-src \'self\' \'unsafe-inline\'');

    next();
  };
}

/**
 * Middleware de rate limiting básico
 */
export function rateLimitMiddleware(
    windowMs: number = 15 * 60 * 1000,  // 15 minutos
    maxRequests: number = 100) {
  const clients = new Map < string, {
    count: number;
    resetTime: number
  }
  > ();

  return (req: Request, res: Response, next: NextFunction): void => {
    const clientId = req.ip ?? 'unknown';
    const now = Date.now();

    // Limpa entries expirados
    for (const [key, value] of clients.entries()) {
      if (now > value.resetTime) {
        clients.delete(key);
      }
    }

    const client = clients.get(clientId);

    if (!client) {
      clients.set(clientId, {count: 1, resetTime: now + windowMs});
      next();
      return;
    }

    if (client.count >= maxRequests) {
      const contextReq = req as RequestWithContext;
      const requestId = contextReq.context?.requestId || generateId();

      const response: ApiResponse = {
        success: false,
        error: {code: 'RATE_LIMIT_EXCEEDED', message: 'Too many requests', traceId: requestId},
        timestamp: new Date().toISOString(),
        requestId
      };

      res.status(429).json(response);
      return;
    }

    client.count++;
    next();
  };
}

// ========================================
// Validation Middleware
// ========================================

/**
 * Middleware de validação de JSON
 */
export function validateJsonMiddleware() {
  return (req: Request, res: Response, next: NextFunction): void => {
    const contentType = req.headers['content-type'];
    const hasJsonContentType = contentType?.includes('application/json') ?? false;

    if (hasJsonContentType) {
      const hasBody = req.body !== null && req.body !== undefined;
      if (!hasBody) {
        const contextReq = req as RequestWithContext;
        const requestId = contextReq.context?.requestId ?? generateId();

        const response: ApiResponse = {
          success: false,
          error: {code: 'INVALID_JSON', message: 'Invalid JSON payload', traceId: requestId},
          timestamp: new Date().toISOString(),
          requestId
        };

        res.status(400).json(response);
        return;
      }
    }

    next();
  };
}

/**
 * Middleware de validação de schema
 */
export function validateSchemaMiddleware(validator: (data: unknown) => {
  isValid: boolean;
  errors: unknown[]
}, target: 'body'|'query'|'params' = 'body') {
  return (req: Request, res: Response, next: NextFunction): void => {
    const data = req[target] as unknown;
    const validation = validator(data);

    if (!validation.isValid) {
      const contextReq = req as RequestWithContext;
      const requestId = contextReq.context?.requestId || generateId();

      const response: ApiResponse = {
        success: false,
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Validation failed',
          details: {errors: validation.errors},
          traceId: requestId
        },
        timestamp: new Date().toISOString(),
        requestId
      };

      res.status(400).json(response);
      return;
    }

    next();
  };
}

// ========================================
// Performance Middleware
// ========================================

/**
 * Middleware de timeout
 */
export function timeoutMiddleware(timeoutMs: number = 30000) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const timeout = setTimeout(() => {
      if (!res.headersSent) {
        const contextReq = req as RequestWithContext;
        const requestId = contextReq.context?.requestId || generateId();

        const response: ApiResponse = {
          success: false,
          error: {code: 'REQUEST_TIMEOUT', message: 'Request timeout', traceId: requestId},
          timestamp: new Date().toISOString(),
          requestId
        };

        res.status(408).json(response);
      }
    }, timeoutMs);

    res.on('finish', () => clearTimeout(timeout));
    res.on('close', () => clearTimeout(timeout));

    next();
  };
}

/**
 * Middleware de monitoramento de performance
 */
export function performanceMiddleware() {
  return (req: Request, res: Response, next: NextFunction): void => {
    const startTime = Date.now();

    res.on('finish', () => {
      const duration = Date.now() - startTime;
      console.log(`${req.method} ${req.path} - ${duration}ms`);
    });

    next();
  };
}

// ========================================
// Health Check Middleware
// ========================================

/**
 * Middleware básico de health check
 */
export function healthCheckMiddleware(path: string = '/health') {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (req.path === path && req.method === 'GET') {
      const response: ApiResponse<{status: string; timestamp: string}> = {
        success: true,
        data: {status: 'healthy', timestamp: new Date().toISOString()},
        timestamp: new Date().toISOString(),
        requestId: generateId()
      };

      res.json(response);
      return;
    }

    next();
  };
}

// ========================================
// CORS Middleware
// ========================================

/**
 * Middleware de CORS customizado
 */
export function corsMiddleware(options: {
  origin?: string|string[]|((origin: string) => boolean);
  methods?: string[];
  allowedHeaders?: string[];
  credentials?: boolean;
} = {}) {
  const {
    origin = '*',
    methods = ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders = ['Content-Type', 'Authorization', 'X-Correlation-ID'],
    credentials = false
  } = options;

  return (req: Request, res: Response, next: NextFunction): void => {
    const requestOrigin = req.headers.origin;

    // Determina origin permitido
    let allowedOrigin = '*';
    if (typeof origin === 'string') {
      allowedOrigin = origin;
    } else if (Array.isArray(origin)) {
      allowedOrigin = (requestOrigin !== null && requestOrigin !== undefined && origin.includes(requestOrigin)) ?
          requestOrigin :
          '';
    } else if (typeof origin === 'function' && requestOrigin !== null && requestOrigin !== undefined) {
      allowedOrigin = origin(requestOrigin) ? requestOrigin : '';
    }

    // Headers CORS
    if (allowedOrigin) {
      res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
    }
    res.setHeader('Access-Control-Allow-Methods', methods.join(', '));
    res.setHeader('Access-Control-Allow-Headers', allowedHeaders.join(', '));

    if (credentials) {
      res.setHeader('Access-Control-Allow-Credentials', 'true');
    }

    // Preflight
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }

    next();
  };
}

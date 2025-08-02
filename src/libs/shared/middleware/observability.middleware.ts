import {Buffer} from 'buffer';
import crypto from 'crypto';
import type {NextFunction, Request, Response} from 'express';
import {LogContext, LogLevel, Observability, TraceSpan} from '../observability/index.js';

// Extensão do Request para incluir contexto de observabilidade
declare global {
  namespace Express {
    interface Request {
      observability?: {requestId: string; span: TraceSpan; context: LogContext; startTime: number;};
    }
  }
}

/**
 * Middleware global de observabilidade para Express
 * Instrumenta automaticamente todas as rotas com logs, métricas e traces
 */
export function observabilityMiddleware(req: Request, res: Response, next: NextFunction): void {
  const requestId = crypto.randomUUID();
  const startTime = Date.now();

  // Criar contexto de observabilidade
  const context: LogContext = {
    requestId,
    correlationId: crypto.randomUUID(),
    operation: `${req.method} ${req.path}`,
    userAgent: req.get('User-Agent'),
    ip: req.ip ?? req.connection.remoteAddress ?? 'unknown',
  };

  // Iniciar span de trace
  const span = Observability.tracer.startSpan(`HTTP ${req.method} ${req.path}`);
  Observability.tracer.addTag(span, 'http.method', req.method);
  Observability.tracer.addTag(span, 'http.url', req.originalUrl);
  Observability.tracer.addTag(span, 'http.user_agent', req.get('User-Agent') ?? 'unknown');

  // Anexar contexto ao request
  req.observability = {
    requestId,
    span,
    context,
    startTime,
  };

  // Log de entrada da requisição
  Observability.logger.info('HTTP Request started', {
    ...context,
    method: req.method,
    url: req.originalUrl,
    query: req.query,
    headers: {
      'content-type': req.get('Content-Type'),
      'accept': req.get('Accept'),
    },
  });

  // Instrumentar resposta
  const originalSend = res.send;
  res.send = function(body: unknown): Response {
    const duration = Date.now() - startTime;
    const statusCode = res.statusCode;

    // Calcular tamanho da resposta
    const bodyStr = typeof body === 'string' ? body : JSON.stringify(body);
    const responseSize = Buffer.byteLength(bodyStr ?? '');

    // Adicionar tags ao span
    Observability.tracer.addTag(span, 'http.status_code', statusCode.toString());
    Observability.tracer.addTag(span, 'response.size', responseSize.toString());

    // Métricas de performance
    const routePath = (req.route as {path?: string})?.path ?? req.path;
    Observability.metrics.timing('http.request.duration', duration, {
      method: req.method,
      route: routePath,
      status: statusCode.toString(),
    });

    Observability.metrics.counter('http.requests.total', 1, {
      method: req.method,
      status: statusCode.toString(),
    });

    // Log de saída da requisição
    const message = `HTTP Request completed - ${statusCode}`;

    if (statusCode >= 400) {
      Observability.logger.warn(message, {
        ...context,
        duration,
        statusCode,
        responseSize,
      });
    } else {
      Observability.logger.info(message, {
        ...context,
        duration,
        statusCode,
        responseSize,
      });
    }

    // Finalizar span
    if (statusCode >= 400) {
      Observability.tracer.addTag(span, 'error', 'true');
    }
    Observability.tracer.finishSpan(span);

    return originalSend.call(this, body);
  };

  // Capturar erros não tratados
  const originalNext = next;
  const enhancedNext: NextFunction = (error?: unknown) => {
    if (error instanceof Error) {
      const duration = Date.now() - startTime;

      // Log do erro
      Observability.logger.error('HTTP Request error', error, {
        ...context,
        duration,
        stack: error.stack,
      });

      // Métricas de erro
      const routePath = (req.route as {path?: string})?.path ?? req.path;
      Observability.metrics.counter('http.requests.errors', 1, {
        method: req.method,
        route: routePath,
        error: error.name,
      });

      // Marcar span como erro
      Observability.tracer.addTag(span, 'error', 'true');
      Observability.tracer.addTag(span, 'error.message', error.message);
      Observability.tracer.addLog(span, error.message, LogLevel.ERROR);
    }

    return originalNext(error);
  };

  enhancedNext();
}

/**
 * Helper para obter contexto de observabilidade da requisição atual
 */
export function getRequestObservability(req: Request): typeof req.observability {
  return req.observability;
}

/**
 * Helper para adicionar log contextual à requisição atual
 */
export function logWithContext(
    req: Request, message: string, level: 'info'|'warn'|'error' = 'info', additionalContext?: LogContext): void {
  const context = req.observability?.context;
  if (!context) {
    if (level === 'error') {
      Observability.logger.error(message, undefined, additionalContext);
    } else {
      Observability.logger[level](message, additionalContext);
    }
    return;
  }

  const fullContext = {
    ...context,
    ...additionalContext,
  };

  if (level === 'error') {
    Observability.logger.error(message, undefined, fullContext);
  } else {
    Observability.logger[level](message, fullContext);
  }
}

/**
 * Helper para adicionar métrica contextual à requisição atual
 */
export function addMetricWithContext(
    req: Request, name: string, value: number, additionalTags?: Record<string, string>): void {
  const routePath = (req.route as {path?: string})?.path ?? req.path;
  const baseTags = {
    method: req.method,
    route: routePath,
  };

  Observability.metrics.gauge(name, value, {
    ...baseTags,
    ...additionalTags,
  });
}

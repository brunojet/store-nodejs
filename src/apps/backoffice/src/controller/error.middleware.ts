import { Request, Response, NextFunction } from 'express';

/**
 * Middleware para tratamento global de erros e exceptions.
 * Pode ser expandido para observabilidade (logs, métricas, etc).
 */
export function errorHandlerMiddleware(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Log para observabilidade futura
  // Exemplo: enviar para um serviço de monitoramento
  console.error('[Error]', {
    message: err.message,
    stack: err.stack,
    path: req.path,
    method: req.method,
    body: req.body,
    query: req.query,
    params: req.params,
  });

  // Mensagem padronizada
  res.status(err.status || 500).json({
    success: false,
    error: {
      message: 'Ocorreu um erro inesperado. Tente novamente ou contate o suporte.',
      details: process.env.NODE_ENV === 'development' ? err.message : undefined,
      code: err.code || undefined,
    }
  });
}

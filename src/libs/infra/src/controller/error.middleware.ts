import {Request, Response} from 'express';

/**
 * Middleware para tratamento global de erros e exceptions.
 * Pode ser expandido para observabilidade (logs, métricas, etc).
 */
export function errorHandlerMiddleware(err: unknown, req: Request,
                                       res: Response) {
  // Cast seguro para Error
  const error = (typeof err === 'object' && err !== null)
                    ? err as Record<string, unknown>
                    : {message : String(err)};
  console.error('[Error]', {
    message : error['message'],
    stack : error['stack'],
    path : req.path,
    method : req.method,
    body : req.body,
    query : req.query,
    params : req.params,
  });

  // Mensagem padronizada
  res.status(typeof error['status'] === 'number' ? (error['status'] as number)
                                                 : 500)
      .json({
        success : false,
        error : {
          message :
              'Ocorreu um erro inesperado. Tente novamente ou contate o suporte.',
          details : process.env['NODE_ENV'] === 'development' ? error['message']
                                                              : undefined,
          code : error['code'] || undefined,
        }
      });
}

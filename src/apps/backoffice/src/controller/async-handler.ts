import {NextFunction, Request, RequestHandler, Response} from 'express';

/**
 * Wrapper para funções assíncronas em rotas Express.
 * Encaminha qualquer erro para o middleware de erro, sem precisar try/catch
 * manual.
 */
export function asyncHandler(
    fn: (req: Request, res: Response, next: NextFunction) =>
        Promise<any>): RequestHandler {
  return (req, res,
          next) => { Promise.resolve(fn(req, res, next)).catch(next); };
}

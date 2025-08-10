import {Request, Response, Router} from 'express';

interface AuthenticatedRequest extends Request {
  userId: string;
}

import {BaseService, Pageable} from '../service/base.service';

export abstract class BaseController<
  TModel, TCreate, TUpdate, TRepo,
  TService extends BaseService<TModel, TCreate, TUpdate, TRepo>> {
  public router: Router;
  protected service: TService;

  constructor(service: TService) {
    this.service = service;
    this.router = Router();
    this.initRoutes();
  }

  protected initRoutes() {
    this.router.post('/', this.create.bind(this));
    this.router.get('/:id', this.getById.bind(this));
    this.router.put('/:id', this.update.bind(this));
    this.router.delete('/:id', this.delete.bind(this));
    this.router.get('/', this.getAll.bind(this));
  }

  getUserId(req: Request): string {
    const { userId = 'unknown' } = req as AuthenticatedRequest;
    if (typeof userId !== 'string') {
      // Se userId for objeto, tenta pegar .id ou .sub, senão converte para string
      if (userId && typeof userId === 'object') {
        const obj = userId as Record<string, unknown>;
        return String(obj.id ?? obj.sub ?? JSON.stringify(obj));
      }
      return String(userId);
    }
    return userId;
  }

  async create(req: Request, res: Response) {
    try {
      const userId = this.getUserId(req);
      const created = await this.service.create(userId, req.body);
      res.status(201).json(created);
    } catch (err) {
      res.status(500).json({ error: 'Internal server error', details: err instanceof Error ? err.message : err });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const {id} = req.params;
      const item = await this.service.getById(id);
      if (!item)
        return res.status(404).json({error : 'Not found'});
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: 'Internal server error', details: err instanceof Error ? err.message : err });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const {id} = req.params;
      const userId = this.getUserId(req);
      const updated = await this.service.update(userId, id, req.body);
      res.json(updated);
    } catch (err) {
      res.status(500).json({ error: 'Internal server error', details: err instanceof Error ? err.message : err });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const {id} = req.params;
      const deleted = await this.service.delete(id);
      res.json(deleted);
    } catch (err) {
      res.status(500).json({ error: 'Internal server error', details: err instanceof Error ? err.message : err });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const {page = 1, size = 20, ...rawFilter} = req.query;
      // Converte todos os valores do filtro para string (ou outro tipo esperado)
      const filter =
          Object.fromEntries(Object.entries(rawFilter).map(
              ([ k, v ]) => [k, typeof v === 'string' ? v : String(v)])) as
          Partial<TModel>;
      const result: Pageable<TModel> = await this.service.getAll(
          {filter, page : Number(page), size : Number(size)});
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: 'Internal server error', details: err instanceof Error ? err.message : err });
    }
  }
}

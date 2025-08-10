import {Request, Response, Router} from 'express';

import {asyncHandler} from './async-handler';

interface AuthenticatedRequest extends Request {
  userId: string;
}

import {
  BaseService,
  Pageable,
  IBaseRepository,
} from '../service/base.service';

export abstract class BaseController<
    TModel, TCreate, TUpdate, TRepo extends IBaseRepository<TModel>,
                                            TService extends
        BaseService<TModel, TCreate, TUpdate, TRepo>> {
  public router: Router;
  protected service: TService;

  constructor(service: TService) {
    this.service = service;
    this.router = Router();
    this.initRoutes();
  }

  protected initRoutes() {
    this.router.post('/', asyncHandler(this.create.bind(this)));
    this.router.get('/:id', asyncHandler(this.getById.bind(this)));
    this.router.put('/:id', asyncHandler(this.update.bind(this)));
    this.router.delete('/:id', asyncHandler(this.delete.bind(this)));
    this.router.get('/', asyncHandler(this.getAll.bind(this)));
  }

  getUserId(req: Request): string {
    const {userId = 'unknown'} = req as AuthenticatedRequest;
    if (typeof userId !== 'string') {
      // Se userId for objeto, tenta pegar ['id'] ou ['sub'], senão converte
      // para string
      if (userId && typeof userId === 'object') {
        const obj = userId as Record<string, unknown>;
        return String(obj['id'] ?? obj['sub'] ?? JSON.stringify(obj));
      }
      return String(userId);
    }
    return userId;
  }

  async create(req: Request, res: Response) {
    const userId = this.getUserId(req);
    const created = await this.service.create(userId, req.body);
    res.status(201).json(created);
  }

  async getById(req: Request, res: Response) {
    const id = req.params['id'];
    const item = await this.service.getById(id);
    if (!item) {
      res.status(404).json({error : 'Not found'});
      return;
    }
    res.json(item);
  }

  async update(req: Request, res: Response) {
    const id = req.params['id'];
    const userId = this.getUserId(req);
    const updated = await this.service.update(userId, id, req.body);
    res.json(updated);
  }

  async delete(req: Request, res: Response) {
    const id = req.params['id'];
    const deleted = await this.service.delete(id);
    res.json(deleted);
  }

  async getAll(req: Request, res: Response) {
    // Extrai paginação
    const {page = 0, pageSize = 20, ...filterParams} = req.query;
    const pageNum = Math.max(0, Number(page));
    const pageSizeNum = Math.max(1, Number(pageSize));
    // Todos os demais parâmetros viram filtro genérico
    const filter = Object.fromEntries(
        Object.entries(filterParams)
            .map(([ k, v ]) => [k,
                                typeof v === 'string' ? v : String(v),
    ]));
    const result: Pageable<TModel> = await this.service.getAll({
      filter : filter as Partial<TModel>,
      page : pageNum,
      pageSize : pageSizeNum,
    });
    res.json(result);
  }
}

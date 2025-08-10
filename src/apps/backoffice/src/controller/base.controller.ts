import { Request, Response, Router } from 'express';
import { BaseService, Pageable } from '../service/base.service';

export abstract class BaseController<TModel, TCreate, TUpdate, TService extends BaseService<TModel, TCreate, TUpdate, any>> {
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

  async create(req: Request, res: Response) {
    const created = await this.service.create(req.body);
    res.status(201).json(created);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const item = await this.service.getById(id);
    if (!item) return res.status(404).json({ error: 'Not found' });
    res.json(item);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const updated = await this.service.update(id, req.body);
    res.json(updated);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const deleted = await this.service.delete(id);
    res.json(deleted);
  }

  async getAll(req: Request, res: Response) {
    const { page = 1, size = 20, ...rawFilter } = req.query;
    // Converte todos os valores do filtro para string (ou outro tipo esperado)
    const filter = Object.fromEntries(
      Object.entries(rawFilter).map(([k, v]) => [k, typeof v === 'string' ? v : String(v)])
    ) as Partial<TModel>;
    const result: Pageable<TModel> = await this.service.getAll({
      filter,
      page: Number(page),
      size: Number(size)
    });
    res.json(result);
  }
}

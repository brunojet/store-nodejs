export interface Pageable<T> {
  data: T[];
  total: number;
  page: number;
  size: number;
}

export abstract class BaseService<TModel, TCreate, TUpdate, TRepo> {
  protected repo: TRepo;

  constructor(repo: TRepo) { this.repo = repo; }

  async getAll(params
               ?: {filter?: Partial<TModel>; page?: number; size?: number}):
      Promise<Pageable<TModel>> {
    // Assume que o repo tem getAll({ where, skip, take }) e count({ where })
    const {filter = {}, page = 1, size = 20} = params || {};
    const skip = (page - 1) * size;
    // @ts-ignore
    const data = await this.repo.getAll({where : filter, skip, take : size});
    // @ts-ignore
    const total = await this.repo.count(filter);
    return {data, total, page, size};
  }

  async getById(id: string): Promise<TModel|null> {
    // @ts-ignore
    return this.repo.getById(id);
  }

  async create(userId: string, data: TCreate): Promise<TModel> {
    // @ts-ignore
    return this.repo.create(userId, data);
  }

  async update(userId: string, id: string, data: TUpdate): Promise<TModel> {
    // @ts-ignore
    return this.repo.update(userId, id, data);
  }

  async delete(id: string): Promise<TModel> {
    // @ts-ignore
    return this.repo.delete(id);
  }
}

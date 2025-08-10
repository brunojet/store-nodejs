export interface Pageable<T> {
  data: T[];
  total: number;
  page: number;
  size: number;
}

export abstract class BaseService<TModel, TCreate, TUpdate, TRepo> {
  protected repo: TRepo;

  constructor(repo: TRepo) {
    this.repo = repo;
  }

  async getAll(params?: {filter?: Partial<TModel>; page?: number; size?: number}): Promise<Pageable<TModel>> {
    const {filter = {}, page = 1, size = 20} = params || {};
    const skip = (page - 1) * size;
    // @ts-expect-error: repo pode não ter tipagem exata, ignorar para integração dinâmica
    const data = await this.repo.getAll({where: filter, skip, take: size});
    // @ts-expect-error: repo pode não ter tipagem exata, ignorar para integração dinâmica
    const total = await this.repo.count(filter);
    return {data, total, page, size};
  }

  async getById(id: string): Promise<TModel|null> {
    // @ts-expect-error: repo pode não ter tipagem exata, ignorar para integração dinâmica
    const result = await this.repo.getById(id);
    return result;
  }

  async create(userId: string, data: TCreate): Promise<TModel> {
    // @ts-expect-error: repo pode não ter tipagem exata, ignorar para integração dinâmica
    const result = await this.repo.create(userId, data);
    return result;
  }

  async update(userId: string, id: string, data: TUpdate): Promise<TModel> {
    // @ts-expect-error: repo pode não ter tipagem exata, ignorar para integração dinâmica
    const result = await this.repo.update(userId, id, data);
    return result;
  }

  async delete(id: string): Promise<TModel> {
  // @ts-expect-error: repo pode não ter tipagem exata, ignorar para integração dinâmica
    return this.repo.delete(id);
  }
}

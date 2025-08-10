// Função genérica para omitir campos nulos/undefined
export function omitNulls<T>(obj: T): any {
  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return undefined; // Omit empty arrays
    }
    return obj.map(omitNulls);
  }
  if (typeof obj === 'object' && obj !== null) {
    const result: any = {};
    for (const key in obj) {
      const value = obj[key as keyof T];
      if (value === null || value === undefined) {
        continue; // omite campos nulos ou undefined
      }
      if (value instanceof Date) {
        result[key] = value.toISOString();
      } else {
        result[key] = omitNulls(value);
      }
    }
    return result;
  }
  return obj;
}
export interface Pageable<T> {
  items: T[];
  total: number;    // Total de registros no banco
  page: number;     // Página atual (zero-based: 0, 1, 2, ...)
  pageSize: number; // Número de itens retornados nesta página
}

export interface IBaseRepository<TModel> {
  getAll(params?: any): Promise<TModel[]>;
  count(where?: any): Promise<number>;
}

export abstract class BaseService<TModel, TCreate, TUpdate,
                                  TRepo extends IBaseRepository<TModel>> {
  protected repo: TRepo;

  constructor(repo: TRepo) { this.repo = repo; }

  async getAll(params?: {
    filter?: Partial<TModel>;
    page?: number;
    pageSize?: number;
    include?: any;
    [key: string]: any;
  }): Promise<Pageable<TModel>> {
    const { filter = {}, page = 0, pageSize = 20, include, ...rest } = params || {};
    if (page < 0 || pageSize < 1) {
      throw new Error(`Invalid pagination params: page=${page}, pageSize=${pageSize}`);
    }
    const skip = page * pageSize;
    try {
      const prismaArgs: any = {
        where: filter,
        skip,
        take: pageSize,
        ...rest,
      };
      if (include) prismaArgs.include = include;
      const items = await this.repo.getAll(prismaArgs);
      const total = await this.repo.count(filter);
      return omitNulls({ items, total, page, pageSize: items.length });
    } catch (error) {
      throw error;
    }
  }

  async getById(id: string): Promise<TModel|null> {
    // @ts-expect-error: repo pode não ter tipagem exata, ignorar para
    // integração dinâmica
    const result = await this.repo.getById(id);
    return result;
  }

  async create(userId: string, data: TCreate): Promise<TModel> {
    // @ts-expect-error: repo pode não ter tipagem exata, ignorar para
    // integração dinâmica
    const result = await this.repo.create(userId, data);
    return result;
  }

  async update(userId: string, id: string, data: TUpdate): Promise<TModel> {
    // @ts-expect-error: repo pode não ter tipagem exata, ignorar para
    // integração dinâmica
    const result = await this.repo.update(userId, id, data);
    return result;
  }

  async delete(id: string): Promise<TModel> {
    // @ts-expect-error: repo pode não ter tipagem exata, ignorar para
    // integração dinâmica
    return this.repo.delete(id);
  }
}

function toPrismaWhere(filter: Partial<CategoriaModel>): any {
  const where: any = {};
  for (const key in filter) {
    const value = filter[key as keyof CategoriaModel];
    if (value !== null && value !== undefined) {
      where[key] = value;
    }
  }
  return where;
}
import {
  CategoriaCreateModel,
  CategoriaModel,
  CategoriaRepository,
  CategoriaUpdateModel,
} from '@shared';

import {BaseService} from './base.service';

export class CategoriaService extends
    BaseService<CategoriaModel, CategoriaCreateModel, CategoriaUpdateModel,
                CategoriaRepository> {
  constructor(repo: CategoriaRepository) { super(repo); }

  async getAll(params?: {filter?: Partial<CategoriaModel>; page?: number; pageSize?: number}) {
    // Sempre inclui filhos, pai, tipoCategoria nas relações
    const prismaParams = {
      ...params,
      // Adiciona configuração de include para relações
      include: {
        filhos: true,
        pai: true,
        tipoCategoria: true,
      },
    };
    return super.getAll(prismaParams);
  }
}

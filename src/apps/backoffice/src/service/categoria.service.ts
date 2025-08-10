import {BaseService} from '@infra/service';
import {
  CategoriaCreateModel,
  CategoriaModel,
  CategoriaRepository,
  CategoriaUpdateModel,
} from '@shared';

export class CategoriaService extends
    BaseService<CategoriaModel, CategoriaCreateModel, CategoriaUpdateModel,
                CategoriaRepository> {
  constructor(repo: CategoriaRepository) { super(repo); }

  async getAll(params?: {
    filter?: Partial<CategoriaModel>;
    page?: number;
    pageSize?: number;
  }) {
    // Sempre inclui filhos, pai, tipoCategoria nas relações
    const prismaParams = {
      ...params,
      // Adiciona configuração de include para relações
      include : {
        filhos : true,
        pai : true,
        tipoCategoria : true,
      },
    };
    return super.getAll(prismaParams);
  }
}

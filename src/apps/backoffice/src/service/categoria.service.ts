import { CategoriaRepository } from '@shared';
import { CategoriaCreateModel, CategoriaUpdateModel, CategoriaModel } from '@shared';
import { BaseService } from './base.service';

export class CategoriaService extends BaseService<CategoriaModel, CategoriaCreateModel, CategoriaUpdateModel, CategoriaRepository> {
  constructor(repo: CategoriaRepository) {
    super(repo);
  }
}

import { TipoCategoriaRepository } from '@shared';
import { TipoCategoriaCreateModel, TipoCategoriaUpdateModel, TipoCategoriaModel } from '@shared';
import { BaseService } from './base.service';

export class TipoCategoriaService extends BaseService<TipoCategoriaModel, TipoCategoriaCreateModel, TipoCategoriaUpdateModel, TipoCategoriaRepository> {
  constructor(repo: TipoCategoriaRepository) {
    super(repo);
  }
}

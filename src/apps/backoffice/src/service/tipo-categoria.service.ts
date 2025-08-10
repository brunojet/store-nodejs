import {
  TipoCategoriaCreateModel,
  TipoCategoriaModel,
  TipoCategoriaRepository,
  TipoCategoriaUpdateModel
} from '@shared';

import {BaseService} from './base.service';

export class TipoCategoriaService extends
    BaseService<TipoCategoriaModel, TipoCategoriaCreateModel,
                TipoCategoriaUpdateModel, TipoCategoriaRepository> {
  constructor(repo: TipoCategoriaRepository) { super(repo); }
}

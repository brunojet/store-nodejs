import {BaseService} from '@infra/service';
import {
  TipoCategoriaCreateModel,
  TipoCategoriaModel,
  TipoCategoriaRepository,
  TipoCategoriaUpdateModel
} from '@shared';

export class TipoCategoriaService extends
    BaseService<TipoCategoriaModel, TipoCategoriaCreateModel,
                TipoCategoriaUpdateModel, TipoCategoriaRepository> {
  constructor(repo: TipoCategoriaRepository) { super(repo); }
}

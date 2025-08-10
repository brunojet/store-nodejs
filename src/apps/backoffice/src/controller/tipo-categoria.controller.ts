import { TipoCategoriaService } from '../service/tipo-categoria.service';
import { TipoCategoriaModel, TipoCategoriaCreateModel, TipoCategoriaUpdateModel } from '@shared';
import { BaseController } from './base.controller';

export class TipoCategoriaController extends BaseController<TipoCategoriaModel, TipoCategoriaCreateModel, TipoCategoriaUpdateModel, TipoCategoriaService> {
  constructor(service: TipoCategoriaService) {
    super(service);
  }
}

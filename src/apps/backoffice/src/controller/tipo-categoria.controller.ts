import {
  TipoCategoriaCreateModel,
  TipoCategoriaModel,
  TipoCategoriaUpdateModel
} from '@shared';

import {TipoCategoriaService} from '../service/tipo-categoria.service';

import {BaseController} from './base.controller';

export class TipoCategoriaController extends
    BaseController<TipoCategoriaModel, TipoCategoriaCreateModel,
                   TipoCategoriaUpdateModel, TipoCategoriaService> {
  constructor(service: TipoCategoriaService) { super(service); }
}

import {
  TipoCategoriaCreateModel,
  TipoCategoriaModel,
  TipoCategoriaRepository,
  TipoCategoriaUpdateModel
} from '@shared';

import {TipoCategoriaService} from '../service/tipo-categoria.service';

import {BaseController} from './base.controller';

export class TipoCategoriaController extends BaseController<
    TipoCategoriaModel, TipoCategoriaCreateModel, TipoCategoriaUpdateModel,
    TipoCategoriaRepository, TipoCategoriaService> {
  constructor(service: TipoCategoriaService) { super(service); }
}

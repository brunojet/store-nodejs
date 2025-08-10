import {
  TipoCategoriaCreateModel,
  TipoCategoriaModel,
  TipoCategoriaUpdateModel
} from '@shared';

import {TipoCategoriaService} from '../service/tipo-categoria.service';

import {BaseController} from './base.controller';
import { TipoCategoriaRepository } from '@shared';

export class TipoCategoriaController extends
    BaseController<
      TipoCategoriaModel,
      TipoCategoriaCreateModel,
      TipoCategoriaUpdateModel,
      TipoCategoriaRepository,
      TipoCategoriaService
    > {
  constructor(service: TipoCategoriaService) { super(service); }
}

import {
  CategoriaCreateModel,
  CategoriaModel,
  CategoriaUpdateModel
} from '@shared';

import {CategoriaService} from '../service/categoria.service';

import {BaseController} from './base.controller';

export class CategoriaController extends
    BaseController<CategoriaModel, CategoriaCreateModel, CategoriaUpdateModel,
                   CategoriaService> {
  constructor(service: CategoriaService) { super(service); }
}

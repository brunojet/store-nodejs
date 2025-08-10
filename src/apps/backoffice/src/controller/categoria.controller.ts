import {
  CategoriaCreateModel,
  CategoriaModel,
  CategoriaRepository,
  CategoriaUpdateModel
} from '@shared';

import {CategoriaService} from '../service/categoria.service';

import {BaseController} from './base.controller';

export class CategoriaController extends
    BaseController<CategoriaModel, CategoriaCreateModel, CategoriaUpdateModel,
                   CategoriaRepository, CategoriaService> {
  constructor(service: CategoriaService) { super(service); }
}

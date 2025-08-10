import {BaseController} from '@infra/controller';
import {
  CategoriaCreateModel,
  CategoriaModel,
  CategoriaRepository,
  CategoriaUpdateModel
} from '@shared';

import {CategoriaService} from '../service/categoria.service';

export class CategoriaController extends
    BaseController<CategoriaModel, CategoriaCreateModel, CategoriaUpdateModel,
                   CategoriaRepository, CategoriaService> {
  constructor(service: CategoriaService) { super(service); }
}

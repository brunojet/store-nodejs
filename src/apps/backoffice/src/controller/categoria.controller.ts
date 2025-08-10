import { CategoriaService } from '../service/categoria.service';
import { CategoriaModel, CategoriaCreateModel, CategoriaUpdateModel } from '@shared';
import { BaseController } from './base.controller';

export class CategoriaController extends BaseController<CategoriaModel, CategoriaCreateModel, CategoriaUpdateModel, CategoriaService> {
  constructor(service: CategoriaService) {
    super(service);
  }
}

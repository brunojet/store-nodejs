import {IHasAudit, IHasId} from './base.model';
import {
  TipoCategoriaCreateModel,
  TipoCategoriaModel,
  TipoCategoriaUpdateModel
} from './tipo-categoria.model'

export interface CategoriaModel extends IHasAudit {
  nome: string;
  tipoCategoriaId?: string|null;
  tipoCategoria?: TipoCategoriaModel|null;
  paiId?: string|null;
  pai?: CategoriaModel|null;
  filhos?: CategoriaModel[];
}

export interface CategoriaCreateModel {
  nome: string;
  tipoCategoriaId?: string|null;
  tipoCategoria?: TipoCategoriaCreateModel|null;
}

export interface CategoriaUpdateModel extends IHasId {
  nome?: string;
  tipoCategoriaId?: string|null;
  tipoCategoria?: TipoCategoriaUpdateModel|null;
}

export type CategoriaGetModel = IHasId

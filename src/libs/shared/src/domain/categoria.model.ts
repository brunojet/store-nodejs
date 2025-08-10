import {IHasAudit, IHasId} from './base.model';

export interface CategoriaModel extends IHasAudit {
  nome: string;
  descricao?: string;
}

export interface CategoriaCreateModel {
  nome: string;
  descricao?: string;
}

export interface CategoriaUpdateModel extends IHasId {
  nome?: string;
  descricao?: string;
}

export type CategoriaGetModel = IHasId

import {IHasAudit, IHasId} from './base.model';

// Models e interfaces para TipoCategoria
export interface TipoCategoriaModel extends IHasAudit {
  nome: string;
  descricao?: string;
}

export interface TipoCategoriaCreateModel {
  nome: string;
  descricao?: string;
}

export interface TipoCategoriaUpdateModel extends IHasId {
  nome?: string;
  descricao?: string;
}

export type TipoCategoriaGetModel = IHasId

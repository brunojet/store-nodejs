import {IHasAudit, IHasId} from './base.model';

// Models e interfaces para TipoCategoria
export interface TipoCategoriaModel extends IHasAudit {
  nome: string;
  descricao?: string|null;
}

export interface TipoCategoriaCreateModel {
  nome: string;
  descricao?: string|null;
}

export interface TipoCategoriaUpdateModel extends IHasId {
  nome?: string;
  descricao?: string|null;
}

export type TipoCategoriaGetModel = IHasId

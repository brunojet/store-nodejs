import {IHasAudit} from './base.model';

// Models e interfaces para TipoCategoria
export interface TipoCategoriaModel extends IHasAudit {
  id: string;
  nome: string;
  descricao?: string;
}

export interface TipoCategoriaCreateModel extends IHasAudit {
  nome: string;
  descricao?: string;
  criadoPor: string;
  atualizadoPor: string;
  criadoEm?: Date;
  atualizadoEm?: Date;
}

export interface TipoCategoriaUpdateModel extends IHasAudit {
  id: string;
  nome?: string;
  descricao?: string;
  atualizadoPor?: string;
  atualizadoEm?: Date;
}

export interface TipoCategoriaGetModel {
  id: string;
}

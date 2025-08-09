import {IHasAudit} from './base.model';

// Models e interfaces para Categoria
export interface CategoriaModel extends IHasAudit {
  id: string;
  nome: string;
  descricao?: string;
}

export interface CategoriaCreateModel extends IHasAudit {
  nome: string;
  descricao?: string;
}

export interface CategoriaUpdateModel extends IHasAudit {
  id: string;
  nome?: string;
  descricao?: string;
}

export interface CategoriaGetModel {
  id: string;
}

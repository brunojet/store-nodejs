import {IHasAudit, IHasId} from './base.model';

export interface TerminalModeloModel extends IHasAudit {
  nome: string;
  descricao?: string|null;
}

export interface TerminalModeloCreateModel {
  nome: string;
  descricao?: string|null;
}

export interface TerminalModeloUpdateModel extends IHasId {
  nome?: string;
  descricao?: string|null;
}

export type TerminalModeloGetModel = IHasId

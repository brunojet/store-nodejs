import {IHasAudit, IHasId} from './base.model';

export interface TerminalModeloModel extends IHasAudit {
  nome: string;
  descricao?: string;
}

export interface TerminalModeloCreateModel {
  nome: string;
  descricao?: string;
}

export interface TerminalModeloUpdateModel extends IHasId {
  nome?: string;
  descricao?: string;
}

export type TerminalModeloGetModel = IHasId

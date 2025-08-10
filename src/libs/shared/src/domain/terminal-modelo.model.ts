import {IHasAudit} from './base.model';

// Models e interfaces para TerminalModelo
export interface TerminalModeloModel extends IHasAudit {
  id: string;
  nome: string;
  descricao?: string;
}

export interface TerminalModeloCreateModel extends IHasAudit {
  nome: string;
  descricao?: string;
}

export interface TerminalModeloUpdateModel extends IHasAudit {
  id: string;
  nome?: string;
  descricao?: string;
}

export interface TerminalModeloGetModel {
  id: string;
}

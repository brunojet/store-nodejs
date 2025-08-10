
export interface IHasId {
  id: string;
}

export interface IHasAudit extends IHasId {
  criadoEm?: Date;
  atualizadoEm?: Date;
  criadoPor?: string;
  atualizadoPor?: string;
}

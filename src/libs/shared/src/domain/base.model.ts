
export interface IHasId {
  id: string;
}

export interface IHasAudit extends IHasId {
  criadoPor?: string;
  atualizadoPor?: string;
}

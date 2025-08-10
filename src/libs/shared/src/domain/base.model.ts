// Interfaces base para models de auditoria e timestamps

export interface IHasAudit {
  criadoEm?: Date;
  atualizadoEm?: Date;
  criadoPor?: string;
  atualizadoPor?: string;
}

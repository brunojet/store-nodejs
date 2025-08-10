import { TerminalModeloRepository } from '@shared';
import { TerminalModeloCreateModel, TerminalModeloUpdateModel, TerminalModeloModel } from '@shared';
import { BaseService } from './base.service';

export class TerminalModeloService extends BaseService<TerminalModeloModel, TerminalModeloCreateModel, TerminalModeloUpdateModel, TerminalModeloRepository> {
  constructor(repo: TerminalModeloRepository) {
    super(repo);
  }
}

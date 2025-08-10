import {
  TerminalModeloCreateModel,
  TerminalModeloModel,
  TerminalModeloRepository,
  TerminalModeloUpdateModel
} from '@shared';

import {BaseService} from './base.service';

export class TerminalModeloService extends
    BaseService<TerminalModeloModel, TerminalModeloCreateModel,
                TerminalModeloUpdateModel, TerminalModeloRepository> {
  constructor(repo: TerminalModeloRepository) { super(repo); }
}

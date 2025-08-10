import {BaseService} from '@infra/service';
import {
  TerminalModeloCreateModel,
  TerminalModeloModel,
  TerminalModeloRepository,
  TerminalModeloUpdateModel
} from '@shared';

export class TerminalModeloService extends
    BaseService<TerminalModeloModel, TerminalModeloCreateModel,
                TerminalModeloUpdateModel, TerminalModeloRepository> {
  constructor(repo: TerminalModeloRepository) { super(repo); }
}

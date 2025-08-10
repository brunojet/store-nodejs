import {BaseController} from '@infra/controller';
import {
  TerminalModeloCreateModel,
  TerminalModeloModel,
  TerminalModeloRepository,
  TerminalModeloUpdateModel
} from '@shared';

import {TerminalModeloService} from '../service/terminal-modelo.service';

export class TerminalModeloController extends BaseController<
    TerminalModeloModel, TerminalModeloCreateModel, TerminalModeloUpdateModel,
    TerminalModeloRepository, TerminalModeloService> {
  constructor(service: TerminalModeloService) { super(service); }
}

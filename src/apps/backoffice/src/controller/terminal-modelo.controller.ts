import {
  TerminalModeloCreateModel,
  TerminalModeloModel,
  TerminalModeloUpdateModel
} from '@shared';

import {TerminalModeloService} from '../service/terminal-modelo.service';

import {BaseController} from './base.controller';

export class TerminalModeloController extends
    BaseController<TerminalModeloModel, TerminalModeloCreateModel,
                   TerminalModeloUpdateModel, TerminalModeloService> {
  constructor(service: TerminalModeloService) { super(service); }
}

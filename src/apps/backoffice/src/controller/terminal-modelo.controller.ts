import {
  TerminalModeloCreateModel,
  TerminalModeloModel,
  TerminalModeloUpdateModel
} from '@shared';

import {TerminalModeloService} from '../service/terminal-modelo.service';

import {BaseController} from './base.controller';
import { TerminalModeloRepository } from '@shared';

export class TerminalModeloController extends
    BaseController<
      TerminalModeloModel,
      TerminalModeloCreateModel,
      TerminalModeloUpdateModel,
      TerminalModeloRepository,
      TerminalModeloService
    > {
  constructor(service: TerminalModeloService) { super(service); }
}

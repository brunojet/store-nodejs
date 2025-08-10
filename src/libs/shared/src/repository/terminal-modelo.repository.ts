import {
  TerminalModeloCreateModel,
  TerminalModeloUpdateModel
} from '../domain/terminal-modelo.model';

import {BaseRepository, IPrismaModel} from './base.repository';
import {getPrismaClient} from './prisma-client-singleton';
import {Prisma, TerminalModelo} from './prisma/generated';

const prisma = getPrismaClient();

export class TerminalModeloRepository extends BaseRepository<
    TerminalModelo, TerminalModeloCreateModel, TerminalModeloUpdateModel,
    Prisma.TerminalModeloWhereInput, Prisma.TerminalModeloFindManyArgs> {
  constructor(userId: string|undefined) {
    super(prisma.terminalModelo as unknown as
              IPrismaModel<TerminalModelo, TerminalModeloCreateModel,
                           TerminalModeloUpdateModel,
                           Prisma.TerminalModeloWhereInput,
                           Prisma.TerminalModeloFindManyArgs>,
          userId);
  }
}

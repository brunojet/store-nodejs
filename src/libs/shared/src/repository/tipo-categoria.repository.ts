import {
  TipoCategoriaCreateModel,
  TipoCategoriaUpdateModel
} from '../domain/tipo-categoria.model';

import {BaseRepository, IPrismaModel} from './base.repository';
import {getPrismaClient} from './prisma-client-singleton';
import {Prisma, TipoCategoria} from './prisma/generated';

export class TipoCategoriaRepository extends BaseRepository<
    TipoCategoria, TipoCategoriaCreateModel, TipoCategoriaUpdateModel,
    Prisma.TipoCategoriaWhereInput, Prisma.TipoCategoriaFindManyArgs> {
  constructor(userId: string|undefined) {
    super(getPrismaClient().tipoCategoria as unknown as IPrismaModel<
              TipoCategoria, TipoCategoriaCreateModel, TipoCategoriaUpdateModel,
              Prisma.TipoCategoriaWhereInput, Prisma.TipoCategoriaFindManyArgs>,
          userId);
  }
}

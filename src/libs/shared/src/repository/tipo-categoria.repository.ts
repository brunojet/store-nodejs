import {BaseRepository, IPrismaModel} from '@infra/repository';

import {
  TipoCategoriaCreateModel,
  TipoCategoriaUpdateModel
} from '../domain/tipo-categoria.model';

import {getPrismaClient} from './prisma-client-singleton';
import {Prisma, TipoCategoria} from './prisma/generated';

export class TipoCategoriaRepository extends BaseRepository<
    TipoCategoria, TipoCategoriaCreateModel, TipoCategoriaUpdateModel,
    Prisma.TipoCategoriaWhereInput, Prisma.TipoCategoriaFindManyArgs> {
  constructor() {
    super(getPrismaClient().tipoCategoria as unknown as
          IPrismaModel<TipoCategoria, TipoCategoriaCreateModel,
                       TipoCategoriaUpdateModel, Prisma.TipoCategoriaWhereInput,
                       Prisma.TipoCategoriaFindManyArgs>);
  }
}

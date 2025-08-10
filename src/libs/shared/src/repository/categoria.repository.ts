import {BaseRepository, IPrismaModel} from './base.repository';
import {CategoriaCreateModel, CategoriaUpdateModel} from '../domain/categoria.model';
import {getPrismaClient} from './prisma-client-singleton';
import {Categoria, Prisma} from './prisma/generated';

const prisma = getPrismaClient();

export class CategoriaRepository extends
    BaseRepository<Categoria, CategoriaCreateModel, CategoriaUpdateModel,
                   Prisma.CategoriaWhereInput, Prisma.CategoriaFindManyArgs> {
  constructor(userId: string|undefined) {
    super(prisma.categoria as unknown as
              IPrismaModel<Categoria, CategoriaCreateModel,
                           CategoriaUpdateModel, Prisma.CategoriaWhereInput,
                           Prisma.CategoriaFindManyArgs>,
          userId);
  }
}
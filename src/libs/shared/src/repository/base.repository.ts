// Remove propriedades do objeto de forma imutável
import {getPrismaClient} from './prisma-client-singleton';

export interface IPrismaModel<TModel, TCreateInput, TUpdateInput, TWhereInput,
                              TFindManyArgs> {
  findMany(params?: TFindManyArgs): Promise<TModel[]>;
  findUnique(params: {where: {id: string}}): Promise<TModel|null>;
  create(params: {data: TCreateInput}): Promise<TModel>;
  update(params: {where: {id: string}, data: TUpdateInput}): Promise<TModel>;
  delete(params: {where: {id: string}}): Promise<TModel>;
  count(params?: {where?: TWhereInput}): Promise<number>;
}

export abstract class BaseRepository<TModel, TCreateInput, TUpdateInput,
                                     TWhereInput, TFindManyArgs> {
  protected prisma = getPrismaClient();
  protected model: IPrismaModel<TModel, TCreateInput, TUpdateInput, TWhereInput,
                                TFindManyArgs>;

  constructor(model: IPrismaModel<TModel, TCreateInput, TUpdateInput,
                                  TWhereInput, TFindManyArgs>) {
    this.model = model;
  }

  async getAll(params?: TFindManyArgs): Promise<TModel[]> {
    return this.model.findMany(params);
  }

  async count(where?: TWhereInput): Promise<number> {
    return this.model.count({where});
  }

  async getById(id: string): Promise<TModel|null> {
    return this.model.findUnique({where : {id}});
  }

  async create(userId: string, data: TCreateInput): Promise<TModel> {
    const now = new Date();
    const prismaData = {
      ...data,
      criadoEm : now,
      atualizadoEm : now,
      criadoPor : userId,
      atualizadoPor : userId,
    };
    return this.model.create({data : prismaData});
  }

  async update(
      userId: string,
      id: string,
      data: TUpdateInput,
      ): Promise<TModel> {
    const now = new Date();
    const updateData = {
      ...data,
      atualizadoEm : now,
      atualizadoPor : userId,
    };
    return this.model.update({where : {id}, data : updateData as TUpdateInput});
  }

  async delete(id: string): Promise<TModel> {
    return this.model.delete({where : {id}});
  }
}

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
  protected userId: string;

  constructor(model: IPrismaModel<TModel, TCreateInput, TUpdateInput,
                                  TWhereInput, TFindManyArgs>,
              userId = "unknown") {
    this.model = model;
    this.userId = userId;
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

  async create(data: TCreateInput): Promise<TModel> {
    const now = new Date();
    // Converte datas para string ISO, compatível com Prisma
    const prismaData = {
      ...data,
      criadoEm : now,
      atualizadoEm : now,
      criadoPor : this.userId,
      atualizadoPor : this.userId,
    };
    return this.model.create({data : prismaData});
  }

  async update(id: string, data: TUpdateInput): Promise<TModel> {
    const now = new Date();
    const updateData = {
      ...data,
      atualizadoEm : now,
      atualizadoPor : this.userId,
    };
    return this.model.update({where : {id}, data : updateData as TUpdateInput});
  }

  async delete(id: string): Promise<TModel> {
    return this.model.delete({where : {id}});
  }
}

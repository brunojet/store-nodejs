export interface IPrismaModel<TModel, TCreateInput, TUpdateInput, TWhereInput,
                              TFindManyArgs> {
  findMany(params?: TFindManyArgs): Promise<TModel[]>;
  findUnique(params: {where: {id: string}}): Promise<TModel|null>;
  create(params: {data: TCreateInput}): Promise<TModel>;
  update(params: {where: {id: string}; data : TUpdateInput;}): Promise<TModel>;
  delete(params: {where: {id: string}}): Promise<TModel>;
  count(params?: {where?: TWhereInput}): Promise<number>;
}

export abstract class BaseRepository<TModel, TCreateInput, TUpdateInput,
                                     TWhereInput, TFindManyArgs> {
  protected model: IPrismaModel<TModel, TCreateInput, TUpdateInput, TWhereInput,
                                TFindManyArgs>;

  constructor(model: IPrismaModel<TModel, TCreateInput, TUpdateInput,
                                  TWhereInput, TFindManyArgs>) {
    this.model = model;
  }

  async getAll(params?: TFindManyArgs): Promise<TModel[]> {
    const result = await this.model.findMany(params);
    return result;
  }

  async count(where?: TWhereInput): Promise<number> {
    const result = await this.model.count({where});
    return result;
  }

  async getById(id: string): Promise<TModel|null> {
    const result = await this.model.findUnique({where : {id}});
    return result;
  }

  async create(userId: string, data: TCreateInput): Promise<TModel> {
    const prismaData = {
      ...data,
      criadoPor : userId,
      atualizadoPor : userId,
    };
    const result = await this.model.create({data : prismaData});
    return result;
  }

  async update(userId: string, id: string,
               data: TUpdateInput): Promise<TModel> {
    const updateData = {
      ...data,
      atualizadoPor : userId,
    };
    const result = await this.model.update({
      where : {id},
      data : updateData as TUpdateInput,
    });
    return result;
  }

  async delete(id: string): Promise<TModel> {
    return this.model.delete({where : {id}});
  }
}

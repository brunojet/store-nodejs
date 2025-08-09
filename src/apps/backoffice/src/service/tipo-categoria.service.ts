import {
  TipoCategoriaCreateModel,
  TipoCategoriaGetModel,
  TipoCategoriaRepository,
  TipoCategoriaUpdateModel,
} from '@shared';

const tipoCategoriaRepository = new TipoCategoriaRepository(null);

export class TipoCategoriaService {
  async list(page = 1, pageSize = 10) {
    const skip = (page - 1) * pageSize;
    const [items, total] = await Promise.all([
      tipoCategoriaRepository.getAll({skip, take : pageSize}),
      tipoCategoriaRepository.count(),
    ]);
    return {items, total, page, pageSize};
  }

  async get(id: string) {
    const params: TipoCategoriaGetModel = {id};
    return tipoCategoriaRepository.getById(params.id);
  }

  async create(data: TipoCategoriaCreateModel) {
    return tipoCategoriaRepository.create(data);
  }

  async update(id: string, data: TipoCategoriaUpdateModel) {
    return tipoCategoriaRepository.update(id, {...data, id});
  }

  async delete(id: string) { return tipoCategoriaRepository.delete(id); }
}

import {
  CategoriaCreateModel,
  CategoriaGetModel,
  CategoriaRepository,
  CategoriaUpdateModel,
} from '@shared';

const categoriaRepository = new CategoriaRepository(null);

export class CategoriaController {
  async list(page = 1, pageSize = 10) {
    const skip = (page - 1) * pageSize;
    const [items, total] = await Promise.all([
      categoriaRepository.getAll({skip, take : pageSize}),
      categoriaRepository.count(),
    ]);
    return {items, total, page, pageSize};
  }

  async get(id: string) {
    // Usando CategoriaGetModel para tipar o parâmetro
    const params: CategoriaGetModel = {id};
    return categoriaRepository.getById(params.id);
  }

  async create(data: CategoriaCreateModel) {
    return categoriaRepository.create(data);
  }

  async update(id: string, data: CategoriaUpdateModel) {
    // Garante que o id está presente no model de update
    return categoriaRepository.update(id, {...data, id});
  }

  async delete(id: string) { return categoriaRepository.delete(id); }
}

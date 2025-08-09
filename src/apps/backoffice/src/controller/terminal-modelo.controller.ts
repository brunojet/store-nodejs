import {
  TerminalModeloCreateModel,
  TerminalModeloGetModel,
  TerminalModeloRepository,
  TerminalModeloUpdateModel,
} from '@shared';

const terminalModeloRepository = new TerminalModeloRepository(null);

export class TerminalModeloController {
  async list(page = 1, pageSize = 10) {
    const skip = (page - 1) * pageSize;
    const [items, total] = await Promise.all([
      terminalModeloRepository.getAll({skip, take : pageSize}),
      terminalModeloRepository.count(),
    ]);
    return {items, total, page, pageSize};
  }

  async get(id: string) {
    // Usando TerminalModeloGetModel para tipar o parâmetro
    const params: TerminalModeloGetModel = {id};
    return terminalModeloRepository.getById(params.id);
  }

  async create(data: TerminalModeloCreateModel) {
    return terminalModeloRepository.create(data);
  }

  async update(id: string, data: TerminalModeloUpdateModel) {
    // Garante que o id está presente no model de update
    return terminalModeloRepository.update(id, {...data, id});
  }

  async delete(id: string) { return terminalModeloRepository.delete(id); }
}

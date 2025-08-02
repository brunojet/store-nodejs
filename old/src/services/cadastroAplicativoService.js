const cadastroAplicativoRepository = require('../repositories/cadastroAplicativoRepository');

module.exports = {
  async create(data) {
    return cadastroAplicativoRepository.create(data);
  },
  async getAll() {
    return cadastroAplicativoRepository.findAll();
  },
  async getById(id) {
    return cadastroAplicativoRepository.findById(id);
  },
  async update(id, data) {
    return cadastroAplicativoRepository.update(id, data);
  },
  async delete(id) {
    return cadastroAplicativoRepository.delete(id);
  }
};

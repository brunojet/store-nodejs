const configuracaoAplicativoRepository = require('../repositories/configuracaoAplicativoRepository');

module.exports = {
  async create(data) {
    return configuracaoAplicativoRepository.create(data);
  },
  async getAll() {
    return configuracaoAplicativoRepository.findAll();
  },
  async getById(id) {
    return configuracaoAplicativoRepository.findById(id);
  },
  async update(id, data) {
    return configuracaoAplicativoRepository.update(id, data);
  },
  async delete(id) {
    return configuracaoAplicativoRepository.delete(id);
  }
};

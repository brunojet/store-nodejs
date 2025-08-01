const detalheAplicativoRepository = require('../repositories/detalheAplicativoRepository');

module.exports = {
  async create(data) {
    // data: { descricao, filePaths }
    // Chama a função ACID para criar tudo de uma vez
    return detalheAplicativoRepository.createTransactional(data);
  },
  async getAll() {
    return detalheAplicativoRepository.findAll();
  },
  async getById(id) {
    return detalheAplicativoRepository.findById(id);
  },
  async update(id, data) {
    return detalheAplicativoRepository.update(id, data);
  },
  async delete(id) {
    return detalheAplicativoRepository.delete(id);
  }
};

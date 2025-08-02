const catalogoAplicativoRepository = require('../repositories/catalogoAplicativoRepository');

module.exports = {
  async create(data) {
    return catalogoAplicativoRepository.create(data);
  },
  async getAll() {
    return catalogoAplicativoRepository.findAll();
  },
  async getById(id) {
    return catalogoAplicativoRepository.findById(id);
  },
  async update(id, data) {
    return catalogoAplicativoRepository.update(id, data);
  },
  async delete(id) {
    return catalogoAplicativoRepository.delete(id);
  }
};

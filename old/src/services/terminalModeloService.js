const terminalModeloRepository = require('../repositories/terminalModeloRepository');

module.exports = {
  async create(data) {
    return terminalModeloRepository.create(data);
  },
  async getAll() {
    return terminalModeloRepository.findAll();
  },
  async getById(id) {
    return terminalModeloRepository.findById(id);
  },
  async update(id, data) {
    return terminalModeloRepository.update(id, data);
  },
  async delete(id) {
    return terminalModeloRepository.delete(id);
  }
};

const anexoRepository = require('../repositories/anexoRepository');

module.exports = {
  async create(data) {
    return anexoRepository.create(data);
  },
  async getAll() {
    return anexoRepository.findAll();
  },
  async getById(id) {
    return anexoRepository.findById(id);
  },
  async update(id, data) {
    return anexoRepository.update(id, data);
  },
  async delete(id) {
    return anexoRepository.delete(id);
  }
};

const suporteParceiroRepository = require('../repositories/suporteParceiroRepository');

module.exports = {
  async create(data) {
    return suporteParceiroRepository.create(data);
  },
  async getAll() {
    return suporteParceiroRepository.findAll();
  },
  async getById(id) {
    return suporteParceiroRepository.findById(id);
  },
  async update(id, data) {
    return suporteParceiroRepository.update(id, data);
  },
  async delete(id) {
    return suporteParceiroRepository.delete(id);
  }
};

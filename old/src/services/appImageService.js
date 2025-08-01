const appImageRepository = require('../repositories/appImageRepository');

module.exports = {
  async create(data) {
    return appImageRepository.create(data);
  },
  async getAll() {
    return appImageRepository.findAll();
  },
  async getById(id) {
    return appImageRepository.findById(id);
  },
  async update(id, data) {
    return appImageRepository.update(id, data);
  },
  async delete(id) {
    return appImageRepository.delete(id);
  }
};

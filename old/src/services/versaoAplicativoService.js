const versaoAplicativoRepository = require('../repositories/versaoAplicativoRepository');

module.exports = {
  async create(data) {
    // data: { versao, changelog, pacoteMdm, versaoMdm, tamanho, avaliacao, imageIconPath }
    const {
      versao,
      changelog,
      pacoteMdm,
      versaoMdm,
      tamanho,
      avaliacao,
      imageIconPath
    } = data;
    return versaoAplicativoRepository.createTransactional({ versao, changelog, pacoteMdm, versaoMdm, tamanho, avaliacao, imageIconPath });
  },
  async getAll() {
    return versaoAplicativoRepository.findAll();
  },
  async getById(id) {
    return versaoAplicativoRepository.findById(id);
  },
  async update(id, data) {
    return versaoAplicativoRepository.update(id, data);
  },
  async delete(id) {
    return versaoAplicativoRepository.delete(id);
  }
};

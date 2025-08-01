const catalogoAplicativoService = require('../services/catalogoAplicativoService');

module.exports = {
  async create(req, res) {
    const data = await catalogoAplicativoService.create(req.body);
    res.status(201).json(data);
  },
  async getAll(req, res) {
    const catalogos = await catalogoAplicativoService.getAll();
    // Mapeia para retornar apenas os campos desejados
    const result = catalogos.map(c => {
      const anexoId = c.versaoAplicativo.icone?.anexo?.id;
      return {
        nome: c.versaoAplicativo.versao,
        icone: anexoId ? `${req.protocol}://${req.get('host')}/api/imagem/${anexoId}` : null,
        tamanho: c.versaoAplicativo.tamanho,
        avaliacao: c.versaoAplicativo.avaliacao
      };
    });
    res.json(result);
  },
  async getById(req, res) {
    const data = await catalogoAplicativoService.getById(Number(req.params.id));
    if (!data) return res.status(404).json({ error: 'Not found' });
    res.json(data);
  },
  async update(req, res) {
    const data = await catalogoAplicativoService.update(Number(req.params.id), req.body);
    res.json(data);
  },
  async delete(req, res) {
    await catalogoAplicativoService.delete(Number(req.params.id));
    res.status(204).send();
  }
};

const suporteParceiroService = require('../services/suporteParceiroService');

module.exports = {
  async create(req, res) {
    const data = await suporteParceiroService.create(req.body);
    res.status(201).json(data);
  },
  async getAll(req, res) {
    const data = await suporteParceiroService.getAll();
    res.json(data);
  },
  async getById(req, res) {
    const data = await suporteParceiroService.getById(Number(req.params.id));
    if (!data) return res.status(404).json({ error: 'Not found' });
    res.json(data);
  },
  async update(req, res) {
    const data = await suporteParceiroService.update(Number(req.params.id), req.body);
    res.json(data);
  },
  async delete(req, res) {
    await suporteParceiroService.delete(Number(req.params.id));
    res.status(204).send();
  }
};

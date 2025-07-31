const terminalModeloService = require('../services/terminalModeloService');

module.exports = {
  async create(req, res) {
    const data = await terminalModeloService.create(req.body);
    res.status(201).json(data);
  },
  async getAll(req, res) {
    const data = await terminalModeloService.getAll();
    res.json(data);
  },
  async getById(req, res) {
    const data = await terminalModeloService.getById(Number(req.params.id));
    if (!data) return res.status(404).json({ error: 'Not found' });
    res.json(data);
  },
  async update(req, res) {
    const data = await terminalModeloService.update(Number(req.params.id), req.body);
    res.json(data);
  },
  async delete(req, res) {
    await terminalModeloService.delete(Number(req.params.id));
    res.status(204).send();
  }
};

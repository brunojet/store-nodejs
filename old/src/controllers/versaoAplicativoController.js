
const versaoAplicativoService = require('../services/versaoAplicativoService');
const path = require('path');
const fs = require('fs');

module.exports = {
  async create(req, res) {
    // Recebe 'data' como JSON serializado + 'file' como arquivo
    let versaoData = {};
    try {
      versaoData = JSON.parse(req.body.data);
    } catch (e) {
      return res.status(400).json({ error: 'Campo data deve ser um JSON válido.' });
    }
    let imageIconPath = null;
    const file = req.files && req.files.file ? req.files.file[0] : null;
    if (file) {
      const uploadDir = path.join(__dirname, '../../uploads/versao');
      if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
      const destPath = path.join(uploadDir, file.originalname);
      fs.writeFileSync(destPath, file.buffer);
      imageIconPath = destPath;
    }
    // Passa dados e caminho do arquivo para o service
    const data = await versaoAplicativoService.create({ ...versaoData, imageIconPath });
    res.status(201).json(data);
  },
  async getAll(req, res) {
    const data = await versaoAplicativoService.getAll();
    res.json(data);
  },
  async getById(req, res) {
    const data = await versaoAplicativoService.getById(Number(req.params.id));
    if (!data) return res.status(404).json({ error: 'Not found' });
    res.json(data);
  },
  async update(req, res) {
    const data = await versaoAplicativoService.update(Number(req.params.id), req.body);
    res.json(data);
  },
  async delete(req, res) {
    await versaoAplicativoService.delete(Number(req.params.id));
    res.status(204).send();
  }
};

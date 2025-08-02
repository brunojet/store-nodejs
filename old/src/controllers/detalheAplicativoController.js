const detalheAplicativoService = require('../services/detalheAplicativoService');
const path = require('path');
const fs = require('fs');

module.exports = {
  async create(req, res) {
    // req.body.descricao, req.files (array de arquivos)
    const { descricao } = req.body;
    const files = req.files || [];
    // Salvar arquivos no diretório local e criar objetos AppImage
    const uploadDir = path.join(__dirname, '../../uploads/detalhes');
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
    const filePaths = [];
    for (const file of files) {
      const destPath = path.join(uploadDir, file.originalname);
      fs.writeFileSync(destPath, file.buffer);
      filePaths.push(destPath);
    }
    // Chama o service passando descricao e array de caminhos dos arquivos
    const data = await detalheAplicativoService.create({ descricao, filePaths });
    res.status(201).json(data);
  },
  async getAll(req, res) {
    const data = await detalheAplicativoService.getAll();
    res.json(data);
  },
  async getById(req, res) {
    const data = await detalheAplicativoService.getById(Number(req.params.id));
    if (!data) return res.status(404).json({ error: 'Not found' });
    res.json(data);
  },
  async update(req, res) {
    const data = await detalheAplicativoService.update(Number(req.params.id), req.body);
    res.json(data);
  },
  async delete(req, res) {
    await detalheAplicativoService.delete(Number(req.params.id));
    res.status(204).send();
  }
};

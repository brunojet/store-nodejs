const path = require('path');
const fs = require('fs');
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

module.exports = {
  async getById(req, res) {
    const id = Number(req.params.id);
    const anexo = await prisma.anexo.findUnique({ where: { id } });
    if (!anexo) return res.status(404).json({ error: 'Imagem não encontrada' });
    const filePath = anexo.filePath;
    if (!fs.existsSync(filePath)) return res.status(404).json({ error: 'Arquivo não encontrado no disco' });
    res.sendFile(path.resolve(filePath));
  }
};

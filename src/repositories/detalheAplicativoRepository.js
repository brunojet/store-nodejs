const { PrismaClient } = require('../../src/generated/prisma');
const prisma = new PrismaClient();

module.exports = {
  async createTransactional({ descricao, filePaths }) {
    return await prisma.$transaction(async (tx) => {
      // Cria um anexo para cada arquivo
      const anexos = await Promise.all(filePaths.map(filePath => tx.anexo.create({ data: { filePath } })));
      // Cria AppImage para cada anexo
      const appImages = await Promise.all(anexos.map(anexo => tx.appImage.create({ data: { anexo: { connect: { id: anexo.id } } } })));
      // Cria DetalheAplicativo conectando todas as imagens criadas
      const detalhe = await tx.detalheAplicativo.create({
        data: {
          descricao,
          images: {
            connect: appImages.map(img => ({ id: img.id }))
          }
        }
      });
      return detalhe;
    });
  },
  async createAnexo(filePath) {
    // Cria um registro de Anexo para o arquivo
    return prisma.anexo.create({ data: { filePath } });
  },

  async findAll() {
    return prisma.detalheAplicativo.findMany();
  },
  async findById(id) {
    return prisma.detalheAplicativo.findUnique({ where: { id } });
  },
  async update(id, data) {
    return prisma.detalheAplicativo.update({ where: { id }, data });
  },
  async delete(id) {
    return prisma.detalheAplicativo.delete({ where: { id } });
  }
}

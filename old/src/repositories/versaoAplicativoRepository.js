const { PrismaClient } = require('../../src/generated/prisma');
const prisma = new PrismaClient();

module.exports = {
  async createTransactional({ versao, changelog, pacoteMdm, versaoMdm, tamanho, avaliacao, imageIconPath }) {
    return await prisma.$transaction(async (tx) => {
      let anexo = null;
      let appImage = null;
      if (imageIconPath) {
        anexo = await tx.anexo.create({ data: { filePath: imageIconPath } });
        appImage = await tx.appImage.create({ data: { anexo: { connect: { id: anexo.id } } } });
      }
      // Cria VersaoAplicativo conectando o ícone se existir
      const versaoAppData = {
        versao,
        changelog,
        pacoteMdm,
        versaoMdm,
        tamanho,
        avaliacao,
        icone: appImage ? { connect: { id: appImage.id } } : undefined
      };
      // Remove undefined para não passar campo extra
      Object.keys(versaoAppData).forEach(key => versaoAppData[key] === undefined && delete versaoAppData[key]);
      const versaoApp = await tx.versaoAplicativo.create({ data: versaoAppData });
      return versaoApp;
    });
  },
  async findAll() {
    return prisma.versaoAplicativo.findMany();
  },
  async findById(id) {
    return prisma.versaoAplicativo.findUnique({ where: { id } });
  },
  async update(id, data) {
    return prisma.versaoAplicativo.update({ where: { id }, data });
  },
  async delete(id) {
    return prisma.versaoAplicativo.delete({ where: { id } });
  }
};

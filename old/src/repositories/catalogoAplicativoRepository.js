const { PrismaClient } = require('../../src/generated/prisma');
const prisma = new PrismaClient();

module.exports = {
  async create(data) {
    return prisma.catalogoAplicativo.create({ data });
  },
  async findAll() {
    return prisma.catalogoAplicativo.findMany({
      include: {
        versaoAplicativo: {
          select: {
            versao: true,
            tamanho: true,
            avaliacao: true,
            icone: {
              select: {
                anexo: {
                  select: {
                    id: true,
                    filePath: true
                  }
                }
              }
            }
          }
        }
      }
    });
  },
  async findById(id) {
    return prisma.catalogoAplicativo.findUnique({ where: { id } });
  },
  async update(id, data) {
    return prisma.catalogoAplicativo.update({ where: { id }, data });
  },
  async delete(id) {
    return prisma.catalogoAplicativo.delete({ where: { id } });
  }
};

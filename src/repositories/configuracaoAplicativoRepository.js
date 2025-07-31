const { PrismaClient } = require('../../src/generated/prisma');
const prisma = new PrismaClient();

module.exports = {
  async create(data) {
    return prisma.configuracaoAplicativo.create({ data });
  },
  async findAll() {
    return prisma.configuracaoAplicativo.findMany();
  },
  async findById(id) {
    return prisma.configuracaoAplicativo.findUnique({ where: { id } });
  },
  async update(id, data) {
    return prisma.configuracaoAplicativo.update({ where: { id }, data });
  },
  async delete(id) {
    return prisma.configuracaoAplicativo.delete({ where: { id } });
  }
};

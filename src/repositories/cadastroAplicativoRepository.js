const { PrismaClient } = require('../../src/generated/prisma');
const prisma = new PrismaClient();

module.exports = {
  async create(data) {
    return prisma.cadastroAplicativo.create({ data });
  },
  async findAll() {
    return prisma.cadastroAplicativo.findMany();
  },
  async findById(id) {
    return prisma.cadastroAplicativo.findUnique({ where: { id } });
  },
  async update(id, data) {
    return prisma.cadastroAplicativo.update({ where: { id }, data });
  },
  async delete(id) {
    return prisma.cadastroAplicativo.delete({ where: { id } });
  }
};

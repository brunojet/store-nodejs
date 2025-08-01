const { PrismaClient } = require('../../src/generated/prisma');
const prisma = new PrismaClient();

module.exports = {
  async create(data) {
    return prisma.suporteParceiro.create({ data });
  },
  async findAll() {
    return prisma.suporteParceiro.findMany();
  },
  async findById(id) {
    return prisma.suporteParceiro.findUnique({ where: { id } });
  },
  async update(id, data) {
    return prisma.suporteParceiro.update({ where: { id }, data });
  },
  async delete(id) {
    return prisma.suporteParceiro.delete({ where: { id } });
  }
};

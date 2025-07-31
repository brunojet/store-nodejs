const { PrismaClient } = require('../../src/generated/prisma');
const prisma = new PrismaClient();

module.exports = {
  async create(data) {
    return prisma.anexo.create({ data });
  },
  async findAll() {
    return prisma.anexo.findMany();
  },
  async findById(id) {
    return prisma.anexo.findUnique({ where: { id } });
  },
  async update(id, data) {
    return prisma.anexo.update({ where: { id }, data });
  },
  async delete(id) {
    return prisma.anexo.delete({ where: { id } });
  }
};

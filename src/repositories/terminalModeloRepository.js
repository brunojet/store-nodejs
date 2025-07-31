const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

module.exports = {
  async create(data) {
    return prisma.terminalModelo.create({ data });
  },
  async findAll() {
    return prisma.terminalModelo.findMany();
  },
  async findById(id) {
    return prisma.terminalModelo.findUnique({ where: { id } });
  },
  async update(id, data) {
    return prisma.terminalModelo.update({ where: { id }, data });
  },
  async delete(id) {
    return prisma.terminalModelo.delete({ where: { id } });
  }
};

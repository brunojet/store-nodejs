const { PrismaClient } = require('../../src/generated/prisma');
const prisma = new PrismaClient();

module.exports = {
  async create(data) {
    return prisma.appImage.create({ data });
  },
  async findAll() {
    return prisma.appImage.findMany();
  },
  async findById(id) {
    return prisma.appImage.findUnique({ where: { id } });
  },
  async update(id, data) {
    return prisma.appImage.update({ where: { id }, data });
  },
  async delete(id) {
    return prisma.appImage.delete({ where: { id } });
  }
};

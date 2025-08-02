import {PrismaClient} from '../../dist/libs/shared/prisma/generated/index.js';

describe('Prisma Client Integration', () => {
  let prisma: PrismaClient;

  beforeAll(() => {
    prisma = new PrismaClient();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('should connect to the database', async () => {
    const result = await prisma.$queryRaw`SELECT 1`;
    expect(result).toBeDefined();
  });

  it('should query LogAuditoria table (empty or not)', async () => {
    const logs = await prisma.logAuditoria.findMany({take: 1});
    expect(Array.isArray(logs)).toBe(true);
  });
});

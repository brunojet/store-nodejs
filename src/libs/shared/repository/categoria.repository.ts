import { Categoria, Prisma, PrismaClient } from './prisma/generated';

const prisma = new PrismaClient();

export class CategoriaRepository {
    async criar(data: Prisma.CategoriaCreateInput): Promise<Categoria> {
        return prisma.categoria.create({ data });
    }

    async listar(): Promise<Categoria[]> {
        return prisma.categoria.findMany();
    }

    async buscarPorId(id: string): Promise<Categoria | null> {
        return prisma.categoria.findUnique({ where: { id } });
    }

    async atualizar(id: string, data: Prisma.CategoriaUpdateInput): Promise<Categoria> {
        return prisma.categoria.update({ where: { id }, data });
    }

    async remover(id: string): Promise<Categoria> {
        return prisma.categoria.delete({ where: { id } });
    }
}

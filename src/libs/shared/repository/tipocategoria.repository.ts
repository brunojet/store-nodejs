import { Prisma, PrismaClient, TipoCategoria } from './prisma/generated';

const prisma = new PrismaClient();


export class TipoCategoriaRepository {
    async criar(data: Prisma.TipoCategoriaCreateInput): Promise<TipoCategoria> {
        return prisma.tipoCategoria.create({ data });
    }

    async listar(): Promise<TipoCategoria[]> {
        return prisma.tipoCategoria.findMany();
    }

    async buscarPorId(id: string): Promise<TipoCategoria | null> {
        return prisma.tipoCategoria.findUnique({ where: { id } });
    }

    async atualizar(id: string, data: Prisma.TipoCategoriaUpdateInput): Promise<TipoCategoria> {
        return prisma.tipoCategoria.update({ where: { id }, data });
    }

    async remover(id: string): Promise<TipoCategoria> {
        return prisma.tipoCategoria.delete({ where: { id } });
    }
}

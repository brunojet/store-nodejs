import { TipoCategoriaRepository } from '@shared/repository/tipocategoria.repository';
import { Request, Response } from 'express';

const tipoCategoriaRepository = new TipoCategoriaRepository();

export class TipoCategoriaController {
    async criar(req: Request, res: Response) {
        try {
            const tipoCategoria = await tipoCategoriaRepository.criar(req.body);
            res.status(201).json(tipoCategoria);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async listar(req: Request, res: Response) {
        const tipos = await tipoCategoriaRepository.listar();
        res.json(tipos);
    }

    async buscarPorId(req: Request, res: Response) {
        const tipoCategoria = await tipoCategoriaRepository.buscarPorId(req.params.id);
        if (tipoCategoria) {
            res.json(tipoCategoria);
        } else {
            res.status(404).json({ error: 'TipoCategoria não encontrada' });
        }
    }

    async atualizar(req: Request, res: Response) {
        try {
            const tipoCategoria = await tipoCategoriaRepository.atualizar(req.params.id, req.body);
            res.json(tipoCategoria);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async remover(req: Request, res: Response) {
        try {
            const tipoCategoria = await tipoCategoriaRepository.remover(req.params.id);
            res.json(tipoCategoria);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

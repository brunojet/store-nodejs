import { CategoriaRepository } from '@shared/repository/categoria.repository';
import { Request, Response } from 'express';

const categoriaRepository = new CategoriaRepository();

export class CategoriaController {
    async criar(req: Request, res: Response) {
        try {
            const categoria = await categoriaRepository.criar(req.body);
            res.status(201).json(categoria);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async listar(req: Request, res: Response) {
        const categorias = await categoriaRepository.listar();
        res.json(categorias);
    }

    async buscarPorId(req: Request, res: Response) {
        const categoria = await categoriaRepository.buscarPorId(req.params.id);
        if (categoria) {
            res.json(categoria);
        } else {
            res.status(404).json({ error: 'Categoria não encontrada' });
        }
    }

    async atualizar(req: Request, res: Response) {
        try {
            const categoria = await categoriaRepository.atualizar(req.params.id, req.body);
            res.json(categoria);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async remover(req: Request, res: Response) {
        try {
            const categoria = await categoriaRepository.remover(req.params.id);
            res.json(categoria);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

import {Request, Response, Router} from 'express';

import {CategoriaService} from '../service/categoria.service';

const categoriaService = new CategoriaService();
const categoriaRouter = Router();

categoriaRouter.get('/', async (req: Request, res: Response) => {
  const {page = 1, pageSize = 10} = req.query;
  const result = await categoriaService.list(Number(page), Number(pageSize));
  res.json(result);
});

categoriaRouter.get('/:id', async (req: Request, res: Response) => {
  const result = await categoriaService.get(req.params.id);
  if (result)
    res.json(result);
  else
    res.status(404).json({error : 'Categoria não encontrada'});
});

categoriaRouter.post('/', async (req: Request, res: Response) => {
  const result = await categoriaService.create(req.body);
  res.status(201).json(result);
});

categoriaRouter.put('/:id', async (req: Request, res: Response) => {
  const result = await categoriaService.update(req.params.id, req.body);
  res.json(result);
});

categoriaRouter.delete('/:id', async (req: Request, res: Response) => {
  await categoriaService.delete(req.params.id);
  res.status(204).send();
});

export default categoriaRouter;

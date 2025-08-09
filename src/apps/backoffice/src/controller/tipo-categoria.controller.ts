import {Request, Response, Router} from 'express';

import {TipoCategoriaService} from '../service/tipo-categoria.service';

const tipoCategoriaService = new TipoCategoriaService();
const tipoCategoriaRouter = Router();

tipoCategoriaRouter.get('/', async (req: Request, res: Response) => {
  const {page = 1, pageSize = 10} = req.query;
  const result =
      await tipoCategoriaService.list(Number(page), Number(pageSize));
  res.json(result);
});

tipoCategoriaRouter.get('/:id', async (req: Request, res: Response) => {
  const result = await tipoCategoriaService.get(req.params.id);
  if (result)
    res.json(result);
  else
    res.status(404).json({error : 'TipoCategoria não encontrada'});
});

tipoCategoriaRouter.post('/', async (req: Request, res: Response) => {
  const result = await tipoCategoriaService.create(req.body);
  res.status(201).json(result);
});

tipoCategoriaRouter.put('/:id', async (req: Request, res: Response) => {
  const result = await tipoCategoriaService.update(req.params.id, req.body);
  res.json(result);
});

tipoCategoriaRouter.delete('/:id', async (req: Request, res: Response) => {
  await tipoCategoriaService.delete(req.params.id);
  res.status(204).send();
});

export default tipoCategoriaRouter;

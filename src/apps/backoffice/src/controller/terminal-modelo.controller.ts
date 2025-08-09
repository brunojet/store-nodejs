import {Request, Response, Router} from 'express';

import {TerminalModeloService} from '../service/terminal-modelo.service';

const terminalModeloService = new TerminalModeloService();
const terminalModeloRouter = Router();

terminalModeloRouter.get('/', async (req: Request, res: Response) => {
  const {page = 1, pageSize = 10} = req.query;
  const result =
      await terminalModeloService.list(Number(page), Number(pageSize));
  res.json(result);
});

terminalModeloRouter.get('/:id', async (req: Request, res: Response) => {
  const result = await terminalModeloService.get(req.params.id);
  if (result)
    res.json(result);
  else
    res.status(404).json({error : 'TerminalModelo não encontrada'});
});

terminalModeloRouter.post('/', async (req: Request, res: Response) => {
  const result = await terminalModeloService.create(req.body);
  res.status(201).json(result);
});

terminalModeloRouter.put('/:id', async (req: Request, res: Response) => {
  const result = await terminalModeloService.update(req.params.id, req.body);
  res.json(result);
});

terminalModeloRouter.delete('/:id', async (req: Request, res: Response) => {
  await terminalModeloService.delete(req.params.id);
  res.status(204).send();
});

export default terminalModeloRouter;

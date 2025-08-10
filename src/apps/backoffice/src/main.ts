/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { TerminalModeloRepository, CategoriaRepository, TipoCategoriaRepository } from '@shared';
import { TerminalModeloService } from './service/terminal-modelo.service';
import { CategoriaService } from './service/categoria.service';
import { TipoCategoriaService } from './service/tipo-categoria.service';
import { TerminalModeloController } from './controller/terminal-modelo.controller';
import { CategoriaController } from './controller/categoria.controller';
import { TipoCategoriaController } from './controller/tipo-categoria.controller';
import express from 'express';
import * as path from 'path';

const app = express();


// Instantiate repositories
const terminalModeloRepository = new TerminalModeloRepository(undefined);
const categoriaRepository = new CategoriaRepository(undefined);
const tipoCategoriaRepository = new TipoCategoriaRepository(undefined);

// Instantiate services
const terminalModeloService = new TerminalModeloService(terminalModeloRepository);
const categoriaService = new CategoriaService(categoriaRepository);
const tipoCategoriaService = new TipoCategoriaService(tipoCategoriaRepository);

// Instantiate controllers
const terminalModeloController = new TerminalModeloController(terminalModeloService);
const categoriaController = new CategoriaController(categoriaService);
const tipoCategoriaController = new TipoCategoriaController(tipoCategoriaService);


app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Mount controller routers
app.use('/api/terminal-modelo', terminalModeloController.router);
app.use('/api/categoria', categoriaController.router);
app.use('/api/tipo-categoria', tipoCategoriaController.router);


// Removed mock endpoint. All RESTful endpoints are now handled by controllers.

const port = process.env.PORT || 3333;
const server = app.listen(
  port, () => { console.log(`Listening at http://localhost:${port}/api`); });
server.on('error', console.error);

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import {
  CategoriaRepository,
  TerminalModeloRepository,
  TipoCategoriaRepository
} from '@shared';
import express from 'express';
import * as path from 'path';

import {CategoriaController} from './controller/categoria.controller';
import {
  TerminalModeloController
} from './controller/terminal-modelo.controller';
import {TipoCategoriaController} from './controller/tipo-categoria.controller';
import {CategoriaService} from './service/categoria.service';
import {TerminalModeloService} from './service/terminal-modelo.service';
import {TipoCategoriaService} from './service/tipo-categoria.service';

const app = express();

// Instantiate repositories
const terminalModeloRepository = new TerminalModeloRepository();
const categoriaRepository = new CategoriaRepository();
const tipoCategoriaRepository = new TipoCategoriaRepository();

// Instantiate services
const terminalModeloService =
    new TerminalModeloService(terminalModeloRepository);
const categoriaService = new CategoriaService(categoriaRepository);
const tipoCategoriaService = new TipoCategoriaService(tipoCategoriaRepository);

// Instantiate controllers
const terminalModeloController =
    new TerminalModeloController(terminalModeloService);
const categoriaController = new CategoriaController(categoriaService);
const tipoCategoriaController =
    new TipoCategoriaController(tipoCategoriaService);

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

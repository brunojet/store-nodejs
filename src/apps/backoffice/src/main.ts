/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';

import categoriaRouter from './controller/categoria.controller';
import terminalModeloRouter from './controller/terminal-modelo.controller';
import tipoCategoriaRouter from './controller/tipo-categoria.controller';

const app = express();

app.use(express.json());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use('/api/backoffice/categoria', categoriaRouter);
app.use('/api/backoffice/tipo-categoria', tipoCategoriaRouter);
app.use('/api/backoffice/terminal-modelo', terminalModeloRouter);

const port = process.env.PORT || 3333;
const server = app.listen(
    port, () => { console.log(`Listening at http://localhost:${port}/api`); });
server.on('error', console.error);

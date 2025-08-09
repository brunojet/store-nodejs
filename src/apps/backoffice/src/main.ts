/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import {CategoriaRepository} from '@shared'
import express from 'express';
import * as path from 'path';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', async (req, res) => {
  const categoriaRepo = new CategoriaRepository(null);
  const response = await categoriaRepo.getAll();
  res.send(response);
});

const port = process.env.PORT || 3333;
const server = app.listen(
    port, () => { console.log(`Listening at http://localhost:${port}/api`); });
server.on('error', console.error);

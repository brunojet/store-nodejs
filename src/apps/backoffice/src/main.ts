/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import {TerminalModeloRepository} from '@shared';
import express from 'express';
import * as path from 'path';

const app = express();

const terminalModeloRepository = new TerminalModeloRepository(null);

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', async (req, res) => {
  try {
    const response = await terminalModeloRepository.getAll();
    res.send({message : response});
  } catch (error) {
    res.status(500).send(
        {error : 'Erro ao buscar dados', details : error?.message});
  }
});

const port = process.env.PORT || 3333;
const server = app.listen(
    port, () => { console.log(`Listening at http://localhost:${port}/api`); });
server.on('error', console.error);

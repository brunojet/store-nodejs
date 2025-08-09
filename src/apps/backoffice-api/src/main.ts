import express from 'express';
import { categoriaRoutes } from './routes/categoria.routes';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

// Middleware para parsing JSON
app.use(express.json());

// Rota básica
app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

// Registrar rotas de categoria
app.use('/api', categoriaRoutes);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});

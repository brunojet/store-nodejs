import express from 'express';

export function startServer(): void {
  const app = express();
  const portEnv: string|undefined = process.env['PORT'];
  const port: number = (portEnv !== undefined && portEnv !== '') ? Number(portEnv) : 3000;

  app.get('/', (_req, res) => {
    res.send(`Hello from worker ${process.pid}`);
  });

  app.listen(port, () => {
    console.log(`Worker ${process.pid} started on port ${port}`);
  });
}

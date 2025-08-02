import express from 'express';

import healthRouter from './apps/infra/health/health.route.js';

export function startServer(): void {
  const app = express();
  const portEnv: string|undefined = process.env['PORT'];
  const port: number = (portEnv !== undefined && portEnv !== '') ? Number(portEnv) : 3000;

  app.use(healthRouter);

  app.listen(port, () => {
    console.log(`Worker ${process.pid} started on port ${port}`);
  });
}

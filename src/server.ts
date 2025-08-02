import express from 'express';

import healthRouter from './apps/infra/health/health.route.js';
import {observabilityMiddleware} from './libs/shared/middleware/observability.middleware.js';

export function startServer(): void {
  const app = express();
  const portEnv: string|undefined = process.env['PORT'];
  const port: number = (portEnv !== undefined && portEnv !== '') ? Number(portEnv) : 3000;

  // Middleware global de observabilidade - deve ser o primeiro
  app.use(observabilityMiddleware);

  // Middleware de parsing JSON/URL-encoded
  app.use(express.json());
  app.use(express.urlencoded({extended: true}));

  // Rotas
  app.use(healthRouter);

  app.listen(port, () => {
    console.log(`Worker ${process.pid} started on port ${port}`);
  });
}

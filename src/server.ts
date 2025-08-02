import express from 'express';
import type { Server } from 'http';

import { setupHealthChecks, setupHealthRoutes } from './apps/infra/health/terminus-health.js';
import { observabilityMiddleware } from './libs/shared/middleware/observability.middleware.js';

export function startServer(): Server {
  const app = express();
  const portEnv: string | undefined = process.env['PORT'];
  const port: number = (portEnv !== undefined && portEnv !== '') ? Number(portEnv) : 3000;

  // Middleware global de observabilidade - deve ser o primeiro
  app.use(observabilityMiddleware);

  // Middleware de parsing JSON/URL-encoded
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Registrar rotas de health check
  setupHealthRoutes(app);

  // Rota básica para teste
  app.get('/', (_req, res) => {
    res.json({ message: 'Server is running', pid: process.pid });
  });

  // Criar servidor HTTP
  const server = app.listen(port, () => {
    console.log(`Worker ${process.pid} started on port ${port}`);
  });

  // Setup health checks com terminus (graceful shutdown)
  setupHealthChecks(server);

  return server;
}
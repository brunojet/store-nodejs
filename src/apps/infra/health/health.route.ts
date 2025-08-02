import express from 'express';

import {DatabaseHealthCheck, HealthCheck} from '../../../libs/shared/health/index.js';
import {addMetricWithContext, logWithContext} from '../../../libs/shared/middleware/observability.middleware.js';

const router = express.Router();


router.get('/health', async (req, res) => {
  logWithContext(req, 'Health check initiated');

  const dbCheck: DatabaseHealthCheck = new DatabaseHealthCheck();
  const dbResult: HealthCheck = await dbCheck.check();

  const status: 'healthy'|'unhealthy' = dbResult.status === 'pass' ? 'healthy' : 'unhealthy';
  const result = {
    status,
    checks: [dbResult],
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: process.env['npm_package_version'] ?? 'unknown'
  };

  // Adicionar métrica de health status
  addMetricWithContext(req, 'health_check.status', status === 'healthy' ? 1 : 0, {service: 'database'});

  logWithContext(
      req, `Health check completed: ${status}`, status === 'healthy' ? 'info' : 'warn',
      {healthStatus: status, checks: result.checks.length, uptime: result.uptime});

  res.status(status === 'healthy' ? 200 : 503).json(result);
});

export default router;

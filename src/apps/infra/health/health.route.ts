import express from 'express';

import {DatabaseHealthCheck, HealthCheck} from '../../../libs/shared/health/index.js';

const router = express.Router();


router.get('/health', async (_req, res) => {
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

  res.status(status === 'healthy' ? 200 : 503).json(result);
});

export default router;

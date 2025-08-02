import express from 'express';

import {createDefaultHealthManager, HealthCheckManager, HealthCheckResult} from '../../../libs/shared/health/index.js';
import {addMetricWithContext, logWithContext} from '../../../libs/shared/middleware/observability.middleware.js';

const router = express.Router();


interface HealthManagerRequest extends express.Request {
  healthManager?: Pick<HealthCheckManager, 'runChecks'>;
}

router.get('/', async (req: express.Request, res: express.Response) => {
  logWithContext(req, 'Health check initiated');
  try {
    const manager = (req as HealthManagerRequest).healthManager ?? createDefaultHealthManager();
    const result: HealthCheckResult = await manager.runChecks();
    const status: 'healthy'|'unhealthy' =
        result.status === 'healthy' || result.status === 'degraded' ? 'healthy' : 'unhealthy';

    addMetricWithContext(req, 'health_check.status', status === 'healthy' ? 1 : 0, {service: 'all'});

    logWithContext(
        req, `Health check completed: ${result.status}`,
        result.status === 'healthy'      ? 'info' :
            result.status === 'degraded' ? 'warn' :
                                           'error',
        {healthStatus: result.status, checks: result.checks.length, uptime: result.uptime});

    res.set('Content-Type', 'application/json');
    res.status(result.status === 'healthy' || result.status === 'degraded' ? 200 : 503).json(result);
  } catch (error) {
    logWithContext(req, 'Health check failed', 'error', {error: error instanceof Error ? error.message : error});
    res.set('Content-Type', 'application/json');
    res.status(500).json({
      status: 'error',
      message: 'Failed to perform health checks',
      error: error instanceof Error ? error.message : error
    });
  }
});

export default router;

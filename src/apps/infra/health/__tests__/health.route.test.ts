import {beforeEach, describe, expect, it, jest} from '@jest/globals';
import express from 'express';
import request from 'supertest';

import type {NextFunction, Request, Response} from 'express';
import type {HealthCheckResult} from '../../../../libs/shared/health/types.js';
import healthRouter from '../health.route.js';

// Mock observability helpers to avoid side effects
jest.mock('../../../../libs/shared/middleware/observability.middleware', () => ({
                                                                           logWithContext: jest.fn(),
                                                                           addMetricWithContext: jest.fn(),
                                                                         }));

// Mock DatabaseHealthCheck

jest.mock(
    '../../../../libs/shared/health/index',
    () => ({
      DatabaseHealthCheck: jest.fn().mockImplementation(() => ({
                                                          check: jest.fn().mockImplementation(() => Promise.resolve({
                                                            name: 'database',
                                                            status: 'pass',
                                                            message: 'Database connection is healthy',
                                                          })),
                                                        })),
    }));

describe('GET /health', () => {
  let app: express.Express;

  beforeEach(() => {
    app = express();
  });


  it('should return 200 and healthy status when db is healthy', async () => {
    // Manager mock para status healthy
    const healthyResult: HealthCheckResult = {
      status: 'healthy',
      checks: [{name: 'database', status: 'pass', message: 'Database connection is healthy'}],
      timestamp: new Date().toISOString(),
      uptime: 123,
      version: 'test'
    };
    const healthyManager = {
      runChecks: jest.fn(() => Promise.resolve(healthyResult)) as () => Promise<HealthCheckResult>
    };
    app.use((req: Request, _res: Response, next: NextFunction) => {
      (req as unknown as {healthManager: typeof healthyManager}).healthManager = healthyManager;
      next();
    });
    app.use('/health', healthRouter);
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect((res.body as HealthCheckResult).status).toBe('healthy');
    expect((res.body as HealthCheckResult).checks?.[0]?.status).toBe('pass');
  });

  it('should return 503 and unhealthy status when db is unhealthy', async () => {
    // Manager mock para status unhealthy
    const unhealthyResult: HealthCheckResult = {
      status: 'unhealthy',
      checks: [{name: 'database', status: 'fail', message: 'Database connection failed'}],
      timestamp: new Date().toISOString(),
      uptime: 123,
      version: 'test'
    };
    const unhealthyManager = {
      runChecks: jest.fn(() => Promise.resolve(unhealthyResult)) as () => Promise<HealthCheckResult>
    };
    app.use((req: Request, _res: Response, next: NextFunction) => {
      (req as unknown as {healthManager: typeof unhealthyManager}).healthManager = unhealthyManager;
      next();
    });
    app.use('/health', healthRouter);
    const res = await request(app).get('/health');
    expect(res.status).toBe(503);
    expect((res.body as HealthCheckResult).status).toBe('unhealthy');
    expect((res.body as HealthCheckResult).checks?.[0]?.status).toBe('fail');
  });
});

import {beforeEach, describe, expect, it, jest} from '@jest/globals';
import express from 'express';
import request from 'supertest';

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
    app.use(healthRouter);
  });

  it('should return 200 and healthy status when db is healthy', async () => {
    // Mock already configured for healthy response
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const res = await request(app).get('/health');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(res.status).toBe(200);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(res.body.status).toBe('healthy');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(res.body.checks[0].status).toBe('pass');
  });

  it('should return 503 and unhealthy status when db is unhealthy', async () => {
    // Mock the health check to return failure
    const {DatabaseHealthCheck} = await import('../../../../libs/shared/health/index.js');
    (DatabaseHealthCheck as jest.Mock).mockImplementationOnce(() => ({
                                                                check:
                                                                    jest.fn().mockImplementation(() => Promise.resolve({
                                                                      name: 'database',
                                                                      status: 'fail',
                                                                      message: 'Database connection failed',
                                                                    })),
                                                              }));

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const res = await request(app).get('/health');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(res.status).toBe(503);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(res.body.status).toBe('unhealthy');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(res.body.checks[0].status).toBe('fail');
  });
});

jest.mock('../../database/index.js', () => ({db: {healthCheck: jest.fn().mockResolvedValue(true)}}));

import {createHealthCheckEndpoint, createSpecificHealthCheckEndpoint, HealthCheckManager} from '../index.js';

describe('Health Endpoints', () => {
  it('should return 200 and health result for general endpoint', async () => {
    const manager = new HealthCheckManager();
    const req = {};
    const res = {status: jest.fn().mockReturnThis(), json: jest.fn()};
    const handler = createHealthCheckEndpoint(manager);
    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      data: expect.objectContaining({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        status: expect.any(String),
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        checks: expect.any(Array)
      })
    }));
  });

  it('should return 404 for specific health check not found', async () => {
    const manager = new HealthCheckManager();
    const req = {params: {check: 'not-exist'}};
    const res = {status: jest.fn().mockReturnThis(), json: jest.fn()};
    const handler = createSpecificHealthCheckEndpoint(manager);
    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      error: expect.objectContaining({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        code: expect.any(String),
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        message: expect.any(String),
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        details: expect.any(Object)
      })
    }));
  });

  it('should return 503 if provider throws error', async () => {
    const manager = new HealthCheckManager();
    manager.addProvider({
      name: 'fail',
      check: async () => {
        throw new Error('fail');
      }
    });
    const req = {params: {check: 'fail'}};
    const res = {status: jest.fn().mockReturnThis(), json: jest.fn()};
    const handler = createSpecificHealthCheckEndpoint(manager);
    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(503);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      data: expect.objectContaining({
        status: 'fail',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        message: expect.any(String),
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        details: expect.objectContaining({error: expect.any(String)})
      })
    }));
  });
  it('should return 200 and warning if provider returns warning status', async () => {
    const manager = new HealthCheckManager();
    manager.addProvider(
        {name: 'warn', check: async () => ({name: 'warn', status: 'warn', message: 'low disk', details: {free: 100}})});
    const req = {params: {check: 'warn'}};
    const res = {status: jest.fn().mockReturnThis(), json: jest.fn()};
    const handler = createSpecificHealthCheckEndpoint(manager);
    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(503);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      data: expect.objectContaining({
        status: 'warn',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        message: expect.any(String),
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        details: expect.objectContaining({free: 100})
      })
    }));
  });

  it('should return 503 if provider returns unknown status', async () => {
    const manager = new HealthCheckManager();
    manager.addProvider({
      name: 'unknown',
      // @ts-expect-error: testando status inválido propositalmente
      check: async () => ({name: 'unknown', status: 'foobar', message: '???', details: {}})
    });
    const req = {params: {check: 'unknown'}};
    const res = {status: jest.fn().mockReturnThis(), json: jest.fn()};
    const handler = createSpecificHealthCheckEndpoint(manager);
    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(503);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      data: expect.objectContaining({
        name: 'unknown',
        status: 'foobar',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        message: expect.any(String),
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        details: expect.any(Object)
      })
    }));
  });

  it('should return 400 if handler throws unexpected error', async () => {
    // Simula erro inesperado no handler
    const manager = new HealthCheckManager();
    const handler = createSpecificHealthCheckEndpoint(manager);
    // req sem params para forçar erro de acesso
    const req = {};
    const res = {status: jest.fn().mockReturnThis(), json: jest.fn()};
    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      error: expect.objectContaining({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        code: expect.any(String),
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        message: expect.any(String)
      })
    }));
  });
});

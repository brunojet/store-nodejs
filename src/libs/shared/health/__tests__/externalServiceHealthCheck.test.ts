jest.mock('../../database/index.js', () => ({db: {healthCheck: jest.fn().mockResolvedValue(true)}}));

import type {HealthCheck} from '../index.js';
import {ExternalServiceHealthCheck} from '../index.js';

describe('ExternalServiceHealthCheck', () => {
  it('should return fail when service is unreachable', async () => {
    const check = new ExternalServiceHealthCheck('http://fake-service', '100');
    jest.spyOn(globalThis, 'fetch').mockRejectedValueOnce(new Error('fail'));
    const result: HealthCheck = await check.check();
    expect(result.status).toBe('fail');
    expect(result.name).toBe('http://fake-service');
    (globalThis.fetch as jest.Mock).mockRestore?.();
  });

  it('should return pass when service is reachable', async () => {
    const check = new ExternalServiceHealthCheck('http://fake-service', '100');
    jest.spyOn(globalThis, 'fetch').mockResolvedValueOnce(new Response(null, {status: 200, statusText: 'OK'}));
    const result: HealthCheck = await check.check();
    expect(result.status).toBe('pass');
    expect(result.name).toBe('http://fake-service');
    (globalThis.fetch as jest.Mock).mockRestore?.();
  });
});

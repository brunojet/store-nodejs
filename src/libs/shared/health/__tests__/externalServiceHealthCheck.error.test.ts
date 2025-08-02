import {ExternalServiceHealthCheck} from '../ExternalServiceHealthCheck.js';

describe('ExternalServiceHealthCheck (error branch)', () => {
  it('should return fail if fetch throws', async () => {
    // Mock global fetch para lançar erro
    globalThis.fetch = jest.fn().mockImplementation(() => {
      throw new Error('fetch error');
    });
    const check = new ExternalServiceHealthCheck('external', 'http://fake-url');
    const result = await check.check();
    expect(result.status).toBe('fail');
    expect(result.message).toMatch(/Service is unavailable/);
    expect(result.details).toHaveProperty('error');
    expect(result.details).toHaveProperty('url');
  });
});

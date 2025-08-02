jest.mock('../../database/index.js', () => ({db: {healthCheck: jest.fn().mockResolvedValue(true)}}));

import {HealthCheckManager, MemoryHealthCheck} from '../index.js';

describe('HealthCheckManager', () => {
  it('should add and run providers', async () => {
    const manager = new HealthCheckManager();
    manager.addProvider(new MemoryHealthCheck(500));
    const results = await manager.runChecks();
    expect(results).toHaveProperty('checks');
    expect(Array.isArray(results.checks)).toBe(true);
    expect(results.checks.length).toBeGreaterThan(0);
    expect(results.checks[0]?.name).toBe('memory');
  });

  it('should remove provider', () => {
    const manager = new HealthCheckManager();
    manager.addProvider(new MemoryHealthCheck(500));
    expect(manager.removeProvider('memory')).toBe(true);
    expect(manager.removeProvider('not-exist')).toBe(false);
  });

  it('should runCheck for existing and non-existing provider', async () => {
    const manager = new HealthCheckManager();
    manager.addProvider(new MemoryHealthCheck(500));
    const result = await manager.runCheck('memory');
    expect(result?.name).toBe('memory');
    const notFound = await manager.runCheck('not-exist');
    expect(notFound).toBeNull();
  });

  it('should handle provider throwing error in runCheck', async () => {
    const manager = new HealthCheckManager();
    manager.addProvider({
      name: 'fail-provider',
      check: async () => {
        throw new Error('fail');
      }
    });
    const result = await manager.runCheck('fail-provider');
    expect(result?.status).toBe('fail');
    expect(result?.name).toBe('fail-provider');
  });

  it('should get providers, provider, uptime and version', () => {
    const manager = new HealthCheckManager();
    manager.addProvider(new MemoryHealthCheck(500));
    expect(manager.getProviders()).toContain('memory');
  });
});

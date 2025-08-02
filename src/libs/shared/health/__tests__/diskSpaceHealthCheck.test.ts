// Mock do banco para evitar erro de DATABASE_URL
jest.mock('../../database/index.js', () => ({db: {healthCheck: jest.fn().mockResolvedValue(true)}}));

import type {HealthCheck} from '../index.js';
import {DiskSpaceHealthCheck} from '../index.js';
// Mock do check-disk-space para funcionar com import dinâmico
jest.mock(
    'check-disk-space',
    () => ({
      __esModule: true,
      default: jest.fn(
          async () => ({free: 10 * 1024 * 1024 * 1024, size: 20 * 1024 * 1024 * 1024}))  // 10GB livre, 20GB total
    }));

describe('DiskSpaceHealthCheck', () => {
  it('should return pass when disk space is sufficient', async () => {
    const check = new DiskSpaceHealthCheck('.')
    const result: HealthCheck = await check.check();
    expect(result.name).toBe('disk_space');
    expect(result.status).toBe('pass');
  });
});

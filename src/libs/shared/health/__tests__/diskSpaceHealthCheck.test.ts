// Mock do banco para evitar erro de DATABASE_URL
jest.mock('../../database/index.js', () => ({db: {healthCheck: jest.fn().mockResolvedValue(true)}}));

import type {HealthCheck} from '../index.js';
import {DiskSpaceHealthCheck} from '../index.js';

describe('DiskSpaceHealthCheck', () => {
  it('should return pass when disk space is sufficient', async () => {
    // Simula implementação fictícia, pois a real depende de sistema
    const check = new DiskSpaceHealthCheck('.');
    const result: HealthCheck = await check.check();
    expect(result.name).toBe('disk_space');
    expect(result.status).toBe('pass');
  });
});

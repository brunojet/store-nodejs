// Mock do banco para evitar erro de DATABASE_URL
jest.mock('../../database/index.js', () => ({
                                       db: {
                                         healthCheck: jest.fn().mockResolvedValue(true),
                                       }
                                     }));

import type {HealthCheck} from '../index.js';
import {MemoryHealthCheck} from '../index.js';

describe('MemoryHealthCheck', () => {
  it('should return pass when memory usage is below threshold', async () => {
    const originalMemoryUsage = process.memoryUsage;
    process.memoryUsage = (() => ({
                             heapUsed: 100 * 1024 * 1024,
                             heapTotal: 200 * 1024 * 1024,
                             rss: 150 * 1024 * 1024,
                             external: 10 * 1024 * 1024,
                             arrayBuffers: 0
                           })) as unknown as typeof process.memoryUsage;

    const check = new MemoryHealthCheck(500);
    const result: HealthCheck = await check.check();

    expect(result.status).toBe('pass');
    expect(result.name).toBe('memory');
    expect(result.message).toMatch(/memory usage/i);
    expect(result.details?.['heapUsed']).toBe(100);
    expect(result.details?.['heapTotal']).toBe(200);
    expect(result.details?.['threshold']).toBe(500);

    process.memoryUsage = originalMemoryUsage;
  });

  it('should return warn when memory usage is above threshold', async () => {
    const originalMemoryUsage = process.memoryUsage;
    process.memoryUsage = (() => ({
                             heapUsed: 600 * 1024 * 1024,
                             heapTotal: 800 * 1024 * 1024,
                             rss: 700 * 1024 * 1024,
                             external: 20 * 1024 * 1024,
                             arrayBuffers: 0
                           })) as unknown as typeof process.memoryUsage;

    const check = new MemoryHealthCheck(500);
    const result: HealthCheck = await check.check();

    expect(result.status).toBe('warn');
    expect(result.name).toBe('memory');
    expect(result.message).toMatch(/memory usage/i);
    expect(result.details?.['heapUsed']).toBe(600);
    expect(result.details?.['heapTotal']).toBe(800);
    expect(result.details?.['threshold']).toBe(500);

    process.memoryUsage = originalMemoryUsage;
  });
});

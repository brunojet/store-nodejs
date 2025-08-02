
import {afterEach, beforeEach, describe, expect, it, jest} from '@jest/globals';

// Mock do módulo database antes de importar qualquer coisa
jest.mock('../../database/index.js', () => ({
                                       db: {
                                         healthCheck: jest.fn(),
                                       },
                                     }));

import {DatabaseHealthCheck} from '../index.js';

describe('DatabaseHealthCheck', () => {
  let mockHealthCheck: jest.MockedFunction<() => Promise<boolean>>;

  beforeEach(() => {
    // Reset dos mocks antes de cada teste
    jest.clearAllMocks();
    // Importa o mock após o reset
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment
    const dbModule: any = jest.requireMock('../../database/index.js');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    mockHealthCheck = dbModule.db.healthCheck;
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should return pass when db.healthCheck() resolves', async () => {
    mockHealthCheck.mockResolvedValue(true);

    const dbCheck = new DatabaseHealthCheck();
    const result = await dbCheck.check();

    expect(result.status).toBe('pass');
    expect(result.name).toBe('database');
    expect(result.message).toMatch(/healthy/i);
    expect(typeof result.responseTime).toBe('number');
    expect(result.responseTime).toBeGreaterThanOrEqual(0);
    expect(mockHealthCheck).toHaveBeenCalledTimes(1);
  });

  it('should return fail when db.healthCheck() rejects', async () => {
    mockHealthCheck.mockRejectedValue(new Error('fail'));

    const dbCheck = new DatabaseHealthCheck();
    const result = await dbCheck.check();

    expect(result.status).toBe('fail');
    expect(result.name).toBe('database');
    expect(result.message).toMatch(/failed/i);
    expect(result.details?.['error']).toBe('fail');
    expect(typeof result.responseTime).toBe('number');
    expect(result.responseTime).toBeGreaterThanOrEqual(0);
    expect(mockHealthCheck).toHaveBeenCalledTimes(1);
  });

  it('should handle non-Error thrown values', async () => {
    mockHealthCheck.mockRejectedValue('string error');

    const dbCheck = new DatabaseHealthCheck();
    const result = await dbCheck.check();

    expect(result.status).toBe('fail');
    expect(result.name).toBe('database');
    expect(result.message).toMatch(/failed/i);
    expect(result.details?.['error']).toBe('Unknown error');
    expect(typeof result.responseTime).toBe('number');
    expect(result.responseTime).toBeGreaterThanOrEqual(0);
    expect(mockHealthCheck).toHaveBeenCalledTimes(1);
  });
});

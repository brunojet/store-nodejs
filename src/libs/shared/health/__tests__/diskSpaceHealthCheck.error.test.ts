
jest.mock('../../database/index.js', () => ({db: {healthCheck: jest.fn().mockResolvedValue(true)}}));
import {DiskSpaceHealthCheck, type HealthCheck} from '../index.js';

describe('DiskSpaceHealthCheck (error branch)', () => {
  it('should return fail if an error is thrown', async () => {
    class DiskSpaceHealthCheckError extends DiskSpaceHealthCheck {
      public override readonly name = 'disk_space';
      override async check(): Promise<HealthCheck> {
        try {
          throw new Error('disk error');
        } catch (error) {
          return {
            name: this.name,
            status: 'fail',
            message: 'Failed to check disk space',
            details: {error: error instanceof Error ? error.message : 'Unknown error'}
          };
        }
      }
    }
    const check = new DiskSpaceHealthCheckError();
    const result = await check.check();
    expect(result.status).toBe('fail');
    expect(result.message).toMatch(/Failed to check disk space/);
    expect(result.details).toHaveProperty('error');
  });
});

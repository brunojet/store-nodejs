import {db} from '../database/index.js';
import type {HealthCheck, HealthCheckProvider} from './types.js';

export class DatabaseHealthCheck implements HealthCheckProvider {
  public readonly name = 'database';

  public async check(): Promise<HealthCheck> {
    const startTime = Date.now();
    try {
      await db.healthCheck();
      const responseTime = Date.now() - startTime;
      return {name: this.name, status: 'pass', responseTime, message: 'Database connection is healthy'};
    } catch (error) {
      const responseTime = Date.now() - startTime;
      return {
        name: this.name,
        status: 'fail',
        responseTime,
        message: 'Database connection failed',
        details: {error: error instanceof Error ? error.message : 'Unknown error'}
      };
    }
  }
}

import type {HealthCheck, HealthCheckProvider} from './types.js';

export class MemoryHealthCheck implements HealthCheckProvider {
  public readonly name = 'memory';
  constructor(private readonly thresholdMB: number = 500) {}

  public async check(): Promise<HealthCheck> {
    const memUsage = process.memoryUsage();
    const heapUsedMB = Math.round(memUsage.heapUsed / 1024 / 1024);
    const heapTotalMB = Math.round(memUsage.heapTotal / 1024 / 1024);
    const isHealthy = heapUsedMB < this.thresholdMB;
    return {
      name: this.name,
      status: isHealthy ? 'pass' : 'warn',
      message: `Memory usage: ${heapUsedMB}MB / ${heapTotalMB}MB`,
      details: {
        heapUsed: heapUsedMB,
        heapTotal: heapTotalMB,
        threshold: this.thresholdMB,
        rss: Math.round(memUsage.rss / 1024 / 1024),
        external: Math.round(memUsage.external / 1024 / 1024)
      }
    };
  }
}

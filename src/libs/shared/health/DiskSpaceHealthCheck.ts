import type {HealthCheck, HealthCheckProvider} from './types.js';

export class DiskSpaceHealthCheck implements HealthCheckProvider {
  public readonly name = 'disk_space';
  constructor(private readonly path: string = '.') {}

  public async check(): Promise<HealthCheck> {
    try {
      // Implementação básica - em produção usar biblioteca como 'statvfs'
      return {
        name: this.name,
        status: 'pass',
        message: 'Disk space check not implemented',
        details: {path: this.path, note: 'Requires implementation for production use'}
      };
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

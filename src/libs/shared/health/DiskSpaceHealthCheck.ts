

import type {HealthCheck, HealthCheckProvider} from './types.js';

export class DiskSpaceHealthCheck implements HealthCheckProvider {
  public readonly name = 'disk_space';
  constructor(private readonly path: string = '.') {}

  public async check(): Promise<HealthCheck> {
    try {
      // Import dinâmico e tipagem segura para evitar erro de lint/type
      const mod = await import('check-disk-space');
      type DiskSpaceFn = (path: string) => Promise<{free: number; size: number}>;
      if (typeof mod.default !== 'function') {
        throw new Error('check-disk-space does not export a default function');
      }
      const checkDiskSpace: DiskSpaceFn = mod.default as unknown as DiskSpaceFn;
      const info = await checkDiskSpace(this.path);
      const totalMB = Math.round(info.size / 1024 / 1024);
      const freeMB = Math.round(info.free / 1024 / 1024);
      const usedMB = totalMB - freeMB;
      const percentUsed = totalMB > 0 ? Math.round((usedMB / totalMB) * 100) : 0;
      return {
        name: this.name,
        status: freeMB < 1024 ? 'warn' : 'pass',  // <1GB livre = warn
        message: `Disk usage: ${usedMB}MB used / ${totalMB}MB total (${percentUsed}% used)`,
        details: {path: this.path, totalMB, usedMB, freeMB, percentUsed}
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

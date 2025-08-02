


import os from 'os';
import type {HealthCheck, HealthCheckProvider} from './types.js';


export class DiskSpaceHealthCheck implements HealthCheckProvider {
  public readonly name = 'disk_space';
  private static winDrivePath: string|null = null;
  private readonly resolvedPath: string;
  constructor(path: string = '.') {
    let pathToCheck = path;
    if (os.platform() === 'win32') {
      if (!/^([a-zA-Z]:\\)$/.test(pathToCheck)) {
        if (DiskSpaceHealthCheck.winDrivePath === null || DiskSpaceHealthCheck.winDrivePath === undefined ||
            DiskSpaceHealthCheck.winDrivePath === '') {
          const cwd = process.cwd();
          const match = cwd.match(/^([a-zA-Z]:)\\/);
          DiskSpaceHealthCheck.winDrivePath = match ? match[1] + '\\' : 'C:\\';
        }
        pathToCheck = DiskSpaceHealthCheck.winDrivePath;
      }
    }
    this.resolvedPath = pathToCheck;
  }

  public async check(): Promise<HealthCheck> {
    try {
      const mod = await import('check-disk-space');
      type DiskSpaceFn = (path: string) => Promise<{free: number; size: number}>;
      if (typeof mod.default !== 'function') {
        throw new Error('check-disk-space does not export a default function');
      }
      const checkDiskSpace: DiskSpaceFn = mod.default as unknown as DiskSpaceFn;
      const info = await checkDiskSpace(this.resolvedPath);
      const totalMB = Math.round(info.size / 1024 / 1024);
      const freeMB = Math.round(info.free / 1024 / 1024);
      const usedMB = totalMB - freeMB;
      const percentUsed = totalMB > 0 ? Math.round((usedMB / totalMB) * 100) : 0;
      return {
        name: this.name,
        status: freeMB < 1024 ? 'warn' : 'pass',  // <1GB livre = warn
        message: `Disk usage: ${usedMB}MB used / ${totalMB}MB total (${percentUsed}% used)`,
        details: {path: this.resolvedPath, totalMB, usedMB, freeMB, percentUsed}
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

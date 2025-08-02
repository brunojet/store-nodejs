import type {HealthCheck, HealthCheckProvider, HealthCheckResult} from './types.js';

export class HealthCheckManager {
  private readonly providers: Map<string, HealthCheckProvider> = new Map();
  private readonly startTime = Date.now();

  public addProvider(provider: HealthCheckProvider): void {
    this.providers.set(provider.name, provider);
  }

  public removeProvider(name: string): boolean {
    return this.providers.delete(name);
  }

  public async runChecks(): Promise<HealthCheckResult> {
    const checks: HealthCheck[] = [];
    const checkPromises = Array.from(this.providers.values()).map(provider => provider.check());
    const results = await Promise.allSettled(checkPromises);
    results.forEach((result, index) => {
      const providerName = Array.from(this.providers.keys())[index];
      if (result.status === 'fulfilled') {
        checks.push(result.value);
      } else {
        checks.push({
          name: providerName ?? 'unknown',
          status: 'fail',
          message: 'Health check failed to execute',
          details: {error: result.reason instanceof Error ? result.reason.message : 'Unknown error'}
        });
      }
    });
    const hasFailures = checks.some(check => check.status === 'fail');
    const hasWarnings = checks.some(check => check.status === 'warn');
    let overallStatus: 'healthy'|'unhealthy'|'degraded';
    if (hasFailures) {
      overallStatus = 'unhealthy';
    } else if (hasWarnings) {
      overallStatus = 'degraded';
    } else {
      overallStatus = 'healthy';
    }
    const result: HealthCheckResult =
        {status: overallStatus, checks, timestamp: new Date().toISOString(), uptime: Date.now() - this.startTime};
    const version = process.env['npm_package_version'];
    if (version !== null && version !== undefined && version !== '') {
      (result as HealthCheckResult & {version: string}).version = version;
    }
    return result;
  }

  public async runCheck(name: string): Promise<HealthCheck|null> {
    const provider = this.providers.get(name);
    if (!provider) {
      return null;
    }
    try {
      return await provider.check();
    } catch (error) {
      return {
        name,
        status: 'fail',
        message: 'Health check failed to execute',
        details: {error: error instanceof Error ? error.message : 'Unknown error'}
      };
    }
  }

  public getProviders(): string[] {
    return Array.from(this.providers.keys());
  }
}

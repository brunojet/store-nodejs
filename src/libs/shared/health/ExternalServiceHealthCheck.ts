import type {HealthCheck, HealthCheckProvider} from './index.js';

export class ExternalServiceHealthCheck implements HealthCheckProvider {
  public readonly name: string;

  constructor(name: string, private readonly url: string, private readonly timeout: number = 5000) {
    this.name = name;
  }

  public async check(): Promise<HealthCheck> {
    const startTime = Date.now();
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);
    try {
      const response = await fetch(this.url, {method: 'GET', signal: controller.signal});
      const responseTime = Date.now() - startTime;
      if (response.ok) {
        return {
          name: this.name,
          status: 'pass',
          responseTime,
          message: `Service is available (${response.status})`,
          details: {url: this.url, statusCode: response.status}
        };
      } else {
        return {
          name: this.name,
          status: 'fail',
          responseTime,
          message: `Service returned error (${response.status})`,
          details: {url: this.url, statusCode: response.status}
        };
      }
    } catch (error) {
      const responseTime = Date.now() - startTime;
      return {
        name: this.name,
        status: 'fail',
        responseTime,
        message: 'Service is unavailable',
        details: {url: this.url, error: error instanceof Error ? error.message : 'Unknown error'}
      };
    } finally {
      clearTimeout(timeoutId);
    }
  }
}

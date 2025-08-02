export interface HealthCheckResult {
  readonly status: 'healthy'|'unhealthy'|'degraded';
  readonly checks: HealthCheck[];
  readonly timestamp: string;
  readonly uptime: number;
  readonly version?: string;
}

export interface HealthCheck {
  readonly name: string;
  readonly status: 'pass'|'fail'|'warn';
  readonly responseTime?: number;
  readonly message?: string;
  readonly details?: Record<string, unknown>;
}

export interface HealthCheckProvider {
  readonly name: string;
  check(): Promise<HealthCheck>;
}

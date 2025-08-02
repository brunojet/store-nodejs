/**
 * Health Check - Sistema de Monitoramento de Saúde
 *
 * Utilitários para verificação de saúde da aplicação
 */

import {db} from '../database/index.js';

export {ExternalServiceHealthCheck} from './ExternalServiceHealthCheck.js';

import type {ApiResponse} from '../types/index.js';

// Define types for Express-like req/res objects
interface RequestLike {
  context?: {requestId?: string};
  params?: {check?: string};
}

interface ResponseLike {
  status(code: number): ResponseLike;
  json(data: unknown): void;
}

// ========================================
// Health Check Types
// ========================================

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

// ========================================
// Health Check Providers
// ========================================

export interface HealthCheckProvider {
  readonly name: string;
  check(): Promise<HealthCheck>;
}

/**
 * Database Health Check
 */
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

/**
 * Memory Health Check
 */
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

/**
 * Disk Space Health Check
 */
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



// ========================================
// Health Check Manager
// ========================================

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

    // Executa todos os checks em paralelo
    const checkPromises = Array.from(this.providers.values()).map(provider => provider.check());

    const results = await Promise.allSettled(checkPromises);

    // Processa resultados
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

    // Determina status geral
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

// ========================================
// Express Integration
// ========================================

/**
 * Cria health check endpoint para Express
 */
export function createHealthCheckEndpoint(manager: HealthCheckManager) {
  return async(req: RequestLike, res: ResponseLike): Promise<void> => {
    try {
      const result = await manager.runChecks();

      const statusCode = result.status === 'healthy' ? 200 : result.status === 'degraded' ? 200 : 503;

      const requestId = (req.context?.requestId !== null && req.context?.requestId !== undefined) ?
          req.context.requestId :
          'health-check';

      const response: ApiResponse<HealthCheckResult> =
          {success: result.status !== 'unhealthy', data: result, timestamp: new Date().toISOString(), requestId};

      res.status(statusCode).json(response);
    } catch (error) {
      const requestId = (req.context?.requestId !== null && req.context?.requestId !== undefined) ?
          req.context.requestId :
          'health-check';

      const response: ApiResponse = {
        success: false,
        error: {
          code: 'HEALTH_CHECK_ERROR',
          message: 'Failed to perform health checks',
          details: {error: error instanceof Error ? error.message : 'Unknown error'}
        },
        timestamp: new Date().toISOString(),
        requestId
      };

      res.status(500).json(response);
    }
  };
}

/**
 * Cria health check específico endpoint
 */
export function createSpecificHealthCheckEndpoint(manager: HealthCheckManager) {
  return async(req: RequestLike, res: ResponseLike): Promise<void> => {
    const checkName = req.params?.check;

    if (checkName === null || checkName === undefined || checkName === '') {
      const requestId = (req.context?.requestId !== null && req.context?.requestId !== undefined) ?
          req.context.requestId :
          'health-check';

      const response: ApiResponse = {
        success: false,
        error: {code: 'INVALID_CHECK_NAME', message: 'Check name is required'},
        timestamp: new Date().toISOString(),
        requestId
      };

      res.status(400).json(response);
      return;
    }

    try {
      const result = await manager.runCheck(checkName);

      if (!result) {
        const requestId = (req.context?.requestId !== null && req.context?.requestId !== undefined) ?
            req.context.requestId :
            'health-check';

        const response: ApiResponse = {
          success: false,
          error: {
            code: 'CHECK_NOT_FOUND',
            message: `Health check '${checkName}' not found`,
            details: {availableChecks: manager.getProviders()}
          },
          timestamp: new Date().toISOString(),
          requestId
        };

        res.status(404).json(response);
        return;
      }

      const statusCode = result.status === 'pass' ? 200 : 503;

      const requestId = (req.context?.requestId !== null && req.context?.requestId !== undefined) ?
          req.context.requestId :
          'health-check';

      const response: ApiResponse<HealthCheck> =
          {success: result.status === 'pass', data: result, timestamp: new Date().toISOString(), requestId};

      res.status(statusCode).json(response);
    } catch (error) {
      const requestId = (req.context?.requestId !== null && req.context?.requestId !== undefined) ?
          req.context.requestId :
          'health-check';

      const response: ApiResponse = {
        success: false,
        error: {
          code: 'HEALTH_CHECK_ERROR',
          message: `Failed to perform health check '${checkName}'`,
          details: {error: error instanceof Error ? error.message : 'Unknown error'}
        },
        timestamp: new Date().toISOString(),
        requestId
      };

      res.status(500).json(response);
    }
  };
}

// ========================================
// Default Health Manager
// ========================================

/**
 * Cria manager padrão com checks básicos
 */
export function createDefaultHealthManager(): HealthCheckManager {
  const manager = new HealthCheckManager();

  // Adiciona checks padrão
  manager.addProvider(new DatabaseHealthCheck());
  manager.addProvider(new MemoryHealthCheck());
  manager.addProvider(new DiskSpaceHealthCheck());

  return manager;
}

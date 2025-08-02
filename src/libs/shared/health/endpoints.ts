import type {ApiResponse} from '../types/index.js';
import type {HealthCheckManager} from './HealthCheckManager.js';
import type {HealthCheck, HealthCheckResult} from './types.js';

interface RequestLike {
  context?: {requestId?: string};
  params?: {check?: string};
}

interface ResponseLike {
  status(code: number): ResponseLike;
  json(data: unknown): void;
}

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

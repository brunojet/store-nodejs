// Health check types and shared logic
import { db } from '../database/index.js';

export type HealthCheckResponse = {
    status: 'ok' | 'error'; check: 'liveness' | 'readiness'; timestamp: string; pid: number;
    database?: string;
    error?: string;
};

export async function livenessCheck(): Promise<HealthCheckResponse> {
    // Apenas verifica se o processo está rodando
    return { status: 'ok', check: 'liveness', timestamp: new Date().toISOString(), pid: process.pid };
}

export async function readinessCheck(): Promise<HealthCheckResponse> {
    // Apenas verifica se o banco está conectado
    const result = await db.healthCheck();
    if (!result) {
        return Promise.reject(new Error('Banco de dados fora do ar'));
    }
    return {
        status: 'ok',
        check: 'readiness',
        timestamp: new Date().toISOString(),
        pid: process.pid,
        database: 'connected'
    };
}

export type MetricsCheckResponse = {
    status: 'ok'; check: 'metrics'; timestamp: string; pid: number; uptime: number;
    memory: { rss: number; heapTotal: number; heapUsed: number; external: number; heapUsedPercent: number; };
};

export async function metricsCheck(): Promise<MetricsCheckResponse> {
    const memUsage = process.memoryUsage();
    const uptime = process.uptime();
    return {
        status: 'ok',
        check: 'metrics',
        timestamp: new Date().toISOString(),
        pid: process.pid,
        uptime: Math.round(uptime),
        memory: {
            rss: Math.round(memUsage.rss / 1024 / 1024),
            heapTotal: Math.round(memUsage.heapTotal / 1024 / 1024),
            heapUsed: Math.round(memUsage.heapUsed / 1024 / 1024),
            external: Math.round(memUsage.external / 1024 / 1024),
            heapUsedPercent: Math.round((memUsage.heapUsed / memUsage.heapTotal) * 100)
        }
    };
}

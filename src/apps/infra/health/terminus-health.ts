import terminus from '@godaddy/terminus';
import type { Express } from 'express';
import type { Server } from 'http';
import { db } from '../../../libs/shared/database/index.js';

// Tipos para as respostas dos health checks
type HealthCheckResponse = {
    status: 'ok' | 'error';
    check: 'liveness' | 'readiness';
    timestamp: string;
    pid: number;
    database?: string;
    error?: string;
};

// Health check functions para Terminus, retornando JSON igual ao Express
async function livenessCheck(): Promise<HealthCheckResponse> {
    console.log('Liveness check called');
    // Apenas verifica se o processo está rodando
    return {
        status: 'ok',
        check: 'liveness',
        timestamp: new Date().toISOString(),
        pid: process.pid
    };
}

async function readinessCheck(): Promise<HealthCheckResponse> {
    console.log('Readiness check called');
    // Apenas verifica se o banco está conectado
    await db.healthCheck();
    return {
        status: 'ok',
        check: 'readiness',
        timestamp: new Date().toISOString(),
        pid: process.pid,
        database: 'connected'
    };
}

// Função para métricas do sistema
type MetricsCheckResponse = {
    status: 'ok';
    check: 'metrics';
    timestamp: string;
    pid: number;
    uptime: number;
    memory: {
        rss: number;
        heapTotal: number;
        heapUsed: number;
        external: number;
        heapUsedPercent: number;
    };
};

async function metricsCheck(): Promise<MetricsCheckResponse> {
    const memUsage = process.memoryUsage();
    const uptime = process.uptime();
    return {
        status: 'ok',
        check: 'metrics',
        timestamp: new Date().toISOString(),
        pid: process.pid,
        uptime: Math.round(uptime),
        memory: {
            rss: Math.round(memUsage.rss / 1024 / 1024),              // MB
            heapTotal: Math.round(memUsage.heapTotal / 1024 / 1024),  // MB
            heapUsed: Math.round(memUsage.heapUsed / 1024 / 1024),    // MB
            external: Math.round(memUsage.external / 1024 / 1024),    // MB
            heapUsedPercent: Math.round((memUsage.heapUsed / memUsage.heapTotal) * 100)
        }
    };
}

// Registrar rotas de health check no Express
export function setupHealthRoutes(app: Express): void {
    // Endpoint com métricas básicas do sistema (sem bibliotecas externas)
    app.get('/health/metrics', async (_req, res) => {
        const metrics = await metricsCheck();
        res.status(200).json(metrics);
    });
}


// healthChecks: usado pelo Terminus para readiness/liveness do orquestrador (ex: Kubernetes).
// Terminus assume o controle desses endpoints e responde diretamente.
// NÃO coloque endpoints customizados (como /health/metrics) aqui!
const healthChecks: Record<string, () => Promise<HealthCheckResponse>> = {
    '/health/live': async (): Promise<HealthCheckResponse> => {
        try {
            return await livenessCheck();
        } catch (error) {
            // Terminus espera erro para status 503
            throw {
                status: 'error',
                check: 'liveness',
                timestamp: new Date().toISOString(),
                pid: process.pid,
                error: error instanceof Error ? error.message : 'Unknown error'
            };
        }
    },
    '/health/ready': async (): Promise<HealthCheckResponse> => {
        try {
            return await readinessCheck();
        } catch (error) {
            throw {
                status: 'error',
                check: 'readiness',
                timestamp: new Date().toISOString(),
                pid: process.pid,
                error: error instanceof Error ? error.message : 'Unknown error',
                database: 'disconnected'
            };
        }
    }
};

export function setupHealthChecks(server: Server): void {
    terminus.createTerminus(server, {
        healthChecks,
        timeout: 5000,
        signals: ['SIGINT', 'SIGTERM'],
        beforeShutdown: (): Promise<void> => Promise.resolve(),
        onSignal: async (): Promise<void> => {
            console.log('Starting graceful shutdown...');
            await db.disconnect();
        },
        onShutdown: (): Promise<void> => Promise.resolve(console.log('Graceful shutdown completed')),
        logger: console.log,
        // Customiza a resposta do Terminus para retornar JSON igual ao Express
        // (Terminus já retorna o valor da Promise como JSON)
    });
}

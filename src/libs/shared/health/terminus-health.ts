

import terminus from '@godaddy/terminus';
import type { Express } from 'express';
import type { Server } from 'http';
import { livenessCheck, metricsCheck, readinessCheck, type HealthCheckResponse } from './health-checks.js';

const healthChecks: Record<string, () => Promise<HealthCheckResponse>> = {
    '/health/live': livenessCheck,
    '/health/ready': readinessCheck
};

export function setupHealthRoutes(app: Express): void {
    app.get('/health/metrics', async (_req, res) => {
        const metrics = await metricsCheck();
        res.status(200).json(metrics);
    });
}

export function setupHealthChecks(server: Server): void {
    terminus.createTerminus(server, {
        healthChecks: {
            ...healthChecks,
            __unsafeExposeStackTraces: true,
            unsafeExposeStackTraces: true,
            verbatim: true // Usa o objeto retornado verbatim na resposta
        },
        timeout: 5000,
        signals: ['SIGINT', 'SIGTERM'],
        beforeShutdown: (): Promise<void> => Promise.resolve(),
        onSignal: async (): Promise<void> => {
            // Se precisar de cleanup, adicione aqui
        },
        onShutdown: (): Promise<void> => Promise.resolve(console.log('Graceful shutdown completed')),
        logger: console.log
    });
}

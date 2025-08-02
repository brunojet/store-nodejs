import 'dotenv/config';

import cluster from 'cluster';
import os from 'os';

import {startServer} from './server.js';

// Configuração otimizada para Loja de Aplicativos POS (B2B)
const numCPUs = os.cpus().length;

// Características do workload:
// - Público restrito (desenvolvedores + empresas POS)
// - Múltiplas APIs: store-api, backoffice-api, public-api
// - I/O intensivo: uploads APK, consultas catálogo, integrações B2B
// - Picos moderados durante lançamentos de apps POS
// - Processamento de metadados de aplicativos

const multiplierEnv: string|undefined = process.env['WORKER_MULTIPLIER'];
const maxWorkersEnv: string|undefined = process.env['MAX_WORKERS'];

const multiplier = (multiplierEnv !== undefined && multiplierEnv !== '') ? parseInt(multiplierEnv, 10) : 2;
const maxWorkers = (maxWorkersEnv !== undefined && maxWorkersEnv !== '') ? parseInt(maxWorkersEnv, 10) : 12;
const numWorkers = numCPUs * multiplier;
const finalWorkerCount = Math.min(numWorkers, maxWorkers);

if (cluster.isPrimary) {
  console.log(`🏪 POS App Store - Primary process ${process.pid}`);
  console.log(`💻 CPU cores: ${numCPUs}`);
  console.log(`👥 Workers: ${finalWorkerCount} (optimized for B2B POS workload)`);
  console.log(`📱 Supporting: store-api | backoffice-api | public-api`);
  console.log(`🎯 Expected load: developers + POS companies (moderate concurrency)`);

  // Fork workers.
  for (let i = 0; i < finalWorkerCount; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, _, __) => {
    console.log(`🔄 Worker ${worker.process.pid} died. Spawning replacement...`);
    cluster.fork();
  });
} else {
  // Workers handle multiple API endpoints
  // store-api (POS Android + Web), backoffice-api (Admin), public-api (Marketplace)
  startServer();
  console.log(`🚀 Worker ${process.pid} ready with health checks`);
}

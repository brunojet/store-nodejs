import cluster from 'cluster';
import express from 'express';
import os from 'os';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

// Configuração de cluster baseada no ambiente
const USE_CLUSTER = process.env.USE_CLUSTER === 'true';
const IS_DEVELOPMENT = process.env.NODE_ENV !== 'production';

console.log(`🌍 Environment: ${IS_DEVELOPMENT ? 'DEVELOPMENT' : 'PRODUCTION'}`);
console.log(`⚙️  Cluster mode: ${USE_CLUSTER ? 'ENABLED' : 'DISABLED'}`);

// Função para iniciar a aplicação Express
function startApp() {
  const app = express();

  // Middleware para parsing JSON
  app.use(express.json());

  // Rota principal do monolito
  app.get('/', (req, res) => {
    res.send({
      message: 'Main App - Monolito Modular',
      worker: process.pid,
      environment: IS_DEVELOPMENT ? 'development' : 'production',
      cluster: USE_CLUSTER ? 'enabled' : 'disabled',
      modules: ['backoffice-api'],
      endpoints: {
        'backoffice': '/api/backoffice/*'
      }
    });
  });

  // Rota do backoffice
  app.get('/api/backoffice', (req, res) => {
    res.send({
      message: 'Hello from Backoffice API',
      service: 'backoffice-api',
      worker: process.pid
    });
  });

  app.get('/api/backoffice/users', (req, res) => {
    res.json({
      users: [
        { id: 1, name: 'Admin User', role: 'admin' },
        { id: 2, name: 'Manager User', role: 'manager' }
      ],
      worker: process.pid
    });
  });

  app.listen(port, host, () => {
    console.log(`🔥 ${USE_CLUSTER ? `Worker ${process.pid}` : 'Single process'} ready at http://${host}:${port}`);
  });
}

// Lógica de cluster (apenas se habilitado)
if (USE_CLUSTER && cluster.isPrimary) {
  const numCPUs = os.cpus().length;

  console.log(`🚀 Primary process ${process.pid} is running`);
  console.log(`🔥 Starting ${numCPUs} workers to use all CPU cores/threads`);

  // Fork workers para cada thread disponível
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker) => {
    console.log(`� Worker ${worker.process.pid} died. Restarting...`);
    cluster.fork();
  });

} else {
  // Modo single process ou worker
  startApp();
}

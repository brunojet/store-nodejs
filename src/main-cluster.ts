import cluster from 'cluster';
import os from 'os';

import {startServer} from './server.js';  // Adjust the import path as necessary

const numCPUs = os.cpus().length;

if (cluster.isPrimary) {
  console.log(`Primary process ${process.pid} is running`);
  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died. Spawning a new one...`);
    cluster.fork();
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  startServer();
}

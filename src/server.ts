import express from 'express';

export function startServer() {
  const app = express();
  const port = process.env.PORT || 3000;

  app.get('/', (req, res) => {
    res.send('Hello from worker ' + process.pid);
  });

  app.listen(port, () => {
    console.log(`Worker ${process.pid} started on port ${port}`);
  });
}

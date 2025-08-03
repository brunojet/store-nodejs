# Como Testar os Health Checks com Terminus

## 🚀 Iniciar o Servidor

```bash
npm run build
npm start
```

## 🧪 Testar Health Checks

### Liveness Check (Sempre OK)

```bash
curl http://localhost:3000/health/live
# ou no browser: http://localhost:3000/health/live
```

### Readiness Check (Verifica DB, Memória, Disco)

```bash
curl http://localhost:3000/health/ready
# ou no browser: http://localhost:3000/health/ready
```

### Rota Básica (Para verificar se servidor está rodando)

```bash
curl http://localhost:3000/
# ou no browser: http://localhost:3000/
```

## 📊 Verificar Logs

O terminus vai gerar logs no console quando:

- Health checks são chamados
- Graceful shutdown é iniciado
- Sistema é finalizado

## 🔧 Debug

Se os health checks não funcionarem:

1. Verificar se o servidor está rodando:

   ```bash
   curl http://localhost:3000/
   ```

2. Verificar logs do servidor no console
3. Verificar se não há conflito de portas
4. Verificar se o Prisma está conectado ao banco

## 🎯 Cluster Mode

Para testar em cluster mode:

```bash
npm run build
npm run start:cluster
```

Cada worker vai ter seus próprios health checks independentes.

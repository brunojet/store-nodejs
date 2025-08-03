# Migração: Health Check para @godaddy/terminus

## 📋 Plano de Migração

### Status Atual

- **Customizado**: HealthCheckManager, DatabaseHealthCheck, MemoryHealthCheck, DiskSpaceHealthCheck
- **Problemas**: Reinventando a roda, complexidade desnecessária, não cluster-aware

### Biblioteca Escolhida: @godaddy/terminus

- ✅ Battle-tested em produção
- ✅ Cluster-aware por design
- ✅ Graceful shutdown integrado
- ✅ Health checks padronizados
- ✅ Métricas automáticas

## 🎯 Implementação

### 1. Instalar dependência

```bash
npm install @godaddy/terminus
```

### 2. Migrar health checks

```typescript
// apps/infra/src/health/terminus-health.ts
import terminus from "@godaddy/terminus";
import { db } from "@shared/database";
import checkDiskSpace from "check-disk-space";
import os from "os";

// Health checks simples e diretos
const healthChecks = {
  "/health/live": () => Promise.resolve(),
  "/health/ready": async () => {
    // Database check
    await db.healthCheck();

    // Memory check
    const memUsage = process.memoryUsage();
    const memPercent = (memUsage.heapUsed / memUsage.heapTotal) * 100;
    if (memPercent > 90) throw new Error("Memory usage too high");

    // Disk check
    const drive = os.platform() === "win32" ? "C:\\" : "/";
    const diskInfo = await checkDiskSpace(drive);
    const freeMB = Math.round(diskInfo.free / 1024 / 1024);
    if (freeMB < 1024) throw new Error("Disk space too low");
  },
};

export function setupHealthChecks(server: any) {
  terminus.createTerminus(server, {
    healthChecks,
    timeout: 5000,
    signals: ["SIGINT", "SIGTERM"],
    beforeShutdown: () => Promise.resolve(),
    onSignal: async () => {
      console.log("Starting graceful shutdown...");
      await db.disconnect();
    },
    onShutdown: () => console.log("Graceful shutdown completed"),
  });
}
```

### 3. Integrar no servidor

```typescript
// apps/infra/src/server.ts
import express from "express";
import { setupHealthChecks } from "./health/terminus-health.js";

export function startServer() {
  const app = express();
  const server = app.listen(3000);

  // Setup health checks
  setupHealthChecks(server);

  console.log(
    "Server started with health checks on /health/live and /health/ready"
  );
  return server;
}
```

## 🗑️ Arquivos para Remover

### Chassis customizado (remover tudo)

- `src/libs/shared/health/HealthCheckManager.ts`
- `src/libs/shared/health/DatabaseHealthCheck.ts`
- `src/libs/shared/health/MemoryHealthCheck.ts`
- `src/libs/shared/health/DiskSpaceHealthCheck.ts`
- `src/libs/shared/health/ExternalServiceHealthCheck.ts`
- `src/libs/shared/health/endpoints.ts`
- `src/libs/shared/health/types.ts`
- `src/libs/shared/health/defaultManager.ts`
- `src/libs/shared/health/index.ts`
- `src/libs/shared/health/__tests__/*` (todos os testes)

### Router customizado (substituir)

- `src/apps/infra/health/health.route.ts` (substituir por terminus)

## 🎉 Benefícios da Migração

### Redução de Código

- **Antes**: ~800 linhas de código customizado
- **Depois**: ~50 linhas usando terminus
- **Redução**: 95% menos código para manter

### Cluster-Aware Automático

- Terminus gerencia health checks por worker automaticamente
- Graceful shutdown em todos os workers
- Não precisa coordenação manual entre workers

### Padrões de Mercado

- Health checks em `/health/live` (liveness) e `/health/ready` (readiness)
- Compatível com Kubernetes, Docker, load balancers
- Métricas automáticas de uptime/downtime

### Graceful Shutdown

- Drena conexões ativas antes de fechar
- Cleanup automático de recursos
- Sinalização correta para orquestradores

## 📝 Migration Checklist

- [x] Instalar @godaddy/terminus
- [x] Criar terminus-health.ts
- [x] Integrar no server.ts
- [x] Remover código customizado
- [x] Compilação sem erros
- [ ] Testar health checks
- [ ] Documentar novos endpoints
- [ ] Testar em cluster mode

## 🚀 Próximos Passos

1. **Implementar terminus** (esta tarefa)
2. **Migrar validation** para zod
3. **Migrar utils** para lodash
4. **Migrar logging** para pino
5. **Migrar config** para dotenv + env-var

---

_Esta é a primeira migração de uma série para substituir o chassis customizado por bibliotecas de mercado consolidadas._

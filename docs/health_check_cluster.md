# Observação sobre Health Check em Cluster Node.js

No Node.js, quando se utiliza o módulo `cluster` para rodar múltiplos workers (processos), cada worker é uma instância independente do Node.js. Isso significa que:

- Cada worker tem seu próprio heap, event loop e contexto de execução.
- O endpoint `/health` (ou qualquer outro endpoint) responde apenas pelo estado do worker que recebeu a requisição.
- O health check padrão (ex: DiskSpaceHealthCheck, Memory, DB, etc) reflete apenas o estado do processo corrente, não do cluster inteiro.

## Implicações

- Se um worker estiver com problema (ex: memória alta, disco cheio, DB down), mas outro não, o health endpoint só reporta o estado do worker que respondeu.
- Não existe, por padrão, um health check "global" do cluster inteiro.

## Como implementar um health check global (cluster-aware)

- O processo master pode coletar periodicamente o status de todos os workers via IPC (process.send/process.on).
- O endpoint `/health` pode ser exposto apenas no master, agregando o status de todos os workers.
- Alternativamente, cada worker pode armazenar seu status em um storage compartilhado (Redis, arquivo, etc), e o health endpoint lê de lá.

## Exemplo de cenário

- 4 workers rodando.
- 1 worker com problema de disco.
- Se a requisição cair nesse worker, o health reporta o problema. Se cair em outro, reporta "ok".

## Recomendações

- Para ambientes críticos, implemente health check cluster-aware.
- Documente para o time de DevOps/SRE que o health padrão é por worker.

---

_Este documento foi gerado automaticamente para esclarecer o comportamento do health check em ambientes Node.js cluster._

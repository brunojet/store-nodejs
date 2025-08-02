# TODO - Análise dos Módulos do Chassis

## Proposta: Health Check Cluster-Aware

Em ambiente cluster (Node.js), cada worker deve executar seu health check periodicamente (ex: a cada 10s) e alimentar um storage global (ex: Redis, banco, arquivo compartilhado) com seu status.

O endpoint `/health` global pode então ler o status de todos os workers/nós e fornecer uma visão consolidada do sistema.

Vantagens:
- Health check reflete o estado real do cluster, não só do worker corrente.
- Permite monitoramento proativo e decisões de orquestração mais seguras.

Sugestão: Implementar como middleware opcional, configurável por ambiente.

## 📋 Status Atual do Chassis

Data: 02/08/2025  
Contexto: Sistema de Publicação de Aplicativos (App Store)  
Modelagem: Baseada em schema Prisma com entidades de aplicativos, versões e catálogo

---

## ✅ MÓDULOS QUE VAMOS USAR COM CERTEZA

### 1. **types/** - ✅ SANITIZADO

**Status**: Pronto para uso  
**Justificativa**: Base fundamental para todo o sistema  
**Conteúdo atual**:

- `BaseEntity` (criadoEm, atualizadoEm, criadoPor, atualizadoPor)
- `AuditMetadata` para log de auditoria
- `ApiResponse`, `ApiError`, `ApiResponseMeta`
- `EstagioCatalogo` (REVIEW, PILOTO, PRODUCAO)
- `AcaoAuditoria` (CREATE, UPDATE, DELETE, etc.)
- `ValidationError`, `ValidationResult`
- `Result<T, E>`, `PaginationFilter`, `SortFilter`

### 2. **database/** - ✅ ESSENCIAL

**Status**: Mantido  
**Justificativa**: Conexão e operações com PostgreSQL via Prisma  
**Uso**: Toda operação de persistência depende deste módulo

### 3. **validation/** - ✅ SANITIZADO

**Status**: Pronto, com CNPJ corrigido  
**Justificativa**: Validação de dados brasileiros (CPF, CNPJ, telefone, CEP)  
**Conteúdo atual**:

- `ValidationBuilder` para cadeia de validações
- `CommonValidators` com validadores brasileiros
- `SchemaValidator` para validação de objetos
- CNPJ alfanumérico (2026+) implementado corretamente

### 4. **utils/** - ✅ SANITIZADO

**Status**: Pronto, removidos tipos desnecessários  
**Justificativa**: Funções utilitárias essenciais para qualquer aplicação  
**Conteúdo atual**:

- Result helpers (success, failure, isSuccess, isFailure)
- Object utilities (deepClone, deepMerge, pick, omit)
- Array utilities (unique, groupBy, chunk)
- String utilities (camelCase, snakeCase, slugify)
- Date utilities, Async utilities, Environment utilities

### 5. **errors/** - ✅ MANTIDO

**Status**: Necessário  
**Justificativa**: Tratamento consistente de erros da aplicação  
**Uso**: AppError, ValidationError, NotFoundError, etc.

### 6. **observability/** - ✅ NOVO MÓDULO

**Status**: Implementado  
**Justificativa**: Instrumentação para métricas e logs (não health check)  
**Conteúdo**:

- `StructuredLogger` para logs estruturados
- `MetricsCollector` para métricas de performance
- `DistributedTracer` para traces
- Decorators `@Instrument` e `@LogMethod`
- Singleton `Observability` para configuração

---

## 🤔 MÓDULOS EM ANÁLISE

### 7. **core/** - 📊 REVISAR

**Status**: Muito genérico para nosso domínio  
**Justificativa**: Implementa DDD complexo (AggregateRoot, Specifications, etc.)  
**Análise**:

- ✅ Mantido: `BaseEvent`, `DomainEvent` (movidos para cá)
- ❓ Avaliar: AggregateRoot, ValueObject, Specification pattern
- ❓ Avaliar: Repository interfaces muito genéricas
- **Decisão pendente**: Simplificar ou manter para crescimento futuro?

### 8. **middleware/** - 📊 REVISAR

**Status**: Pode ser útil para Express/Fastify  
**Justificativa**: Interceptors, CORS, rate limiting  
**Análise**:

- ✅ Útil se implementarmos API REST
- ❓ Avaliar complexidade vs necessidade
- **Decisão pendente**: Depende da arquitetura de API escolhida

### 9. **security/** - 📊 REVISAR

**Status**: Encryption, JWT, hashing  
**Justificativa**: Pode ser necessário para autenticação  
**Análise**:

- ❓ Avaliar se vamos implementar auth interno
- ❓ Pode ser responsabilidade de outro sistema
- **Decisão pendente**: Definir responsabilidades de segurança

### 10. **events/** - 📊 REVISAR

**Status**: Sistema de eventos/messaging  
**Justificativa**: Útil para comunicação entre módulos  
**Análise**:

- ✅ Pode ser útil para publicação de aplicativos
- ❓ Avaliar se precisamos de complexidade de EventBus
- **Decisão pendente**: Event-driven vs request-response

---

## ❌ MÓDULOS QUE PODEMOS REMOVER

### 11. **health/** - ❌ QUESTIONÁVEL

**Status**: Endpoint de health check  
**Justificativa**: Pode estar fora do escopo (responsabilidade de outro sistema)  
**Análise**:

- ❌ Pode invadir responsabilidade de monitoramento externo
- ✅ Mas foi pedido para manter por enquanto
- **Decisão**: Manter até definição de arquitetura

### 12. **config/** - ❓ AVALIAR

**Status**: Gerenciamento de configurações  
**Justificativa**: Pode ser simples demais ou complexo demais  
**Análise**:

- ❓ process.env pode ser suficiente
- ❓ Ou precisamos de config management complexo
- **Decisão pendente**: Avaliar necessidade vs simplicidade

### 13. **constants/** - ❓ AVALIAR

**Status**: Constantes da aplicação  
**Justificativa**: Pode ser útil mas precisa ser específico do domínio  
**Análise**:

- ❓ Verificar se são constantes genéricas ou específicas
- **Decisão pendente**: Revisar conteúdo

---

## 🎯 PRÓXIMOS PASSOS PRIORITÁRIOS

### Fase 1 - Definições Arquiteturais

1. **Definir arquitetura da API** (REST vs GraphQL vs tRPC)
2. **Definir responsabilidades de autenticação** (interno vs externo)
3. **Definir estratégia de events** (síncrono vs assíncrono)
4. **Definir responsabilidades de monitoramento** (interno vs externo)

### Fase 2 - Limpeza dos Módulos

1. **core/**: Simplificar removendo DDD complexo desnecessário
2. **middleware/**: Manter apenas o que for usado pela API escolhida
3. **security/**: Remover se auth for externo
4. **events/**: Simplificar se não precisar de event-driven
5. **config/**: Simplificar ou remover se process.env for suficiente
6. **constants/**: Mover para domínio específico

### Fase 3 - Implementação do Domínio

1. Implementar entidades baseadas no schema Prisma
2. Implementar casos de uso de publicação de aplicativos
3. Implementar API endpoints
4. Implementar validações específicas do domínio
5. Implementar instrumentação/observabilidade

---

## 🚀 RECOMENDAÇÕES

### Princípio YAGNI (You Aren't Gonna Need It)

- **Remover**: Tudo que não tem uso claro e imediato
- **Simplificar**: Módulos genéricos demais para nosso domínio específico
- **Focar**: Na funcionalidade core de publicação de aplicativos

### Princípio de Responsabilidade Única

- **Observability**: Instrumentação interna (✅)
- **Health Check**: Pode ser responsabilidade externa (❓)
- **Security**: Pode ser responsabilidade externa (❓)
- **Config**: Pode ser simples process.env (❓)

### Alinhamento com Modelagem Prisma

- **Focar** nas entidades reais: Aplicativo, VersaoAplicativo, CatalogoAplicativo
- **Implementar** workflows de publicação
- **Evitar** abstrações que não agregam valor ao domínio

---

## 🔄 ESTRATÉGIA REVISADA: Feature-First + Chassis Evolutivo

### 🚨 Problema Identificado

Estamos implementando **bottom-up** (chassis → features) quando deveríamos ser **top-down** (features → chassis).

### 💡 Nova Abordagem: Hybrid Development

#### Fase 1: MVP com Chassis Mínimo (1-2 semanas)

**Objetivo**: Implementar 1 feature completa para validar padrões reais

1. **Chassis mínimo**:

   - ✅ `types/` (já pronto)
   - ✅ `database/` (já pronto)
   - ✅ `validation/` (já pronto)
   - ✅ `utils/` (já pronto)
   - ✅ `errors/` (básico)
   - ❌ Ignorar resto temporariamente

2. **Feature piloto**: "Listar Aplicativos no Catálogo"
   - Controller simples (sem middleware complexo)
   - Service direto (sem DDD complexo)
   - Repository Prisma direto (sem abstrações)
   - Validação simples (sem schemas complexos)
   - Response direto (sem transformations complexas)

#### Fase 2: Extração de Padrões (1 semana)

**Objetivo**: Identificar padrões reais que emergiram

1. **Analisar código real**:

   - Que abstrações realmente ajudaram?
   - Que patterns se repetiram?
   - Onde sentimos falta de algo do chassis?

2. **Refatorar chassis baseado no real**:
   - Extrair patterns que surgiram naturalmente
   - Remover módulos que não foram usados
   - Simplificar o que foi over-engineered

#### Fase 3: Crescimento Incremental

**Objetivo**: Expandir chassis conforme necessidade real

1. **Nova feature** → **Novos patterns** → **Evolução do chassis**
2. **Regra**: Só adicionar ao chassis quando aparecer 3x no código

### 🎯 Feature Piloto Sugerida: "Listar Aplicativos"

```typescript
// apps/api/src/routes/aplicativos.ts
app.get("/aplicativos", async (req, res) => {
  // Controller direto, sem middleware complexo
  const { page = 1, limit = 10 } = req.query;

  // Service direto, sem DDD
  const aplicativos = await prisma.catalogoAplicativo.findMany({
    where: { tipoEstagio: "PRODUCAO" },
    include: { versaoAplicativo: true },
    skip: (page - 1) * limit,
    take: limit,
  });

  // Response direto, sem transformations
  res.json({ success: true, data: aplicativos });
});
```

**Benefícios**:

- ✅ Entrega rápida
- ✅ Aprendizado real sobre o domínio
- ✅ Validação de padrões com uso real
- ✅ Chassis evolui organicamente

### 🧪 Experimento: 2 Semanas de Feature-First

**Semana 1**: Implementar 2-3 endpoints básicos  
**Semana 2**: Refatorar chassis baseado no que realmente usamos

**Hipótese**: Vamos descobrir que 70% do chassis atual é desnecessário e 30% que está faltando.

---

## 📝 NOTAS TÉCNICAS

- **TypeScript Strict Mode**: ✅ Todos os módulos mantidos estão compliant
- **Prisma Schema**: ✅ Types alinhados com modelagem
- **CNPJ Validation**: ✅ Algoritmo 2026+ implementado corretamente
- **Observability**: ✅ Decorators prontos para instrumentação
- **Conflicts**: ✅ Resolvidos (LogLevel, measureTime, etc.)

---

_Documento vivo - atualizar conforme decisões arquiteturais_

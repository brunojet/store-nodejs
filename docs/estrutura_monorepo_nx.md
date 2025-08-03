# Estrutura Sugerida de Monorepo Nx para Store Node.js

Esta estrutura visa garantir modularidade, isolamento de domínios e facilidade de evolução/extração de microsserviços no futuro. Cada domínio é um módulo Nx (app ou lib), com um pacote compartilhado para repositórios, utilitários e contratos comuns.

```
store-nodejs/
│
├── src/
│   ├── apps/
│   │   ├── store-api/              # Módulo Nx: API da loja (POS Android e loja web logada)
│   │   │   ├── controllers/        # Controllers/handlers HTTP
│   │   │   ├── services/           # Serviços de aplicação
│   │   │   ├── domain/             # Lógica de domínio específica do app
│   │   │   └── ...
│   │   ├── backoffice-api/         # Módulo Nx: API do backoffice/admin
│   │   │   ├── controllers/
│   │   │   ├── services/
│   │   │   ├── domain/
│   │   │   └── ...
│   │   ├── public-api/             # Módulo Nx: API pública (marketplace, parceiros, etc)
│   │   │   ├── controllers/
│   │   │   ├── services/
│   │   │   ├── domain/
│   │   │   └── ...
│   │   ├── infra/
│   │   │   └── health/             # Endpoints e lógica de infraestrutura (ex: health check)
│   │   └── ... (outros apps)
│   │
│   ├── libs/
│   │   ├── shared/
│   │   │   └── repository/         # Contratos e implementações de repositórios compartilhados
│   │   └── infra/
│   │       ├── database/           # Abstrações, clients e adapters para bancos, cache, filas, etc (ex: Prisma, Redis, Kafka)
│   │       ├── auth/               # Autenticação, autorização
│   │       ├── errors/             # Erros comuns e tratamento
│   │       ├── observability/      # Logs estruturados, métricas, tracing
│   │       └── utils/              # Funções utilitárias
│   │
│   ├── tools/                      # Scripts, geradores, automações Nx
│   └── prisma/                     # Schema global, seeds, migrations
│
├── package.json
├── nx.json
├── tsconfig.base.json
└── ...
```

## Configuração do Prisma Client no Nx

Para garantir que o Prisma gere o client no local esperado pelo Nx, configure o bloco generator no seu `schema.prisma` assim:

```prisma
generator client {
  provider = "prisma-client-js"
  output   = "./src/libs/shared/prisma/generated"
}
```

Assim, o Prisma Client ficará disponível para todos os apps/libs via importação centralizada.

## Princípios

- **Modularização por feature/app:** Cada app (ex: store-api, backoffice-api, public-api) é um módulo Nx independente, com controller, serviço e domínio próprios.
- **Domínios isolados:** Cada contexto de negócio tem seu próprio domínio, podendo evoluir e ser extraído de forma independente.
- **Shared centralizado:** Tudo que é comum (repositórios, DTOs, autenticação, erros, observabilidade, helpers de infra) fica em `libs/shared`.
- **Repositórios compartilhados:** Contratos e implementações de repositórios ficam em `shared/repository`, facilitando troca de ORM ou extração para microsserviço.
- **Infraestrutura compartilhada:** Middlewares, helpers, adapters e utilitários sem regra de negócio ficam em `shared/infra`.
- **Evolução independente:** Apps e libs podem ser testados, versionados e escalados separadamente.
- **Pronto para extração:** Qualquer domínio pode ser "fatiado" para um microsserviço no futuro, sem grandes refatorações.

## Exemplo de dependências e consumidores

- `apps/store-api` depende de seu domínio (`libs/domain-store`), de repositórios e helpers compartilhados (`libs/shared/repository`, `libs/shared/infra`), autenticação, DTOs, etc.
  - **Consumidores:** POS Android (aplicativo de frente de caixa), Loja Web (área logada do cliente)
- `apps/backoffice-api` depende de seu domínio (`libs/domain-backoffice`), de repositórios e helpers compartilhados, autenticação, etc.
  - **Consumidores:** Frontend do backoffice/admin (gestão, relatórios, etc)
- `apps/public-api` depende de seu domínio (`libs/domain-marketplace`), de repositórios e helpers compartilhados, etc.
  - **Consumidores:** Vitrine (área não logada, web), parceiros, integrações públicas
- `libs/domain-store` pode depender de DTOs, utils e helpers de infra compartilhados.
  - **Responsável por:** Regras de negócio da loja (venda, catálogo, carrinho, etc), usadas tanto pelo POS quanto pela loja web
- `libs/domain-backoffice` lida com regras administrativas, gestão, relatórios, etc.
- `libs/domain-marketplace` lida com lógica de marketplace, exibição pública, integrações externas.

## Observações

- Recomenda-se criar um módulo `libs/shared/observability` para centralizar logs estruturados, métricas e tracing, facilitando padronização e integração com ferramentas externas.
- O Nx permite lint, build, test e deploy por app/lib, com cache e pipelines otimizados.
- O Prisma pode ser compartilhado ou "fatiado" por domínio, conforme a evolução.
- Novos domínios ou apps podem ser adicionados facilmente, mantendo a organização.
- **Infraestrutura desacoplada:** Endpoints como health check, métricas e readiness devem ficar em `apps/infra/health` (ou subpastas), mantendo apps de domínio focados apenas em regras de negócio.
- **Helpers e middlewares de infra** (ex: logging, validação, adapters, middlewares genéricos) devem ser centralizados em `libs/shared/infra` para evitar duplicidade e facilitar manutenção.

---

Esta estrutura garante governança, escalabilidade e flexibilidade para o crescimento do projeto.

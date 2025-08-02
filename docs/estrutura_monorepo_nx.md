# Estrutura Sugerida de Monorepo Nx para Store Node.js

Esta estrutura visa garantir modularidade, isolamento de domínios e facilidade de evolução/extração de microsserviços no futuro. Cada domínio é um módulo Nx (app ou lib), com um pacote compartilhado para repositórios, utilitários e contratos comuns.

```
store-nodejs/
│
├── src/
│   ├── apps/
│   │   ├── store-api/              # API da loja (POS Android e loja web logada)
│   │   ├── backoffice-api/         # API do backoffice/admin
│   │   ├── public-api/             # API pública (marketplace, parceiros, etc)
│   │   └── ... (outros apps)
│   │
│   ├── libs/
│   │   ├── shared/
│   │   │   ├── repository/         # Contratos, implementações e utilitários de repositórios
│   │   │   ├── prisma/             # Schema, client e helpers do Prisma ORM
│   │   │   │   └── generated/      # Prisma Client gerado automaticamente
│   │   │   ├── auth/               # Autenticação, autorização, middlewares
│   │   │   ├── dto/                # DTOs, validadores, mapeamentos
│   │   │   ├── errors/             # Erros comuns e tratamento
│   │   │   ├── observability/      # Logs estruturados, métricas, tracing (observabilidade)
│   │   │   └── utils/              # Funções utilitárias, helpers
│   │   ├── domain-store/           # Lógica de domínio da loja (POS e web logada)
│   │   ├── domain-backoffice/      # Lógica de domínio do backoffice/admin
│   │   ├── domain-marketplace/     # Lógica de domínio do marketplace
│   │   └── ... (outros domínios)
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
- **Isolamento de domínios:** Cada contexto de negócio (POS, backoffice, marketplace) tem seu próprio módulo.
- **Shared centralizado:** Tudo que é comum (repositórios, DTOs, autenticação, erros, observabilidade) fica em `libs/shared`.
- **Repositórios desacoplados:** Contratos e implementações de repositórios ficam em `shared/repository`, facilitando troca de ORM ou extração para microsserviço.
- **Evolução independente:** Apps e libs podem ser testados, versionados e escalados separadamente.
- **Pronto para extração:** Qualquer domínio pode ser "fatiado" para um microsserviço no futuro, sem grandes refatorações.


## Exemplo de dependências e consumidores
- `apps/store-api` depende de `libs/domain-store`, `libs/shared/repository`, `libs/shared/auth`, etc.
  - **Consumidores:** POS Android (aplicativo de frente de caixa), Loja Web (área logada do cliente)
- `apps/backoffice-api` depende de `libs/domain-backoffice`, `libs/shared/repository`, `libs/shared/auth`, etc.
  - **Consumidores:** Frontend do backoffice/admin (gestão, relatórios, etc)
- `apps/public-api` depende de `libs/domain-marketplace`, `libs/shared/repository`, etc.
  - **Consumidores:** Vitrine (área não logada, web), parceiros, integrações públicas
- `libs/domain-store` pode depender de `libs/shared/dto`, `libs/shared/utils`, etc.
  - **Responsável por:** Regras de negócio da loja (venda, catálogo, carrinho, etc), usadas tanto pelo POS quanto pela loja web
- `libs/domain-backoffice` lida com regras administrativas, gestão, relatórios, etc.
- `libs/domain-marketplace` lida com lógica de marketplace, exibição pública, integrações externas.

## Observações
- Recomenda-se criar um módulo `libs/shared/observability` para centralizar logs estruturados, métricas e tracing, facilitando padronização e integração com ferramentas externas.
- O Nx permite lint, build, test e deploy por app/lib, com cache e pipelines otimizados.
- O Prisma pode ser compartilhado ou "fatiado" por domínio, conforme a evolução.
- Novos domínios ou apps podem ser adicionados facilmente, mantendo a organização.

---

Esta estrutura garante governança, escalabilidade e flexibilidade para o crescimento do projeto.

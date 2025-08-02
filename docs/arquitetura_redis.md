```mermaid
graph TD
    subgraph Usuário/Terminal
        A[Cliente/Terminal POS]
    end
    subgraph Backend Node.js
        B[API Node.js/Express]
        C[Prisma ORM]
        D[Redis Client]
    end
    subgraph Banco de Dados
        E[(PostgreSQL)]
        F[(Redis)]
    end

    A-->|HTTP Request|B
    B-->|Consulta Cache|D
    D-->|Busca Cache|F
    D-->|Cache Miss|C
    C-->|Consulta SQL|E
    C-->|Resultado|D
    D-->|Cache Hit|B
    D-->|Cache Miss|B
    B-->|HTTP Response|A
    style F fill:#f9f,stroke:#333,stroke-width:2px
    style E fill:#bbf,stroke:#333,stroke-width:2px
```

# Arquitetura com Redis (Mermaid)

- O terminal faz requisições para a API Node.js.
- A API consulta primeiro o Redis (cache) para dados frequentes (ex: lista de apps).
- Se não encontrar no cache (cache miss), consulta o PostgreSQL via Prisma.
- O resultado do banco é salvo no Redis para próximas requisições.
- O Redis acelera leituras e reduz carga do banco.

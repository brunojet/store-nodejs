```mermaid
graph TD
    subgraph Pod
        A[Node.js App container]
        B[Redis container]
    end
    subgraph Externo
        C[(PostgreSQL)]
        D[Usuário/Terminal]
    end

    D-->|HTTP Request|A
    A-->|Consulta/Gravação|B
    A-->|Consulta/Gravação|C
    A-->|HTTP Response|D

    style A fill:#bbf,stroke:#333,stroke-width:2px
    style B fill:#f9f,stroke:#333,stroke-width:2px
    style C fill:#ccc,stroke:#333,stroke-width:2px
    style D fill:#fff,stroke:#333,stroke-width:2px
```

# Arquitetura de containers no Pod

- O Pod terá dois containers principais: Node.js App e Redis.
- O Node.js App se conecta ao Redis (cache) e ao PostgreSQL (banco principal).
- O usuário/terminal acessa apenas o Node.js App.
- O Redis acelera leituras e reduz carga do banco.

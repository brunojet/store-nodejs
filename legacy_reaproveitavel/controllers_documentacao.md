# Documentação dos Controllers

Este arquivo lista e documenta os controllers do projeto original, para facilitar reuso e migração para o novo projeto TypeScript.

## Controllers disponíveis
- cadastroAplicativoController
- detalheAplicativoController
- suporteParceiroController
- configuracaoAplicativoController
- versaoAplicativoController
- catalogoAplicativoController
- imagemController
- terminalModeloController

## Endpoints por controller

### cadastroAplicativoController
- POST   `/api/cadastro-aplicativo`         - Cria um novo cadastro de aplicativo
- GET    `/api/cadastro-aplicativo`         - Lista todos os cadastros de aplicativo
- GET    `/api/cadastro-aplicativo/:id`     - Busca cadastro de aplicativo por ID
- PUT    `/api/cadastro-aplicativo/:id`     - Atualiza cadastro de aplicativo por ID
- DELETE `/api/cadastro-aplicativo/:id`     - Remove cadastro de aplicativo por ID

### detalheAplicativoController
- POST   `/api/detalhe-aplicativo`          - Cria detalhe de aplicativo (upload de arquivos)
- GET    `/api/detalhe-aplicativo`          - Lista todos os detalhes de aplicativo
- GET    `/api/detalhe-aplicativo/:id`      - Busca detalhe de aplicativo por ID
- PUT    `/api/detalhe-aplicativo/:id`      - Atualiza detalhe de aplicativo
- DELETE `/api/detalhe-aplicativo/:id`      - Remove detalhe de aplicativo

### suporteParceiroController
- POST   `/api/suporte-parceiro`            - Cria suporte de parceiro
- GET    `/api/suporte-parceiro`            - Lista todos os suportes de parceiro
- GET    `/api/suporte-parceiro/:id`        - Busca suporte de parceiro por ID
- PUT    `/api/suporte-parceiro/:id`        - Atualiza suporte de parceiro
- DELETE `/api/suporte-parceiro/:id`        - Remove suporte de parceiro

### configuracaoAplicativoController
- POST   `/api/configuracao-aplicativo`     - Cria configuração de aplicativo
- GET    `/api/configuracao-aplicativo`     - Lista todas as configurações
- GET    `/api/configuracao-aplicativo/:id` - Busca configuração por ID
- PUT    `/api/configuracao-aplicativo/:id` - Atualiza configuração
- DELETE `/api/configuracao-aplicativo/:id` - Remove configuração

### versaoAplicativoController
- POST   `/api/versao-aplicativo`            - Cria versão de aplicativo (upload de arquivo)
- GET    `/api/versao-aplicativo`            - Lista todas as versões
- GET    `/api/versao-aplicativo/:id`        - Busca versão por ID
- PUT    `/api/versao-aplicativo/:id`        - Atualiza versão
- DELETE `/api/versao-aplicativo/:id`        - Remove versão

### catalogoAplicativoController
- POST   `/api/catalogo-aplicativo`          - Cria catálogo de aplicativo
- GET    `/api/catalogo-aplicativo`          - Lista todos os catálogos
- GET    `/api/catalogo-aplicativo/:id`      - Busca catálogo por ID
- PUT    `/api/catalogo-aplicativo/:id`      - Atualiza catálogo
- DELETE `/api/catalogo-aplicativo/:id`      - Remove catálogo

### terminalModeloController
- POST   `/api/terminal-modelo`              - Cria modelo de terminal
- GET    `/api/terminal-modelo`              - Lista todos os modelos
- GET    `/api/terminal-modelo/:id`          - Busca modelo por ID
- PUT    `/api/terminal-modelo/:id`          - Atualiza modelo
- DELETE `/api/terminal-modelo/:id`          - Remove modelo

### imagemController
- GET    `/api/imagem/:id`                   - Busca imagem por ID

## Observações
- Todos os endpoints seguem padrão REST.
- Uploads usam o middleware Multer.
- Para detalhes de implementação, consulte os arquivos originais na pasta `src/controllers`.

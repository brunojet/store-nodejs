# Documentação dos Services e Repositories

Este arquivo lista e documenta os services e repositories do projeto original, para facilitar reuso e migração para o novo projeto TypeScript.

## Services disponíveis
- CadastroAplicativoService
- DetalheAplicativoService
- SuporteParceiroService
- ConfiguracaoAplicativoService
- VersaoAplicativoService
- CatalogoAplicativoService
- ImagemService
- TerminalModeloService

## Repositories disponíveis
- CadastroAplicativoRepository
- DetalheAplicativoRepository
- SuporteParceiroRepository
- ConfiguracaoAplicativoRepository
- VersaoAplicativoRepository
- CatalogoAplicativoRepository
- ImagemRepository
- TerminalModeloRepository

## Observações
- Services implementam regras de negócio e validações.
- Repositories fazem acesso direto ao banco via Prisma.
- Para detalhes de implementação, consulte os arquivos originais na pasta `src/services` e `src/repositories`.
- As interfaces e tipos foram baseados na modelagem Prisma do projeto.

## Sugestão de uso
- Reaproveite as regras de negócio e queries para acelerar o desenvolvimento do novo projeto TypeScript.
- Adapte as interfaces para o padrão TypeScript puro, se necessário.

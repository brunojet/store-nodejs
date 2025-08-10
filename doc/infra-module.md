# Módulo Infra

Este módulo é destinado à infraestrutura da aplicação, contendo integrações, provedores, utilitários e implementações técnicas que não pertencem diretamente ao domínio de negócio.

## Estrutura

```
src/libs/infra/
```


## Como criar o módulo com Nx

Execute o comando abaixo para gerar a biblioteca infra com Nx:


```
 npx nx generate @nx/node:library infra --directory=libs --importPath=@infra --compiler=tsc --unitTestRunner=jest --linter=eslint
```

Este comando cria a estrutura recomendada e já configura o projeto para uso com Nx.

## Recomendações
- Coloque aqui integrações com bancos, caches, provedores externos, utilitários técnicos, etc.
- Não misture código de domínio ou aplicação neste módulo.
- Documente cada subpasta/utilitário conforme necessário.

---

Se precisar de exemplos de arquivos ou estrutura interna, só pedir!

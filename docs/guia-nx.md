npm install -g nx
npx create-nx-workspace@latest
cd nome-do-workspace
npx nx generate @nx/node:application backoffice --directory=src/apps
npx nx generate @nx/node:library shared --directory=src/libs --importPath=@shared
npx nx build backoffice
npx nx build shared

# Guia de Criação do Projeto Nx

Este documento lista os comandos utilizados para criar o monorepo Nx, o app backoffice e a lib shared, além dos parâmetros relevantes.

## 1. Criar o workspace Nx

```sh
npx create-nx-workspace@latest nome-do-projeto --preset=ts --packageManager=npm --nxCloud=false
```

## 2. Criar o app backoffice

```sh
npx nx generate @nx/node:app backoffice --directory=src/apps/backoffice
```

## 3. Criar a lib shared

```sh
npx nx generate @nx/node:lib shared --directory=src/libs/shared --importPath=@shared
```
O parâmetro `--importPath=@shared` permite usar o alias `@shared` nas importações.

## 4. Instalar dependências úteis

```sh
npm install express @types/express
npm install --save-dev clang-format
```

## 5. Configurações recomendadas

- Adicionar "type": "module" no package.json
- Configurar paths e references nos tsconfig
- Ignorar prisma/generated e dist no lint (eslint.config.mjs)
- Adicionar launcher de debug em .vscode/launch.json
- Adicionar script lint no package.json

## 6. Scripts úteis

```json
"scripts": {
	"start": "nx serve backoffice",
	"lint": "nx lint",
	"clang": "node scripts/clang-all.js"
}
```

## 7. Ignorar arquivos no lint

No arquivo `eslint.config.mjs`:
```js
{
	ignores: ['**/dist', '**/prisma/generated'],
}
```

## 8. Debug

Use o launcher "Debug Nx Backoffice" no VS Code para debugar o app.

---

Este guia pode ser adaptado conforme novas libs/apps forem criados.

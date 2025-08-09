# Guia para Criação de Projeto Modular com Nx

## 1. Instalar Nx CLI (opcional)
```
npm install -g nx
```

## 2. Criar o workspace Nx
```
npx create-nx-workspace@latest
```
Siga as instruções para nomear o workspace e escolher o layout (geralmente "apps").

## 3. Entrar na pasta do workspace
```
cd nome-do-workspace
```

## 4. Criar um app Node.js chamado backoffice
```
npx nx generate @nx/node:application backoffice --directory=src/apps
```

## 5. Criar uma lib chamada shared com alias @shared
```
npx nx generate @nx/node:library shared --directory=src/libs --importPath=@shared
```

## 6. Build dos projetos
```
npx nx build backoffice
npx nx build shared
```

---

Se quiser o documento em outro formato ou com mais detalhes, só avisar!

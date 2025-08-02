# TypeScript Strict Configuration Guide

## Overview

Este projeto está configurado com as configurações mais rigorosas do TypeScript para garantir máxima segurança de tipos e qualidade de código.

## Configurações TypeScript Ativadas

### tsconfig.json - Verificações Rigorosas

- **strict**: true - Ativa todas as verificações strict
- **noImplicitAny**: true - Proíbe tipos `any` implícitos
- **strictNullChecks**: true - Verificação rigorosa de null/undefined
- **strictFunctionTypes**: true - Verificação rigorosa de tipos de função
- **strictBindCallApply**: true - Verificação rigorosa de bind/call/apply
- **strictPropertyInitialization**: true - Propriedades devem ser inicializadas
- **noImplicitThis**: true - Contexto `this` deve ser explícito
- **alwaysStrict**: true - Sempre usar modo strict
- **noUncheckedIndexedAccess**: true - Verificação segura de acesso por índice
- **exactOptionalPropertyTypes**: true - Propriedades opcionais exatas
- **noImplicitReturns**: true - Todas as rotas devem retornar valor
- **noUnusedLocals**: true - Variáveis locais não utilizadas geram erro
- **noUnusedParameters**: true - Parâmetros não utilizados geram erro
- **noFallthroughCasesInSwitch**: true - Switch cases devem ter break
- **noPropertyAccessFromIndexSignature**: true - Acesso seguro a propriedades
- **allowUnusedLabels**: false - Labels não utilizados geram erro
- **allowUnreachableCode**: false - Código inalcançável gera erro

### ESLint - Regras TypeScript Rigorosas

- **@typescript-eslint/no-explicit-any**: error - Proíbe uso explícito de `any`
- **@typescript-eslint/no-unsafe-\***: error - Proíbe operações unsafe
- **@typescript-eslint/explicit-function-return-type**: error - Tipos de retorno explícitos
- **@typescript-eslint/explicit-module-boundary-types**: error - Tipos explícitos em boundaries
- **@typescript-eslint/strict-boolean-expressions**: error - Expressões booleanas rigorosas
- **@typescript-eslint/switch-exhaustiveness-check**: error - Switch exhaustivos

## Scripts Disponíveis

### Verificação de Tipos

```bash
npm run typecheck          # Verificação única de tipos
npm run typecheck:watch    # Verificação contínua de tipos
```

### Linting

```bash
npm run lint               # Executar ESLint
npm run lint:fix           # Executar ESLint com correções automáticas
```

### Formatação

```bash
npm run clang              # Executar clang-format
```

### Verificação Completa

```bash
npm run check-all          # Executa todos os checks (types + lint + format)
```

## Git Hooks Automáticos

### Pre-commit Hook

O projeto está configurado com um pre-commit hook que executa automaticamente:

1. Verificação de tipos TypeScript
2. Linting com ESLint
3. Formatação com clang-format

Para configurar os hooks:

```bash
# Windows
scripts\setup-hooks.bat

# Unix/Linux/macOS
bash scripts/setup-hooks.sh
```

## CI/CD Pipeline

O pipeline de CI/CD executa as seguintes verificações:

1. **TypeScript Type Check** - Verificação rigorosa de tipos
2. **ESLint Check** - Linting com regras strictas
3. **Code Formatting Check** - Verificação de formatação
4. **Build** - Compilação TypeScript

## VS Code Configuration

### Configurações Automáticas (.vscode/settings.json)

- Format on save ativado
- ESLint fix on save
- Organize imports on save
- TypeScript strict checks ativados

### Extensões Recomendadas (.vscode/extensions.json)

- TypeScript e JavaScript Language Features
- ESLint
- Prettier
- Jest
- Prisma

## Boas Práticas

### 1. Tipos Explícitos

```typescript
// ❌ Evitar
function processData(data: any): any {
  return data.map((item) => item.value);
}

// ✅ Preferir
function processData(data: DataItem[]): ProcessedValue[] {
  return data.map((item: DataItem): ProcessedValue => item.value);
}
```

### 2. Null Safety

```typescript
// ❌ Evitar
function getName(user: User): string {
  return user.name; // Pode ser undefined
}

// ✅ Preferir
function getName(user: User): string {
  return user.name ?? "Unknown";
}
```

### 3. Type Guards

```typescript
// ✅ Usar type guards
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function processValue(value: unknown): string {
  if (isString(value)) {
    return value.toUpperCase(); // TypeScript sabe que é string
  }
  throw new Error("Value must be a string");
}
```

### 4. Discriminated Unions

```typescript
// ✅ Usar discriminated unions para type safety
type Result<T> = { success: true; data: T } | { success: false; error: string };

function handleResult<T>(result: Result<T>): void {
  if (result.success) {
    console.log(result.data); // TypeScript sabe que data existe
  } else {
    console.error(result.error); // TypeScript sabe que error existe
  }
}
```

## Resolvendo Erros Comuns

### 1. "Property might not exist"

```typescript
// ❌ Erro
const value = obj[key]; // Error: Property might not exist

// ✅ Soluções
const value = obj[key] ?? defaultValue;
// ou
const value = key in obj ? obj[key] : defaultValue;
// ou
const value = obj[key as keyof typeof obj];
```

### 2. "Parameter implicitly has 'any' type"

```typescript
// ❌ Erro
function process(items) { // Error: Parameter implicitly has 'any' type

// ✅ Solução
function process(items: Item[]): ProcessedItem[] {
```

### 3. "Function lacks return type"

```typescript
// ❌ Erro
function calculate(a: number, b: number) { // Error: Missing return type

// ✅ Solução
function calculate(a: number, b: number): number {
```

## Comandos de Desenvolvimento

### Desenvolvimento Local

```bash
npm run typecheck:watch   # Verificação contínua de tipos
npm run test:watch        # Testes em modo watch
npm run dev               # Servidor de desenvolvimento
```

### Antes de Commit

```bash
npm run check-all         # Verificar tudo antes de commitar
```

### Debugging de Tipos

```bash
# Para debug detalhado de tipos TypeScript
npx tsc --noEmit --listFiles --extendedDiagnostics
```

## Benefícios

1. **Segurança de Tipos**: Captura erros em tempo de compilação
2. **Melhor IntelliSense**: Autocomplete mais preciso
3. **Refatoração Segura**: Mudanças são verificadas automaticamente
4. **Documentação Viva**: Tipos servem como documentação
5. **Menos Bugs**: Redução significativa de erros em runtime
6. **Melhor Experiência de Desenvolvimento**: Feedback imediato sobre problemas

## Troubleshooting

### Se o TypeScript reclamar demais

1. Verifique se todas as dependências estão tipadas
2. Use type assertions apenas quando necessário: `value as Type`
3. Considere usar `// @ts-expect-error` para casos excepcionais
4. Nunca use `// @ts-ignore` - sempre prefira `// @ts-expect-error`

### Performance

Se a verificação de tipos estiver lenta:

1. Use `skipLibCheck: true` no tsconfig.json (já configurado)
2. Exclua node_modules das verificações
3. Use project references para projetos grandes

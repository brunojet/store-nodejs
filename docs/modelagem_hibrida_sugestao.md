# Modelagem Híbrida: VersaoAplicativo (FK + Snapshot Parcial)

## Estratégia
- Usar FKs para entidades estáveis (TerminalModelo, TipoIntegracao, etc.)
- Snapshot apenas dos campos voláteis (nome, descrição, contato, imagens) em colunas ou JSON

---

```prisma
model VersaoAplicativo {
  id                   Int                @id @default(autoincrement())
  configuracaoId       Int
  configuracao         ConfiguracaoAplicativo @relation(fields: [configuracaoId], references: [id])
  changelog           String
  pacoteMdm           String
  versaoMdm           String
  tamanho             String
  avaliacao           Float
  // Snapshot dos campos voláteis
  nomeAppSnapshot      String             // Nome do app no momento da publicação
  descricaoSnapshot   String             // Descrição do app
  contatoSnapshot     Json               // Contato de suporte (nome, email, telefone)
  imagensSnapshot     Json               // Lista de imagens/vitrine
  // ...outros campos relevantes
  createdAt           DateTime           @default(now())
}
```

- O catálogo pode referenciar apenas as versões ativas.
- Se necessário, pode-se expandir o snapshot para outros campos.

---

## Vantagens
- Menos duplicidade: só o que muda é copiado.
- Histórico fiel: alterações futuras não afetam versões antigas.
- Menos tabelas auxiliares.

---

Se quiser adaptar para outros modelos, basta seguir o mesmo padrão: FK para o que é estável, snapshot para o que é volátil.

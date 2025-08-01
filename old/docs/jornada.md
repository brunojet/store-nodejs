# 🧩 Portal Dev – Jornada de Cadastro e Certificação de Aplicativos

## 🧭 Visão Geral da Jornada

1. **Cadastro do Aplicativo**
2. **Configuração Técnica**
   - Escolha de modelos de POS
   - Tipo de integração (ADQ ou TEF)
3. **Dados de Contato**
   - Selecionar da lista ou criar novo
4. **Detalhes do Aplicativo (Vitrine)**
   - Descrição, imagens (selecionar ou cadastrar)
5. **Metadados Técnicos**
   - Package name, versão, tamanho, ícone
6. **Submissão para Certificação**
7. **Publicação na Loja (após aprovação)**

---

## 🖥️ Estrutura da Interface

### 🔷 1. Dashboard Inicial

- Visão geral dos apps cadastrados
- Status de cada app (rascunho, em certificação, aprovado, publicado)
- Botão “Cadastrar Novo App”

---

### 📋 2. Wizard de Cadastro (Interface em Etapas)

| Etapa | Conteúdo | Componentes |
|-------|----------|-------------|
| **1. Informações Básicas** | Nome do app, categoria, descrição inicial | Inputs, dropdowns |
| **2. Configuração Técnica** | Escolha de POS, tipo de integração | Cards clicáveis, checkboxes |
| **3. Contatos** | Selecionar ou criar contato | Lista com busca, botão “Novo Contato” |
| **4. Vitrine** | Descrição detalhada, imagens | Editor de texto, galeria, upload |
| **5. Metadados Técnicos** | Package name, versão, tamanho, ícone | Inputs, upload de ícone |
| **6. Revisão & Submissão** | Resumo de tudo + botão “Submeter para Certificação” | Cards de resumo, botão de ação |

---

### 🧩 3. Tela de Gerenciamento de Apps

- Lista com filtros (por status, nome, data)
- Ações rápidas: editar, duplicar, excluir, visualizar
- Indicadores de progresso (ex: “Etapa 3 de 6 concluída”)

---

### 🛠️ 4. Tela de Contatos

- Lista de contatos com busca e filtros
- Botão “Novo Contato”
- Formulário com nome, e-mail, telefone, cargo

---

### 🖼️ 5. Tela de Imagens/Vitrine

- Galeria com imagens já cadastradas
- Botão “Nova Imagem”
- Preview de como ficará na loja

---

### ✅ 6. Tela de Certificação

- Status da certificação
- Histórico de submissões
- Feedback técnico (caso reprovado)
- Botão “Reenviar após correção”

---

## 🎨 Estilo Visual

- Design limpo e profissional
- Cores de status: verde (aprovado), amarelo (pendente), vermelho (reprovado)
- Componentes reutilizáveis: cards, modais, tooltips explicativos
- Responsivo: adaptado para desktop e mobile

---

## 🔧 Tecnologias Sugeridas

- **Front-end**: React + Material UI ou Tailwind CSS
- **Back-end**: Node.js + Express ou .NET Core
- **Banco de dados**: PostgreSQL ou MongoDB
- **Autenticação**: OAuth2, JWT
- **Armazenamento de imagens**: AWS S3 ou Azure Blob Storage
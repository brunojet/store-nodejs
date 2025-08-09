-- CreateEnum
CREATE TYPE "store_nodejs"."EstagioCatalogo" AS ENUM ('REVIEW', 'PILOTO', 'PRODUCAO');

-- CreateEnum
CREATE TYPE "store_nodejs"."StatusAppImage" AS ENUM ('PENDENTE_UPLOAD', 'UPLOAD_OK', 'ERRO');

-- CreateEnum
CREATE TYPE "store_nodejs"."StatusCadastroAplicativo" AS ENUM ('DRAFT', 'PENDENTE_UPLOAD', 'REVISAR', 'ATIVADO', 'ERRO');

-- CreateTable
CREATE TABLE "store_nodejs"."log_auditoria" (
    "id" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,
    "criado_por" TEXT NOT NULL,
    "atualizado_por" TEXT NOT NULL,
    "entidade" TEXT NOT NULL,
    "entidade_id" TEXT,
    "acao" TEXT NOT NULL,
    "campo" TEXT,
    "valor_antes" TEXT,
    "valor_depois" TEXT,
    "usuario_id" TEXT,
    "usuario_nome" TEXT,
    "ip" TEXT,
    "contexto" TEXT,

    CONSTRAINT "log_auditoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_nodejs"."terminal_modelo" (
    "id" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,
    "criado_por" TEXT NOT NULL,
    "atualizado_por" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "terminal_modelo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_nodejs"."tipo_integracao" (
    "id" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,
    "criado_por" TEXT NOT NULL,
    "atualizado_por" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "tipo_integracao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_nodejs"."tipo_classificacao" (
    "id" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,
    "criado_por" TEXT NOT NULL,
    "atualizado_por" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "tipo_classificacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_nodejs"."categoria" (
    "id" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,
    "criado_por" TEXT NOT NULL,
    "atualizado_por" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo_classificacao_id" TEXT NOT NULL,
    "pai_id" TEXT,

    CONSTRAINT "categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_nodejs"."categoria_aplicativo_vinculo" (
    "id" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,
    "criado_por" TEXT NOT NULL,
    "atualizado_por" TEXT NOT NULL,
    "aplicativo_id" TEXT NOT NULL,
    "categoria_aplicativo_id" TEXT NOT NULL,

    CONSTRAINT "categoria_aplicativo_vinculo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_nodejs"."anexo" (
    "id" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,
    "criado_por" TEXT NOT NULL,
    "atualizado_por" TEXT NOT NULL,
    "file_path" TEXT NOT NULL,
    "tipo_mime" TEXT,
    "tamanho" INTEGER,
    "md5" TEXT,
    "arquivo_existe" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "anexo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_nodejs"."imagem_aplicativo" (
    "id" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,
    "criado_por" TEXT NOT NULL,
    "atualizado_por" TEXT NOT NULL,
    "status" "store_nodejs"."StatusAppImage" NOT NULL DEFAULT 'PENDENTE_UPLOAD',
    "anexo_id" TEXT NOT NULL,

    CONSTRAINT "imagem_aplicativo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_nodejs"."aplicativo" (
    "id" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,
    "criado_por" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "atualizado_por" TEXT NOT NULL,
    "codigo_parceiro" TEXT NOT NULL,
    "codigo_produto" TEXT NOT NULL,
    "contato_nome" TEXT,
    "contato_email" TEXT,
    "contato_telefone" TEXT,
    "contato_descricao" TEXT,

    CONSTRAINT "aplicativo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_nodejs"."imagem_cadastro_aplicativo_vinculo" (
    "id" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,
    "criado_por" TEXT NOT NULL,
    "atualizado_por" TEXT NOT NULL,
    "imagem_aplicativo_id" TEXT NOT NULL,
    "cadastro_aplicativo_id" TEXT NOT NULL,

    CONSTRAINT "imagem_cadastro_aplicativo_vinculo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_nodejs"."cadastro_aplicativo_historico" (
    "id" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,
    "criado_por" TEXT NOT NULL,
    "atualizado_por" TEXT NOT NULL,
    "status" "store_nodejs"."StatusCadastroAplicativo" NOT NULL DEFAULT 'DRAFT',
    "aplicativo_id" TEXT NOT NULL,
    "detalhe_descricao" TEXT NOT NULL,

    CONSTRAINT "cadastro_aplicativo_historico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_nodejs"."configuracao_aplicativo" (
    "id" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,
    "criado_por" TEXT NOT NULL,
    "atualizado_por" TEXT NOT NULL,
    "nome_pacote_app" TEXT NOT NULL,
    "tipo_integracao_id" TEXT NOT NULL,
    "terminal_modelo_id" TEXT NOT NULL,
    "aplicativo_id" TEXT NOT NULL,

    CONSTRAINT "configuracao_aplicativo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_nodejs"."configuracao_cadastro_aplicativo_vinculo" (
    "id" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,
    "criado_por" TEXT NOT NULL,
    "atualizado_por" TEXT NOT NULL,
    "cadastro_aplicativo_id" TEXT NOT NULL,
    "configuracao_aplicativo_id" TEXT NOT NULL,

    CONSTRAINT "configuracao_cadastro_aplicativo_vinculo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_nodejs"."versao_aplicativo" (
    "id" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,
    "criado_por" TEXT NOT NULL,
    "atualizado_por" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "icone_id" TEXT NOT NULL,
    "versao" TEXT NOT NULL,
    "changelog" TEXT NOT NULL,
    "tamanho" TEXT NOT NULL,
    "configuracao_aplicativo_id" TEXT NOT NULL,
    "cadastro_aplicativo_id" TEXT NOT NULL,
    "pacote_mdm" TEXT NOT NULL,
    "versao_mdm" TEXT NOT NULL,

    CONSTRAINT "versao_aplicativo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_nodejs"."catalogo_aplicativo" (
    "id" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,
    "criado_por" TEXT NOT NULL,
    "atualizado_por" TEXT NOT NULL,
    "aplicativo_id" TEXT NOT NULL,
    "tipo_integracao_id" TEXT NOT NULL,
    "terminal_modelo_id" TEXT NOT NULL,
    "tipo_estagio" "store_nodejs"."EstagioCatalogo" NOT NULL DEFAULT 'REVIEW',
    "versao_aplicativo_id" TEXT NOT NULL,

    CONSTRAINT "catalogo_aplicativo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "log_auditoria_entidade_entidade_id_acao_idx" ON "store_nodejs"."log_auditoria"("entidade", "entidade_id", "acao");

-- CreateIndex
CREATE UNIQUE INDEX "tipo_integracao_nome_key" ON "store_nodejs"."tipo_integracao"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "tipo_classificacao_nome_key" ON "store_nodejs"."tipo_classificacao"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "categoria_nome_key" ON "store_nodejs"."categoria"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "categoria_aplicativo_vinculo_aplicativo_id_categoria_aplica_key" ON "store_nodejs"."categoria_aplicativo_vinculo"("aplicativo_id", "categoria_aplicativo_id");

-- CreateIndex
CREATE UNIQUE INDEX "imagem_aplicativo_anexo_id_key" ON "store_nodejs"."imagem_aplicativo"("anexo_id");

-- CreateIndex
CREATE UNIQUE INDEX "aplicativo_codigo_parceiro_key" ON "store_nodejs"."aplicativo"("codigo_parceiro");

-- CreateIndex
CREATE INDEX "aplicativo_codigo_parceiro_idx" ON "store_nodejs"."aplicativo"("codigo_parceiro");

-- CreateIndex
CREATE INDEX "aplicativo_contato_email_idx" ON "store_nodejs"."aplicativo"("contato_email");

-- CreateIndex
CREATE UNIQUE INDEX "imagem_cadastro_aplicativo_vinculo_imagem_aplicativo_id_cad_key" ON "store_nodejs"."imagem_cadastro_aplicativo_vinculo"("imagem_aplicativo_id", "cadastro_aplicativo_id");

-- CreateIndex
CREATE INDEX "cadastro_aplicativo_historico_aplicativo_id_idx" ON "store_nodejs"."cadastro_aplicativo_historico"("aplicativo_id");

-- CreateIndex
CREATE INDEX "cadastro_aplicativo_historico_status_idx" ON "store_nodejs"."cadastro_aplicativo_historico"("status");

-- CreateIndex
CREATE UNIQUE INDEX "configuracao_aplicativo_nome_pacote_app_tipo_integracao_id__key" ON "store_nodejs"."configuracao_aplicativo"("nome_pacote_app", "tipo_integracao_id", "terminal_modelo_id", "aplicativo_id");

-- CreateIndex
CREATE INDEX "catalogo_aplicativo_tipo_estagio_tipo_integracao_id_termina_idx" ON "store_nodejs"."catalogo_aplicativo"("tipo_estagio", "tipo_integracao_id", "terminal_modelo_id");

-- CreateIndex
CREATE INDEX "catalogo_aplicativo_aplicativo_id_tipo_integracao_id_termin_idx" ON "store_nodejs"."catalogo_aplicativo"("aplicativo_id", "tipo_integracao_id", "terminal_modelo_id");

-- CreateIndex
CREATE UNIQUE INDEX "catalogo_aplicativo_tipo_estagio_aplicativo_id_tipo_integra_key" ON "store_nodejs"."catalogo_aplicativo"("tipo_estagio", "aplicativo_id", "tipo_integracao_id", "terminal_modelo_id");

-- AddForeignKey
ALTER TABLE "store_nodejs"."categoria" ADD CONSTRAINT "categoria_tipo_classificacao_id_fkey" FOREIGN KEY ("tipo_classificacao_id") REFERENCES "store_nodejs"."tipo_classificacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."categoria" ADD CONSTRAINT "categoria_pai_id_fkey" FOREIGN KEY ("pai_id") REFERENCES "store_nodejs"."categoria"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."categoria_aplicativo_vinculo" ADD CONSTRAINT "categoria_aplicativo_vinculo_aplicativo_id_fkey" FOREIGN KEY ("aplicativo_id") REFERENCES "store_nodejs"."aplicativo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."categoria_aplicativo_vinculo" ADD CONSTRAINT "categoria_aplicativo_vinculo_categoria_aplicativo_id_fkey" FOREIGN KEY ("categoria_aplicativo_id") REFERENCES "store_nodejs"."categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."imagem_aplicativo" ADD CONSTRAINT "imagem_aplicativo_anexo_id_fkey" FOREIGN KEY ("anexo_id") REFERENCES "store_nodejs"."anexo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."imagem_cadastro_aplicativo_vinculo" ADD CONSTRAINT "imagem_cadastro_aplicativo_vinculo_imagem_aplicativo_id_fkey" FOREIGN KEY ("imagem_aplicativo_id") REFERENCES "store_nodejs"."imagem_aplicativo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."imagem_cadastro_aplicativo_vinculo" ADD CONSTRAINT "imagem_cadastro_aplicativo_vinculo_cadastro_aplicativo_id_fkey" FOREIGN KEY ("cadastro_aplicativo_id") REFERENCES "store_nodejs"."cadastro_aplicativo_historico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."cadastro_aplicativo_historico" ADD CONSTRAINT "cadastro_aplicativo_historico_aplicativo_id_fkey" FOREIGN KEY ("aplicativo_id") REFERENCES "store_nodejs"."aplicativo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."configuracao_aplicativo" ADD CONSTRAINT "configuracao_aplicativo_tipo_integracao_id_fkey" FOREIGN KEY ("tipo_integracao_id") REFERENCES "store_nodejs"."tipo_integracao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."configuracao_aplicativo" ADD CONSTRAINT "configuracao_aplicativo_terminal_modelo_id_fkey" FOREIGN KEY ("terminal_modelo_id") REFERENCES "store_nodejs"."terminal_modelo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."configuracao_aplicativo" ADD CONSTRAINT "configuracao_aplicativo_aplicativo_id_fkey" FOREIGN KEY ("aplicativo_id") REFERENCES "store_nodejs"."aplicativo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."configuracao_cadastro_aplicativo_vinculo" ADD CONSTRAINT "configuracao_cadastro_aplicativo_vinculo_cadastro_aplicati_fkey" FOREIGN KEY ("cadastro_aplicativo_id") REFERENCES "store_nodejs"."cadastro_aplicativo_historico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."configuracao_cadastro_aplicativo_vinculo" ADD CONSTRAINT "configuracao_cadastro_aplicativo_vinculo_configuracao_apli_fkey" FOREIGN KEY ("configuracao_aplicativo_id") REFERENCES "store_nodejs"."configuracao_aplicativo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."versao_aplicativo" ADD CONSTRAINT "versao_aplicativo_icone_id_fkey" FOREIGN KEY ("icone_id") REFERENCES "store_nodejs"."imagem_aplicativo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."versao_aplicativo" ADD CONSTRAINT "versao_aplicativo_configuracao_aplicativo_id_fkey" FOREIGN KEY ("configuracao_aplicativo_id") REFERENCES "store_nodejs"."configuracao_aplicativo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."versao_aplicativo" ADD CONSTRAINT "versao_aplicativo_cadastro_aplicativo_id_fkey" FOREIGN KEY ("cadastro_aplicativo_id") REFERENCES "store_nodejs"."cadastro_aplicativo_historico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."catalogo_aplicativo" ADD CONSTRAINT "catalogo_aplicativo_aplicativo_id_fkey" FOREIGN KEY ("aplicativo_id") REFERENCES "store_nodejs"."aplicativo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."catalogo_aplicativo" ADD CONSTRAINT "catalogo_aplicativo_tipo_integracao_id_fkey" FOREIGN KEY ("tipo_integracao_id") REFERENCES "store_nodejs"."tipo_integracao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."catalogo_aplicativo" ADD CONSTRAINT "catalogo_aplicativo_terminal_modelo_id_fkey" FOREIGN KEY ("terminal_modelo_id") REFERENCES "store_nodejs"."terminal_modelo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."catalogo_aplicativo" ADD CONSTRAINT "catalogo_aplicativo_versao_aplicativo_id_fkey" FOREIGN KEY ("versao_aplicativo_id") REFERENCES "store_nodejs"."versao_aplicativo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

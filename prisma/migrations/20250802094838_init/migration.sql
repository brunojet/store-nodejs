-- CreateEnum
CREATE TYPE "store_nodejs"."EstagioCatalogo" AS ENUM ('REVIEW', 'PILOTO', 'PRODUCAO');

-- CreateTable
CREATE TABLE "store_nodejs"."auditoria_catalogo" (
    "id" SERIAL NOT NULL,
    "tabela" TEXT NOT NULL,
    "entidade_id" INTEGER NOT NULL,
    "campo" TEXT NOT NULL,
    "valor_anterior" TEXT,
    "valor_novo" TEXT,
    "usuario" TEXT NOT NULL,
    "motivo" TEXT,
    "data_alteracao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "auditoria_catalogo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_nodejs"."terminal_modelo" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "terminal_modelo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_nodejs"."tipo_integracao" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "tipo_integracao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_nodejs"."anexo" (
    "id" SERIAL NOT NULL,
    "file_path" TEXT NOT NULL,

    CONSTRAINT "anexo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_nodejs"."app_image" (
    "id" SERIAL NOT NULL,
    "anexo_id" INTEGER NOT NULL,
    "detalhes_aplicativo_id" INTEGER,

    CONSTRAINT "app_image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_nodejs"."detalhe_aplicativo" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "detalhe_aplicativo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_nodejs"."aplicativo" (
    "id" SERIAL NOT NULL,
    "codigo_parceiro" TEXT NOT NULL,
    "codigo_produto" TEXT NOT NULL,
    "contato_parceiro_id" INTEGER,

    CONSTRAINT "aplicativo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_nodejs"."contato_parceiro_historico" (
    "id" SERIAL NOT NULL,
    "codigo_parceiro" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,

    CONSTRAINT "contato_parceiro_historico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_nodejs"."cadastro_aplicativo" (
    "id" SERIAL NOT NULL,
    "aplicativo_id" INTEGER NOT NULL,
    "detalhes_aplicativo_id" INTEGER NOT NULL,

    CONSTRAINT "cadastro_aplicativo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_nodejs"."configuracao_aplicativo" (
    "id" SERIAL NOT NULL,
    "nome_pacote_app" TEXT NOT NULL,
    "tipo_integracao_id" INTEGER NOT NULL,
    "terminal_modelo_id" INTEGER NOT NULL,
    "aplicativo_id" INTEGER NOT NULL,

    CONSTRAINT "configuracao_aplicativo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_nodejs"."versao_aplicativo" (
    "id" SERIAL NOT NULL,
    "icone_id" INTEGER NOT NULL,
    "versao" TEXT NOT NULL,
    "changelog" TEXT NOT NULL,
    "tamanho" TEXT NOT NULL,
    "avaliacao" DOUBLE PRECISION NOT NULL,
    "cadastro_aplicativo_id" INTEGER NOT NULL,
    "pacote_mdm" TEXT NOT NULL,
    "versao_mdm" TEXT NOT NULL,

    CONSTRAINT "versao_aplicativo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_nodejs"."catalogo_aplicativo" (
    "id" SERIAL NOT NULL,
    "tipo_estagio" "store_nodejs"."EstagioCatalogo" NOT NULL DEFAULT 'REVIEW',
    "terminal_modelo_id" INTEGER NOT NULL,
    "tipo_integracao_id" INTEGER NOT NULL,
    "versao_aplicativo_id" INTEGER NOT NULL,

    CONSTRAINT "catalogo_aplicativo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tipo_integracao_nome_key" ON "store_nodejs"."tipo_integracao"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "aplicativo_codigo_parceiro_key" ON "store_nodejs"."aplicativo"("codigo_parceiro");

-- CreateIndex
CREATE INDEX "aplicativo_codigo_parceiro_idx" ON "store_nodejs"."aplicativo"("codigo_parceiro");

-- CreateIndex
CREATE INDEX "cadastro_aplicativo_aplicativo_id_idx" ON "store_nodejs"."cadastro_aplicativo"("aplicativo_id");

-- CreateIndex
CREATE INDEX "catalogo_aplicativo_tipo_estagio_tipo_integracao_id_termina_idx" ON "store_nodejs"."catalogo_aplicativo"("tipo_estagio", "tipo_integracao_id", "terminal_modelo_id");

-- CreateIndex
CREATE INDEX "catalogo_aplicativo_versao_aplicativo_id_idx" ON "store_nodejs"."catalogo_aplicativo"("versao_aplicativo_id");

-- AddForeignKey
ALTER TABLE "store_nodejs"."app_image" ADD CONSTRAINT "app_image_anexo_id_fkey" FOREIGN KEY ("anexo_id") REFERENCES "store_nodejs"."anexo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."app_image" ADD CONSTRAINT "app_image_detalhes_aplicativo_id_fkey" FOREIGN KEY ("detalhes_aplicativo_id") REFERENCES "store_nodejs"."detalhe_aplicativo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."aplicativo" ADD CONSTRAINT "aplicativo_contato_parceiro_id_fkey" FOREIGN KEY ("contato_parceiro_id") REFERENCES "store_nodejs"."contato_parceiro_historico"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."cadastro_aplicativo" ADD CONSTRAINT "cadastro_aplicativo_aplicativo_id_fkey" FOREIGN KEY ("aplicativo_id") REFERENCES "store_nodejs"."aplicativo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."cadastro_aplicativo" ADD CONSTRAINT "cadastro_aplicativo_detalhes_aplicativo_id_fkey" FOREIGN KEY ("detalhes_aplicativo_id") REFERENCES "store_nodejs"."detalhe_aplicativo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."configuracao_aplicativo" ADD CONSTRAINT "configuracao_aplicativo_tipo_integracao_id_fkey" FOREIGN KEY ("tipo_integracao_id") REFERENCES "store_nodejs"."tipo_integracao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."configuracao_aplicativo" ADD CONSTRAINT "configuracao_aplicativo_terminal_modelo_id_fkey" FOREIGN KEY ("terminal_modelo_id") REFERENCES "store_nodejs"."terminal_modelo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."configuracao_aplicativo" ADD CONSTRAINT "configuracao_aplicativo_aplicativo_id_fkey" FOREIGN KEY ("aplicativo_id") REFERENCES "store_nodejs"."aplicativo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."versao_aplicativo" ADD CONSTRAINT "versao_aplicativo_icone_id_fkey" FOREIGN KEY ("icone_id") REFERENCES "store_nodejs"."app_image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."versao_aplicativo" ADD CONSTRAINT "versao_aplicativo_cadastro_aplicativo_id_fkey" FOREIGN KEY ("cadastro_aplicativo_id") REFERENCES "store_nodejs"."cadastro_aplicativo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."catalogo_aplicativo" ADD CONSTRAINT "catalogo_aplicativo_terminal_modelo_id_fkey" FOREIGN KEY ("terminal_modelo_id") REFERENCES "store_nodejs"."terminal_modelo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."catalogo_aplicativo" ADD CONSTRAINT "catalogo_aplicativo_tipo_integracao_id_fkey" FOREIGN KEY ("tipo_integracao_id") REFERENCES "store_nodejs"."tipo_integracao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."catalogo_aplicativo" ADD CONSTRAINT "catalogo_aplicativo_versao_aplicativo_id_fkey" FOREIGN KEY ("versao_aplicativo_id") REFERENCES "store_nodejs"."versao_aplicativo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

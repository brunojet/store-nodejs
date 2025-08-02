/*
  Warnings:

  - You are about to drop the `Aplicativo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AppCadastro` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AppDetalhes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AppImage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AppVersao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Attachment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GrupoContato` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Parceiro` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TerminalModelo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "store_nodejs"."Aplicativo" DROP CONSTRAINT "Aplicativo_aplicativo_cadastro_id_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."Aplicativo" DROP CONSTRAINT "Aplicativo_aplicativo_versao_id_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."AppCadastro" DROP CONSTRAINT "AppCadastro_app_detalhes_id_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."AppCadastro" DROP CONSTRAINT "AppCadastro_grupo_contato_id_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."AppCadastro" DROP CONSTRAINT "AppCadastro_parceiro_id_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."AppCadastro" DROP CONSTRAINT "AppCadastro_terminal_modelo_id_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."AppImage" DROP CONSTRAINT "AppImage_app_detalhes_id_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."AppImage" DROP CONSTRAINT "AppImage_attachment_id_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."AppVersao" DROP CONSTRAINT "AppVersao_icon_id_fkey";

-- DropTable
DROP TABLE "store_nodejs"."Aplicativo";

-- DropTable
DROP TABLE "store_nodejs"."AppCadastro";

-- DropTable
DROP TABLE "store_nodejs"."AppDetalhes";

-- DropTable
DROP TABLE "store_nodejs"."AppImage";

-- DropTable
DROP TABLE "store_nodejs"."AppVersao";

-- DropTable
DROP TABLE "store_nodejs"."Attachment";

-- DropTable
DROP TABLE "store_nodejs"."GrupoContato";

-- DropTable
DROP TABLE "store_nodejs"."Parceiro";

-- DropTable
DROP TABLE "store_nodejs"."TerminalModelo";

-- CreateTable
CREATE TABLE "store_nodejs"."terminal_modelo" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "terminal_modelo_pkey" PRIMARY KEY ("id")
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
    "app_detalhe_id" INTEGER,

    CONSTRAINT "app_image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_nodejs"."suporte_parceiro" (
    "id" SERIAL NOT NULL,
    "codigo_parceiro" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,

    CONSTRAINT "suporte_parceiro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_nodejs"."detalhe_aplicativo" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "detalhe_aplicativo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_nodejs"."cadastro_aplicativo" (
    "id" SERIAL NOT NULL,
    "codigo_parceiro" TEXT NOT NULL,
    "codigo_produto" TEXT NOT NULL,
    "suporteParceiroId" INTEGER,
    "app_detalhes_id" INTEGER NOT NULL,

    CONSTRAINT "cadastro_aplicativo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_nodejs"."configuracao_aplicativo" (
    "id" SERIAL NOT NULL,
    "nome_pacote_app" TEXT NOT NULL,
    "tipo_integracao" "store_nodejs"."TipoIntegracao" NOT NULL,
    "terminal_modelo_id" INTEGER NOT NULL,
    "cadastroAplicativoId" INTEGER,

    CONSTRAINT "configuracao_aplicativo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_nodejs"."VersaoAplicativo" (
    "id" SERIAL NOT NULL,
    "icone_id" INTEGER NOT NULL,
    "versao" TEXT NOT NULL,
    "changelog" TEXT NOT NULL,
    "pacote_mdm" TEXT NOT NULL,
    "versao_mdm" TEXT NOT NULL,
    "tamanho" TEXT NOT NULL,
    "avaliacao" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "VersaoAplicativo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_nodejs"."catalogo_aplicativo" (
    "id" SERIAL NOT NULL,
    "aplicativo_cadastro_id" INTEGER NOT NULL,
    "aplicativo_versao_id" INTEGER NOT NULL,

    CONSTRAINT "catalogo_aplicativo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "store_nodejs"."app_image" ADD CONSTRAINT "app_image_anexo_id_fkey" FOREIGN KEY ("anexo_id") REFERENCES "store_nodejs"."anexo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."app_image" ADD CONSTRAINT "app_image_app_detalhe_id_fkey" FOREIGN KEY ("app_detalhe_id") REFERENCES "store_nodejs"."detalhe_aplicativo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."cadastro_aplicativo" ADD CONSTRAINT "cadastro_aplicativo_suporteParceiroId_fkey" FOREIGN KEY ("suporteParceiroId") REFERENCES "store_nodejs"."suporte_parceiro"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."cadastro_aplicativo" ADD CONSTRAINT "cadastro_aplicativo_app_detalhes_id_fkey" FOREIGN KEY ("app_detalhes_id") REFERENCES "store_nodejs"."detalhe_aplicativo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."configuracao_aplicativo" ADD CONSTRAINT "configuracao_aplicativo_terminal_modelo_id_fkey" FOREIGN KEY ("terminal_modelo_id") REFERENCES "store_nodejs"."terminal_modelo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."configuracao_aplicativo" ADD CONSTRAINT "configuracao_aplicativo_cadastroAplicativoId_fkey" FOREIGN KEY ("cadastroAplicativoId") REFERENCES "store_nodejs"."cadastro_aplicativo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."VersaoAplicativo" ADD CONSTRAINT "VersaoAplicativo_icone_id_fkey" FOREIGN KEY ("icone_id") REFERENCES "store_nodejs"."app_image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."catalogo_aplicativo" ADD CONSTRAINT "catalogo_aplicativo_aplicativo_cadastro_id_fkey" FOREIGN KEY ("aplicativo_cadastro_id") REFERENCES "store_nodejs"."configuracao_aplicativo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."catalogo_aplicativo" ADD CONSTRAINT "catalogo_aplicativo_aplicativo_versao_id_fkey" FOREIGN KEY ("aplicativo_versao_id") REFERENCES "store_nodejs"."VersaoAplicativo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

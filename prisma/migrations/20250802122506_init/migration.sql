/*
  Warnings:

  - Added the required column `updatedAt` to the `anexo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `aplicativo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `app_image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `cadastro_aplicativo_historico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `catalogo_aplicativo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `categoria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `categoria_aplicativo_vinculo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `configuracao_aplicativo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `contato_parceiro_historico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `detalhe_aplicativo_historico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `terminal_modelo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `tipo_classificacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `tipo_integracao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `versao_aplicativo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "store_nodejs"."anexo" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "createdBy" INTEGER,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedBy" INTEGER;

-- AlterTable
ALTER TABLE "store_nodejs"."aplicativo" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "createdBy" INTEGER,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedBy" INTEGER;

-- AlterTable
ALTER TABLE "store_nodejs"."app_image" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "createdBy" INTEGER,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedBy" INTEGER;

-- AlterTable
ALTER TABLE "store_nodejs"."cadastro_aplicativo_historico" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "createdBy" INTEGER,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedBy" INTEGER;

-- AlterTable
ALTER TABLE "store_nodejs"."catalogo_aplicativo" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "createdBy" INTEGER,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedBy" INTEGER;

-- AlterTable
ALTER TABLE "store_nodejs"."categoria" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "createdBy" INTEGER,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedBy" INTEGER;

-- AlterTable
ALTER TABLE "store_nodejs"."categoria_aplicativo_vinculo" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "createdBy" INTEGER,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedBy" INTEGER;

-- AlterTable
ALTER TABLE "store_nodejs"."configuracao_aplicativo" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "createdBy" INTEGER,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedBy" INTEGER;

-- AlterTable
ALTER TABLE "store_nodejs"."contato_parceiro_historico" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "createdBy" INTEGER,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedBy" INTEGER;

-- AlterTable
ALTER TABLE "store_nodejs"."detalhe_aplicativo_historico" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "createdBy" INTEGER,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedBy" INTEGER;

-- AlterTable
ALTER TABLE "store_nodejs"."terminal_modelo" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "createdBy" INTEGER,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedBy" INTEGER;

-- AlterTable
ALTER TABLE "store_nodejs"."tipo_classificacao" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "createdBy" INTEGER,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedBy" INTEGER;

-- AlterTable
ALTER TABLE "store_nodejs"."tipo_integracao" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "createdBy" INTEGER,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedBy" INTEGER;

-- AlterTable
ALTER TABLE "store_nodejs"."versao_aplicativo" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "createdBy" INTEGER,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedBy" INTEGER;

-- CreateTable
CREATE TABLE "store_nodejs"."log_auditoria" (
    "id" SERIAL NOT NULL,
    "entidade" TEXT NOT NULL,
    "entidadeId" INTEGER,
    "acao" TEXT NOT NULL,
    "campo" TEXT,
    "valorAntes" TEXT,
    "valorDepois" TEXT,
    "usuarioId" INTEGER,
    "usuarioNome" TEXT,
    "ip" TEXT,
    "contexto" TEXT,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "log_auditoria_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "log_auditoria_entidade_entidadeId_acao_idx" ON "store_nodejs"."log_auditoria"("entidade", "entidadeId", "acao");

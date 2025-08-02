/*
  Warnings:

  - The primary key for the `anexo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `anexo` table. All the data in the column will be lost.
  - You are about to drop the column `createdBy` on the `anexo` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `anexo` table. All the data in the column will be lost.
  - You are about to drop the column `updatedBy` on the `anexo` table. All the data in the column will be lost.
  - The primary key for the `aplicativo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `aplicativo` table. All the data in the column will be lost.
  - You are about to drop the column `createdBy` on the `aplicativo` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `aplicativo` table. All the data in the column will be lost.
  - You are about to drop the column `updatedBy` on the `aplicativo` table. All the data in the column will be lost.
  - The primary key for the `app_image` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `app_image` table. All the data in the column will be lost.
  - You are about to drop the column `createdBy` on the `app_image` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `app_image` table. All the data in the column will be lost.
  - You are about to drop the column `updatedBy` on the `app_image` table. All the data in the column will be lost.
  - The primary key for the `cadastro_aplicativo_historico` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `cadastro_aplicativo_historico` table. All the data in the column will be lost.
  - You are about to drop the column `createdBy` on the `cadastro_aplicativo_historico` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `cadastro_aplicativo_historico` table. All the data in the column will be lost.
  - You are about to drop the column `updatedBy` on the `cadastro_aplicativo_historico` table. All the data in the column will be lost.
  - The primary key for the `catalogo_aplicativo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `catalogo_aplicativo` table. All the data in the column will be lost.
  - You are about to drop the column `createdBy` on the `catalogo_aplicativo` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `catalogo_aplicativo` table. All the data in the column will be lost.
  - You are about to drop the column `updatedBy` on the `catalogo_aplicativo` table. All the data in the column will be lost.
  - The primary key for the `categoria` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `categoria` table. All the data in the column will be lost.
  - You are about to drop the column `createdBy` on the `categoria` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `categoria` table. All the data in the column will be lost.
  - You are about to drop the column `updatedBy` on the `categoria` table. All the data in the column will be lost.
  - The primary key for the `categoria_aplicativo_vinculo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `categoria_aplicativo_vinculo` table. All the data in the column will be lost.
  - You are about to drop the column `createdBy` on the `categoria_aplicativo_vinculo` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `categoria_aplicativo_vinculo` table. All the data in the column will be lost.
  - You are about to drop the column `updatedBy` on the `categoria_aplicativo_vinculo` table. All the data in the column will be lost.
  - The primary key for the `configuracao_aplicativo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `configuracao_aplicativo` table. All the data in the column will be lost.
  - You are about to drop the column `createdBy` on the `configuracao_aplicativo` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `configuracao_aplicativo` table. All the data in the column will be lost.
  - You are about to drop the column `updatedBy` on the `configuracao_aplicativo` table. All the data in the column will be lost.
  - The primary key for the `contato_parceiro_historico` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `contato_parceiro_historico` table. All the data in the column will be lost.
  - You are about to drop the column `createdBy` on the `contato_parceiro_historico` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `contato_parceiro_historico` table. All the data in the column will be lost.
  - You are about to drop the column `updatedBy` on the `contato_parceiro_historico` table. All the data in the column will be lost.
  - The primary key for the `detalhe_aplicativo_historico` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `detalhe_aplicativo_historico` table. All the data in the column will be lost.
  - You are about to drop the column `createdBy` on the `detalhe_aplicativo_historico` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `detalhe_aplicativo_historico` table. All the data in the column will be lost.
  - You are about to drop the column `updatedBy` on the `detalhe_aplicativo_historico` table. All the data in the column will be lost.
  - The primary key for the `log_auditoria` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `criadoEm` on the `log_auditoria` table. All the data in the column will be lost.
  - You are about to drop the column `entidadeId` on the `log_auditoria` table. All the data in the column will be lost.
  - You are about to drop the column `usuarioId` on the `log_auditoria` table. All the data in the column will be lost.
  - You are about to drop the column `usuarioNome` on the `log_auditoria` table. All the data in the column will be lost.
  - You are about to drop the column `valorAntes` on the `log_auditoria` table. All the data in the column will be lost.
  - You are about to drop the column `valorDepois` on the `log_auditoria` table. All the data in the column will be lost.
  - The primary key for the `terminal_modelo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `terminal_modelo` table. All the data in the column will be lost.
  - You are about to drop the column `createdBy` on the `terminal_modelo` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `terminal_modelo` table. All the data in the column will be lost.
  - You are about to drop the column `updatedBy` on the `terminal_modelo` table. All the data in the column will be lost.
  - The primary key for the `tipo_classificacao` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `tipo_classificacao` table. All the data in the column will be lost.
  - You are about to drop the column `createdBy` on the `tipo_classificacao` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `tipo_classificacao` table. All the data in the column will be lost.
  - You are about to drop the column `updatedBy` on the `tipo_classificacao` table. All the data in the column will be lost.
  - The primary key for the `tipo_integracao` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `tipo_integracao` table. All the data in the column will be lost.
  - You are about to drop the column `createdBy` on the `tipo_integracao` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `tipo_integracao` table. All the data in the column will be lost.
  - You are about to drop the column `updatedBy` on the `tipo_integracao` table. All the data in the column will be lost.
  - The primary key for the `versao_aplicativo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `versao_aplicativo` table. All the data in the column will be lost.
  - You are about to drop the column `createdBy` on the `versao_aplicativo` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `versao_aplicativo` table. All the data in the column will be lost.
  - You are about to drop the column `updatedBy` on the `versao_aplicativo` table. All the data in the column will be lost.
  - Added the required column `atualizado_em` to the `anexo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `atualizado_por` to the `anexo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `criado_por` to the `anexo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `atualizado_em` to the `aplicativo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `atualizado_por` to the `aplicativo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `criado_por` to the `aplicativo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `atualizado_em` to the `app_image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `atualizado_por` to the `app_image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `criado_por` to the `app_image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `atualizado_em` to the `cadastro_aplicativo_historico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `atualizado_por` to the `cadastro_aplicativo_historico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `criado_por` to the `cadastro_aplicativo_historico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `atualizado_em` to the `catalogo_aplicativo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `atualizado_por` to the `catalogo_aplicativo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `criado_por` to the `catalogo_aplicativo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `atualizado_em` to the `categoria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `atualizado_por` to the `categoria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `criado_por` to the `categoria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `atualizado_em` to the `categoria_aplicativo_vinculo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `atualizado_por` to the `categoria_aplicativo_vinculo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `criado_por` to the `categoria_aplicativo_vinculo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `atualizado_em` to the `configuracao_aplicativo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `atualizado_por` to the `configuracao_aplicativo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `criado_por` to the `configuracao_aplicativo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `atualizado_em` to the `contato_parceiro_historico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `atualizado_por` to the `contato_parceiro_historico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `criado_por` to the `contato_parceiro_historico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `atualizado_em` to the `detalhe_aplicativo_historico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `atualizado_por` to the `detalhe_aplicativo_historico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `criado_por` to the `detalhe_aplicativo_historico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `atualizado_em` to the `log_auditoria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `atualizado_por` to the `log_auditoria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `criado_por` to the `log_auditoria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `atualizado_em` to the `terminal_modelo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `atualizado_por` to the `terminal_modelo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `criado_por` to the `terminal_modelo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `atualizado_em` to the `tipo_classificacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `atualizado_por` to the `tipo_classificacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `criado_por` to the `tipo_classificacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `atualizado_em` to the `tipo_integracao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `atualizado_por` to the `tipo_integracao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `criado_por` to the `tipo_integracao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `atualizado_em` to the `versao_aplicativo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `atualizado_por` to the `versao_aplicativo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `criado_por` to the `versao_aplicativo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "store_nodejs"."aplicativo" DROP CONSTRAINT "aplicativo_contato_parceiro_id_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."app_image" DROP CONSTRAINT "app_image_anexo_id_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."app_image" DROP CONSTRAINT "app_image_detalhes_aplicativo_id_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."cadastro_aplicativo_historico" DROP CONSTRAINT "cadastro_aplicativo_historico_aplicativo_id_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."cadastro_aplicativo_historico" DROP CONSTRAINT "cadastro_aplicativo_historico_detalhes_aplicativo_id_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."catalogo_aplicativo" DROP CONSTRAINT "catalogo_aplicativo_versao_aplicativo_id_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."categoria" DROP CONSTRAINT "categoria_pai_id_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."categoria" DROP CONSTRAINT "categoria_tipo_classificacao_id_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."categoria_aplicativo_vinculo" DROP CONSTRAINT "categoria_aplicativo_vinculo_aplicativo_id_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."categoria_aplicativo_vinculo" DROP CONSTRAINT "categoria_aplicativo_vinculo_categoria_aplicativo_id_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."configuracao_aplicativo" DROP CONSTRAINT "configuracao_aplicativo_aplicativo_id_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."configuracao_aplicativo" DROP CONSTRAINT "configuracao_aplicativo_terminal_modelo_id_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."configuracao_aplicativo" DROP CONSTRAINT "configuracao_aplicativo_tipo_integracao_id_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."versao_aplicativo" DROP CONSTRAINT "versao_aplicativo_cadastro_aplicativo_id_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."versao_aplicativo" DROP CONSTRAINT "versao_aplicativo_configuracao_aplicativo_id_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."versao_aplicativo" DROP CONSTRAINT "versao_aplicativo_icone_id_fkey";

-- DropIndex
DROP INDEX "store_nodejs"."log_auditoria_entidade_entidadeId_acao_idx";

-- AlterTable
ALTER TABLE "store_nodejs"."anexo" DROP CONSTRAINT "anexo_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "createdBy",
DROP COLUMN "updatedAt",
DROP COLUMN "updatedBy",
ADD COLUMN     "atualizado_em" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "atualizado_por" TEXT NOT NULL,
ADD COLUMN     "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "criado_por" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "anexo_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "anexo_id_seq";

-- AlterTable
ALTER TABLE "store_nodejs"."aplicativo" DROP CONSTRAINT "aplicativo_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "createdBy",
DROP COLUMN "updatedAt",
DROP COLUMN "updatedBy",
ADD COLUMN     "atualizado_em" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "atualizado_por" TEXT NOT NULL,
ADD COLUMN     "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "criado_por" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "contato_parceiro_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "aplicativo_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "aplicativo_id_seq";

-- AlterTable
ALTER TABLE "store_nodejs"."app_image" DROP CONSTRAINT "app_image_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "createdBy",
DROP COLUMN "updatedAt",
DROP COLUMN "updatedBy",
ADD COLUMN     "atualizado_em" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "atualizado_por" TEXT NOT NULL,
ADD COLUMN     "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "criado_por" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "anexo_id" SET DATA TYPE TEXT,
ALTER COLUMN "detalhes_aplicativo_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "app_image_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "app_image_id_seq";

-- AlterTable
ALTER TABLE "store_nodejs"."cadastro_aplicativo_historico" DROP CONSTRAINT "cadastro_aplicativo_historico_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "createdBy",
DROP COLUMN "updatedAt",
DROP COLUMN "updatedBy",
ADD COLUMN     "atualizado_em" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "atualizado_por" TEXT NOT NULL,
ADD COLUMN     "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "criado_por" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "aplicativo_id" SET DATA TYPE TEXT,
ALTER COLUMN "detalhes_aplicativo_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "cadastro_aplicativo_historico_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "cadastro_aplicativo_historico_id_seq";

-- AlterTable
ALTER TABLE "store_nodejs"."catalogo_aplicativo" DROP CONSTRAINT "catalogo_aplicativo_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "createdBy",
DROP COLUMN "updatedAt",
DROP COLUMN "updatedBy",
ADD COLUMN     "atualizado_em" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "atualizado_por" TEXT NOT NULL,
ADD COLUMN     "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "criado_por" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "versao_aplicativo_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "catalogo_aplicativo_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "catalogo_aplicativo_id_seq";

-- AlterTable
ALTER TABLE "store_nodejs"."categoria" DROP CONSTRAINT "categoria_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "createdBy",
DROP COLUMN "updatedAt",
DROP COLUMN "updatedBy",
ADD COLUMN     "atualizado_em" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "atualizado_por" TEXT NOT NULL,
ADD COLUMN     "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "criado_por" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "tipo_classificacao_id" SET DATA TYPE TEXT,
ALTER COLUMN "pai_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "categoria_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "categoria_id_seq";

-- AlterTable
ALTER TABLE "store_nodejs"."categoria_aplicativo_vinculo" DROP CONSTRAINT "categoria_aplicativo_vinculo_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "createdBy",
DROP COLUMN "updatedAt",
DROP COLUMN "updatedBy",
ADD COLUMN     "atualizado_em" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "atualizado_por" TEXT NOT NULL,
ADD COLUMN     "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "criado_por" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "aplicativo_id" SET DATA TYPE TEXT,
ALTER COLUMN "categoria_aplicativo_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "categoria_aplicativo_vinculo_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "categoria_aplicativo_vinculo_id_seq";

-- AlterTable
ALTER TABLE "store_nodejs"."configuracao_aplicativo" DROP CONSTRAINT "configuracao_aplicativo_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "createdBy",
DROP COLUMN "updatedAt",
DROP COLUMN "updatedBy",
ADD COLUMN     "atualizado_em" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "atualizado_por" TEXT NOT NULL,
ADD COLUMN     "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "criado_por" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "tipo_integracao_id" SET DATA TYPE TEXT,
ALTER COLUMN "terminal_modelo_id" SET DATA TYPE TEXT,
ALTER COLUMN "aplicativo_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "configuracao_aplicativo_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "configuracao_aplicativo_id_seq";

-- AlterTable
ALTER TABLE "store_nodejs"."contato_parceiro_historico" DROP CONSTRAINT "contato_parceiro_historico_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "createdBy",
DROP COLUMN "updatedAt",
DROP COLUMN "updatedBy",
ADD COLUMN     "atualizado_em" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "atualizado_por" TEXT NOT NULL,
ADD COLUMN     "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "criado_por" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "contato_parceiro_historico_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "contato_parceiro_historico_id_seq";

-- AlterTable
ALTER TABLE "store_nodejs"."detalhe_aplicativo_historico" DROP CONSTRAINT "detalhe_aplicativo_historico_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "createdBy",
DROP COLUMN "updatedAt",
DROP COLUMN "updatedBy",
ADD COLUMN     "atualizado_em" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "atualizado_por" TEXT NOT NULL,
ADD COLUMN     "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "criado_por" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "detalhe_aplicativo_historico_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "detalhe_aplicativo_historico_id_seq";

-- AlterTable
ALTER TABLE "store_nodejs"."log_auditoria" DROP CONSTRAINT "log_auditoria_pkey",
DROP COLUMN "criadoEm",
DROP COLUMN "entidadeId",
DROP COLUMN "usuarioId",
DROP COLUMN "usuarioNome",
DROP COLUMN "valorAntes",
DROP COLUMN "valorDepois",
ADD COLUMN     "atualizado_em" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "atualizado_por" TEXT NOT NULL,
ADD COLUMN     "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "criado_por" TEXT NOT NULL,
ADD COLUMN     "entidade_id" TEXT,
ADD COLUMN     "usuario_id" TEXT,
ADD COLUMN     "usuario_nome" TEXT,
ADD COLUMN     "valor_antes" TEXT,
ADD COLUMN     "valor_depois" TEXT,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "log_auditoria_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "log_auditoria_id_seq";

-- AlterTable
ALTER TABLE "store_nodejs"."terminal_modelo" DROP CONSTRAINT "terminal_modelo_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "createdBy",
DROP COLUMN "updatedAt",
DROP COLUMN "updatedBy",
ADD COLUMN     "atualizado_em" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "atualizado_por" TEXT NOT NULL,
ADD COLUMN     "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "criado_por" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "terminal_modelo_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "terminal_modelo_id_seq";

-- AlterTable
ALTER TABLE "store_nodejs"."tipo_classificacao" DROP CONSTRAINT "tipo_classificacao_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "createdBy",
DROP COLUMN "updatedAt",
DROP COLUMN "updatedBy",
ADD COLUMN     "atualizado_em" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "atualizado_por" TEXT NOT NULL,
ADD COLUMN     "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "criado_por" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "tipo_classificacao_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "tipo_classificacao_id_seq";

-- AlterTable
ALTER TABLE "store_nodejs"."tipo_integracao" DROP CONSTRAINT "tipo_integracao_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "createdBy",
DROP COLUMN "updatedAt",
DROP COLUMN "updatedBy",
ADD COLUMN     "atualizado_em" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "atualizado_por" TEXT NOT NULL,
ADD COLUMN     "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "criado_por" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "tipo_integracao_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "tipo_integracao_id_seq";

-- AlterTable
ALTER TABLE "store_nodejs"."versao_aplicativo" DROP CONSTRAINT "versao_aplicativo_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "createdBy",
DROP COLUMN "updatedAt",
DROP COLUMN "updatedBy",
ADD COLUMN     "atualizado_em" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "atualizado_por" TEXT NOT NULL,
ADD COLUMN     "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "criado_por" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "icone_id" SET DATA TYPE TEXT,
ALTER COLUMN "cadastro_aplicativo_id" SET DATA TYPE TEXT,
ALTER COLUMN "configuracao_aplicativo_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "versao_aplicativo_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "versao_aplicativo_id_seq";

-- CreateIndex
CREATE INDEX "log_auditoria_entidade_entidade_id_acao_idx" ON "store_nodejs"."log_auditoria"("entidade", "entidade_id", "acao");

-- AddForeignKey
ALTER TABLE "store_nodejs"."categoria" ADD CONSTRAINT "categoria_tipo_classificacao_id_fkey" FOREIGN KEY ("tipo_classificacao_id") REFERENCES "store_nodejs"."tipo_classificacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."categoria" ADD CONSTRAINT "categoria_pai_id_fkey" FOREIGN KEY ("pai_id") REFERENCES "store_nodejs"."categoria"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."categoria_aplicativo_vinculo" ADD CONSTRAINT "categoria_aplicativo_vinculo_aplicativo_id_fkey" FOREIGN KEY ("aplicativo_id") REFERENCES "store_nodejs"."aplicativo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."categoria_aplicativo_vinculo" ADD CONSTRAINT "categoria_aplicativo_vinculo_categoria_aplicativo_id_fkey" FOREIGN KEY ("categoria_aplicativo_id") REFERENCES "store_nodejs"."categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."app_image" ADD CONSTRAINT "app_image_anexo_id_fkey" FOREIGN KEY ("anexo_id") REFERENCES "store_nodejs"."anexo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."app_image" ADD CONSTRAINT "app_image_detalhes_aplicativo_id_fkey" FOREIGN KEY ("detalhes_aplicativo_id") REFERENCES "store_nodejs"."detalhe_aplicativo_historico"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."aplicativo" ADD CONSTRAINT "aplicativo_contato_parceiro_id_fkey" FOREIGN KEY ("contato_parceiro_id") REFERENCES "store_nodejs"."contato_parceiro_historico"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."cadastro_aplicativo_historico" ADD CONSTRAINT "cadastro_aplicativo_historico_aplicativo_id_fkey" FOREIGN KEY ("aplicativo_id") REFERENCES "store_nodejs"."aplicativo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."cadastro_aplicativo_historico" ADD CONSTRAINT "cadastro_aplicativo_historico_detalhes_aplicativo_id_fkey" FOREIGN KEY ("detalhes_aplicativo_id") REFERENCES "store_nodejs"."detalhe_aplicativo_historico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."configuracao_aplicativo" ADD CONSTRAINT "configuracao_aplicativo_tipo_integracao_id_fkey" FOREIGN KEY ("tipo_integracao_id") REFERENCES "store_nodejs"."tipo_integracao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."configuracao_aplicativo" ADD CONSTRAINT "configuracao_aplicativo_terminal_modelo_id_fkey" FOREIGN KEY ("terminal_modelo_id") REFERENCES "store_nodejs"."terminal_modelo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."configuracao_aplicativo" ADD CONSTRAINT "configuracao_aplicativo_aplicativo_id_fkey" FOREIGN KEY ("aplicativo_id") REFERENCES "store_nodejs"."aplicativo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."versao_aplicativo" ADD CONSTRAINT "versao_aplicativo_icone_id_fkey" FOREIGN KEY ("icone_id") REFERENCES "store_nodejs"."app_image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."versao_aplicativo" ADD CONSTRAINT "versao_aplicativo_configuracao_aplicativo_id_fkey" FOREIGN KEY ("configuracao_aplicativo_id") REFERENCES "store_nodejs"."configuracao_aplicativo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."versao_aplicativo" ADD CONSTRAINT "versao_aplicativo_cadastro_aplicativo_id_fkey" FOREIGN KEY ("cadastro_aplicativo_id") REFERENCES "store_nodejs"."cadastro_aplicativo_historico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."catalogo_aplicativo" ADD CONSTRAINT "catalogo_aplicativo_versao_aplicativo_id_fkey" FOREIGN KEY ("versao_aplicativo_id") REFERENCES "store_nodejs"."versao_aplicativo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

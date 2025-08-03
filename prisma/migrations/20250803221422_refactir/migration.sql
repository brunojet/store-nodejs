/*
  Warnings:

  - You are about to drop the column `detalhes_aplicativo_id` on the `cadastro_aplicativo_historico` table. All the data in the column will be lost.
  - You are about to drop the `detalhe_aplicativo_historico` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `imagem_detalhe_aplicativo_vinculo` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `descricao` to the `cadastro_aplicativo_historico` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "store_nodejs"."cadastro_aplicativo_historico" DROP CONSTRAINT "cadastro_aplicativo_historico_detalhes_aplicativo_id_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."imagem_detalhe_aplicativo_vinculo" DROP CONSTRAINT "imagem_detalhe_aplicativo_vinculo_detalhe_aplicativo_id_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."imagem_detalhe_aplicativo_vinculo" DROP CONSTRAINT "imagem_detalhe_aplicativo_vinculo_imagem_aplicativo_id_fkey";

-- AlterTable
ALTER TABLE "store_nodejs"."aplicativo" ADD COLUMN     "contato_descricao" TEXT;

-- AlterTable
ALTER TABLE "store_nodejs"."cadastro_aplicativo_historico" DROP COLUMN "detalhes_aplicativo_id",
ADD COLUMN     "descricao" TEXT NOT NULL;

-- DropTable
DROP TABLE "store_nodejs"."detalhe_aplicativo_historico";

-- DropTable
DROP TABLE "store_nodejs"."imagem_detalhe_aplicativo_vinculo";

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

-- CreateIndex
CREATE UNIQUE INDEX "imagem_cadastro_aplicativo_vinculo_imagem_aplicativo_id_cad_key" ON "store_nodejs"."imagem_cadastro_aplicativo_vinculo"("imagem_aplicativo_id", "cadastro_aplicativo_id");

-- AddForeignKey
ALTER TABLE "store_nodejs"."imagem_cadastro_aplicativo_vinculo" ADD CONSTRAINT "imagem_cadastro_aplicativo_vinculo_imagem_aplicativo_id_fkey" FOREIGN KEY ("imagem_aplicativo_id") REFERENCES "store_nodejs"."imagem_aplicativo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."imagem_cadastro_aplicativo_vinculo" ADD CONSTRAINT "imagem_cadastro_aplicativo_vinculo_cadastro_aplicativo_id_fkey" FOREIGN KEY ("cadastro_aplicativo_id") REFERENCES "store_nodejs"."cadastro_aplicativo_historico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

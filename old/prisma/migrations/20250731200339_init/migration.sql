/*
  Warnings:

  - You are about to drop the column `aplicativo_cadastro_id` on the `catalogo_aplicativo` table. All the data in the column will be lost.
  - You are about to drop the column `aplicativo_versao_id` on the `catalogo_aplicativo` table. All the data in the column will be lost.
  - Added the required column `configuracao_aplicativo_id` to the `catalogo_aplicativo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `versao_aplicativo_id` to the `catalogo_aplicativo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "store_nodejs"."catalogo_aplicativo" DROP CONSTRAINT "catalogo_aplicativo_aplicativo_cadastro_id_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."catalogo_aplicativo" DROP CONSTRAINT "catalogo_aplicativo_aplicativo_versao_id_fkey";

-- AlterTable
ALTER TABLE "store_nodejs"."catalogo_aplicativo" DROP COLUMN "aplicativo_cadastro_id",
DROP COLUMN "aplicativo_versao_id",
ADD COLUMN     "configuracao_aplicativo_id" INTEGER NOT NULL,
ADD COLUMN     "versao_aplicativo_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "store_nodejs"."catalogo_aplicativo" ADD CONSTRAINT "catalogo_aplicativo_configuracao_aplicativo_id_fkey" FOREIGN KEY ("configuracao_aplicativo_id") REFERENCES "store_nodejs"."configuracao_aplicativo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."catalogo_aplicativo" ADD CONSTRAINT "catalogo_aplicativo_versao_aplicativo_id_fkey" FOREIGN KEY ("versao_aplicativo_id") REFERENCES "store_nodejs"."VersaoAplicativo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

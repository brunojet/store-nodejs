/*
  Warnings:

  - You are about to drop the column `terminal_modelo_id` on the `catalogo_aplicativo` table. All the data in the column will be lost.
  - You are about to drop the column `tipo_integracao_id` on the `catalogo_aplicativo` table. All the data in the column will be lost.
  - Added the required column `configuracao_aplicativo_id` to the `versao_aplicativo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "store_nodejs"."catalogo_aplicativo" DROP CONSTRAINT "catalogo_aplicativo_terminal_modelo_id_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."catalogo_aplicativo" DROP CONSTRAINT "catalogo_aplicativo_tipo_integracao_id_fkey";

-- DropIndex
DROP INDEX "store_nodejs"."catalogo_aplicativo_tipo_estagio_tipo_integracao_id_termina_idx";

-- AlterTable
ALTER TABLE "store_nodejs"."catalogo_aplicativo" DROP COLUMN "terminal_modelo_id",
DROP COLUMN "tipo_integracao_id";

-- AlterTable
ALTER TABLE "store_nodejs"."versao_aplicativo" ADD COLUMN     "configuracao_aplicativo_id" INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX "catalogo_aplicativo_tipo_estagio_versao_aplicativo_id_idx" ON "store_nodejs"."catalogo_aplicativo"("tipo_estagio", "versao_aplicativo_id");

-- AddForeignKey
ALTER TABLE "store_nodejs"."versao_aplicativo" ADD CONSTRAINT "versao_aplicativo_configuracao_aplicativo_id_fkey" FOREIGN KEY ("configuracao_aplicativo_id") REFERENCES "store_nodejs"."configuracao_aplicativo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

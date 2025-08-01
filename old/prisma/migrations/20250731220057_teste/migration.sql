/*
  Warnings:

  - You are about to drop the column `cadastroAplicativoId` on the `configuracao_aplicativo` table. All the data in the column will be lost.
  - Added the required column `cadastro_aplicativo_id` to the `configuracao_aplicativo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "store_nodejs"."configuracao_aplicativo" DROP CONSTRAINT "configuracao_aplicativo_cadastroAplicativoId_fkey";

-- AlterTable
ALTER TABLE "store_nodejs"."configuracao_aplicativo" DROP COLUMN "cadastroAplicativoId",
ADD COLUMN     "cadastro_aplicativo_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "store_nodejs"."configuracao_aplicativo" ADD CONSTRAINT "configuracao_aplicativo_cadastro_aplicativo_id_fkey" FOREIGN KEY ("cadastro_aplicativo_id") REFERENCES "store_nodejs"."cadastro_aplicativo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

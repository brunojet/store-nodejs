/*
  Warnings:

  - You are about to drop the column `descricao` on the `cadastro_aplicativo_historico` table. All the data in the column will be lost.
  - Added the required column `detalhe_descricao` to the `cadastro_aplicativo_historico` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "store_nodejs"."cadastro_aplicativo_historico" DROP COLUMN "descricao",
ADD COLUMN     "detalhe_descricao" TEXT NOT NULL;

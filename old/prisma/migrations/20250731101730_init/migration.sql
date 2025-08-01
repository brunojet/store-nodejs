/*
  Warnings:

  - You are about to drop the column `nome_pacote_android` on the `AppCadastro` table. All the data in the column will be lost.
  - Added the required column `nome_pacote_app` to the `AppCadastro` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valor_app` to the `AppCadastro` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "store_nodejs"."AppCadastro" DROP COLUMN "nome_pacote_android",
ADD COLUMN     "nome_pacote_app" TEXT NOT NULL,
ADD COLUMN     "valor_app" DOUBLE PRECISION NOT NULL;

/*
  Warnings:

  - Added the required column `nome_pacote_android` to the `AppCadastro` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "store_nodejs"."AppCadastro" ADD COLUMN     "nome_pacote_android" TEXT NOT NULL;

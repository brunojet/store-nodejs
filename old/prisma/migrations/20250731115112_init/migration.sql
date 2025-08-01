/*
  Warnings:

  - You are about to drop the column `parceiro_id` on the `AppCadastro` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "store_nodejs"."AppCadastro" DROP CONSTRAINT "AppCadastro_parceiro_id_fkey";

-- AlterTable
ALTER TABLE "store_nodejs"."AppCadastro" DROP COLUMN "parceiro_id";

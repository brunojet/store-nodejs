/*
  Warnings:

  - You are about to drop the column `parceiro_id` on the `AppDetalhes` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "store_nodejs"."AppDetalhes" DROP CONSTRAINT "AppDetalhes_parceiro_id_fkey";

-- AlterTable
ALTER TABLE "store_nodejs"."AppDetalhes" DROP COLUMN "parceiro_id";

/*
  Warnings:

  - You are about to drop the column `parceiro_id` on the `GrupoContato` table. All the data in the column will be lost.
  - Added the required column `parceiro_id` to the `AppCadastro` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "store_nodejs"."GrupoContato" DROP CONSTRAINT "GrupoContato_parceiro_id_fkey";

-- AlterTable
ALTER TABLE "store_nodejs"."AppCadastro" ADD COLUMN     "parceiro_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "store_nodejs"."GrupoContato" DROP COLUMN "parceiro_id";

-- AddForeignKey
ALTER TABLE "store_nodejs"."AppCadastro" ADD CONSTRAINT "AppCadastro_parceiro_id_fkey" FOREIGN KEY ("parceiro_id") REFERENCES "store_nodejs"."Parceiro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

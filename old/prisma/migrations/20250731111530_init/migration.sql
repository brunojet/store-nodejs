/*
  Warnings:

  - You are about to drop the column `app_contato_id` on the `AppCadastro` table. All the data in the column will be lost.
  - You are about to drop the `AppContato` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `codigo_parceiro` to the `AppDetalhes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "store_nodejs"."AppCadastro" DROP CONSTRAINT "AppCadastro_app_contato_id_fkey";

-- AlterTable
ALTER TABLE "store_nodejs"."AppCadastro" DROP COLUMN "app_contato_id";

-- AlterTable
ALTER TABLE "store_nodejs"."AppDetalhes" ADD COLUMN     "codigo_parceiro" TEXT NOT NULL,
ADD COLUMN     "contato_email" TEXT,
ADD COLUMN     "contato_id" INTEGER,
ADD COLUMN     "contato_nome" TEXT,
ADD COLUMN     "contato_telefone" TEXT;

-- DropTable
DROP TABLE "store_nodejs"."AppContato";

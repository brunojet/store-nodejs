/*
  Warnings:

  - You are about to drop the column `contato_parceiro_id` on the `aplicativo` table. All the data in the column will be lost.
  - You are about to drop the `contato_parceiro_historico` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "store_nodejs"."aplicativo" DROP CONSTRAINT "aplicativo_contato_parceiro_id_fkey";

-- AlterTable
ALTER TABLE "store_nodejs"."aplicativo" DROP COLUMN "contato_parceiro_id",
ADD COLUMN     "contato_descricao" TEXT,
ADD COLUMN     "contato_email" TEXT,
ADD COLUMN     "contato_nome" TEXT,
ADD COLUMN     "contato_telefone" TEXT;

-- DropTable
DROP TABLE "store_nodejs"."contato_parceiro_historico";

-- CreateIndex
CREATE INDEX "aplicativo_contato_email_idx" ON "store_nodejs"."aplicativo"("contato_email");

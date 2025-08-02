/*
  Warnings:

  - You are about to drop the column `codigo_parceiro` on the `AppVersao` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "store_nodejs"."AppCadastro" ADD COLUMN     "terminal_modelo_id" TEXT;

-- AlterTable
ALTER TABLE "store_nodejs"."AppVersao" DROP COLUMN "codigo_parceiro";

-- CreateTable
CREATE TABLE "store_nodejs"."TerminalModelo" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "TerminalModelo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "store_nodejs"."AppCadastro" ADD CONSTRAINT "AppCadastro_terminal_modelo_id_fkey" FOREIGN KEY ("terminal_modelo_id") REFERENCES "store_nodejs"."TerminalModelo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

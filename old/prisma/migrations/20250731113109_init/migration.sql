/*
  Warnings:

  - You are about to drop the column `contato_email` on the `AppDetalhes` table. All the data in the column will be lost.
  - You are about to drop the column `contato_id` on the `AppDetalhes` table. All the data in the column will be lost.
  - You are about to drop the column `contato_nome` on the `AppDetalhes` table. All the data in the column will be lost.
  - You are about to drop the column `contato_telefone` on the `AppDetalhes` table. All the data in the column will be lost.
  - Added the required column `grupo_contato_id` to the `AppCadastro` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "store_nodejs"."AppCadastro" ADD COLUMN     "grupo_contato_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "store_nodejs"."AppDetalhes" DROP COLUMN "contato_email",
DROP COLUMN "contato_id",
DROP COLUMN "contato_nome",
DROP COLUMN "contato_telefone";

-- CreateTable
CREATE TABLE "store_nodejs"."GrupoContato" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,

    CONSTRAINT "GrupoContato_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "store_nodejs"."AppCadastro" ADD CONSTRAINT "AppCadastro_grupo_contato_id_fkey" FOREIGN KEY ("grupo_contato_id") REFERENCES "store_nodejs"."GrupoContato"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

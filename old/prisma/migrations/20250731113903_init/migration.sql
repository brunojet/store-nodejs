/*
  Warnings:

  - You are about to drop the column `codigo_parceiro` on the `AppCadastro` table. All the data in the column will be lost.
  - You are about to drop the column `codigo_parceiro` on the `AppDetalhes` table. All the data in the column will be lost.
  - Added the required column `parceiro_id` to the `AppCadastro` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parceiro_id` to the `AppDetalhes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parceiro_id` to the `GrupoContato` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "store_nodejs"."AppCadastro" DROP COLUMN "codigo_parceiro",
ADD COLUMN     "parceiro_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "store_nodejs"."AppDetalhes" DROP COLUMN "codigo_parceiro",
ADD COLUMN     "parceiro_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "store_nodejs"."GrupoContato" ADD COLUMN     "parceiro_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "store_nodejs"."Parceiro" (
    "id" SERIAL NOT NULL,
    "codigo_parceiro" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Parceiro_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Parceiro_codigo_parceiro_key" ON "store_nodejs"."Parceiro"("codigo_parceiro");

-- AddForeignKey
ALTER TABLE "store_nodejs"."GrupoContato" ADD CONSTRAINT "GrupoContato_parceiro_id_fkey" FOREIGN KEY ("parceiro_id") REFERENCES "store_nodejs"."Parceiro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."AppDetalhes" ADD CONSTRAINT "AppDetalhes_parceiro_id_fkey" FOREIGN KEY ("parceiro_id") REFERENCES "store_nodejs"."Parceiro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."AppCadastro" ADD CONSTRAINT "AppCadastro_parceiro_id_fkey" FOREIGN KEY ("parceiro_id") REFERENCES "store_nodejs"."Parceiro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

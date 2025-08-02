/*
  Warnings:

  - You are about to drop the `cadastro_aplicativo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `detalhe_aplicativo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "store_nodejs"."app_image" DROP CONSTRAINT "app_image_detalhes_aplicativo_id_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."cadastro_aplicativo" DROP CONSTRAINT "cadastro_aplicativo_aplicativo_id_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."cadastro_aplicativo" DROP CONSTRAINT "cadastro_aplicativo_detalhes_aplicativo_id_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."versao_aplicativo" DROP CONSTRAINT "versao_aplicativo_cadastro_aplicativo_id_fkey";

-- DropTable
DROP TABLE "store_nodejs"."cadastro_aplicativo";

-- DropTable
DROP TABLE "store_nodejs"."detalhe_aplicativo";

-- CreateTable
CREATE TABLE "store_nodejs"."detalhe_aplicativo_historico" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "detalhe_aplicativo_historico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_nodejs"."cadastro_aplicativo_historico" (
    "id" SERIAL NOT NULL,
    "aplicativo_id" INTEGER NOT NULL,
    "detalhes_aplicativo_id" INTEGER NOT NULL,

    CONSTRAINT "cadastro_aplicativo_historico_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "cadastro_aplicativo_historico_aplicativo_id_idx" ON "store_nodejs"."cadastro_aplicativo_historico"("aplicativo_id");

-- AddForeignKey
ALTER TABLE "store_nodejs"."app_image" ADD CONSTRAINT "app_image_detalhes_aplicativo_id_fkey" FOREIGN KEY ("detalhes_aplicativo_id") REFERENCES "store_nodejs"."detalhe_aplicativo_historico"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."cadastro_aplicativo_historico" ADD CONSTRAINT "cadastro_aplicativo_historico_aplicativo_id_fkey" FOREIGN KEY ("aplicativo_id") REFERENCES "store_nodejs"."aplicativo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."cadastro_aplicativo_historico" ADD CONSTRAINT "cadastro_aplicativo_historico_detalhes_aplicativo_id_fkey" FOREIGN KEY ("detalhes_aplicativo_id") REFERENCES "store_nodejs"."detalhe_aplicativo_historico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."versao_aplicativo" ADD CONSTRAINT "versao_aplicativo_cadastro_aplicativo_id_fkey" FOREIGN KEY ("cadastro_aplicativo_id") REFERENCES "store_nodejs"."cadastro_aplicativo_historico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

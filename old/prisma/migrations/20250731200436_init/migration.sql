/*
  Warnings:

  - You are about to drop the `VersaoAplicativo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "store_nodejs"."VersaoAplicativo" DROP CONSTRAINT "VersaoAplicativo_icone_id_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."catalogo_aplicativo" DROP CONSTRAINT "catalogo_aplicativo_versao_aplicativo_id_fkey";

-- DropTable
DROP TABLE "store_nodejs"."VersaoAplicativo";

-- CreateTable
CREATE TABLE "store_nodejs"."versao_aplicativo" (
    "id" SERIAL NOT NULL,
    "icone_id" INTEGER NOT NULL,
    "versao" TEXT NOT NULL,
    "changelog" TEXT NOT NULL,
    "pacote_mdm" TEXT NOT NULL,
    "versao_mdm" TEXT NOT NULL,
    "tamanho" TEXT NOT NULL,
    "avaliacao" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "versao_aplicativo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "store_nodejs"."versao_aplicativo" ADD CONSTRAINT "versao_aplicativo_icone_id_fkey" FOREIGN KEY ("icone_id") REFERENCES "store_nodejs"."app_image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."catalogo_aplicativo" ADD CONSTRAINT "catalogo_aplicativo_versao_aplicativo_id_fkey" FOREIGN KEY ("versao_aplicativo_id") REFERENCES "store_nodejs"."versao_aplicativo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

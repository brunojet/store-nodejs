/*
  Warnings:

  - A unique constraint covering the columns `[anexo_id]` on the table `imagem_aplicativo` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "imagem_aplicativo_anexo_id_key" ON "store_nodejs"."imagem_aplicativo"("anexo_id");

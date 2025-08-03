/*
  Warnings:

  - You are about to drop the `app_image` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "store_nodejs"."app_image" DROP CONSTRAINT "app_image_anexo_id_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."app_image" DROP CONSTRAINT "app_image_detalhes_aplicativo_id_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."versao_aplicativo" DROP CONSTRAINT "versao_aplicativo_icone_id_fkey";

-- DropTable
DROP TABLE "store_nodejs"."app_image";

-- CreateTable
CREATE TABLE "store_nodejs"."imagem_aplicativo" (
    "id" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,
    "criado_por" TEXT NOT NULL,
    "atualizado_por" TEXT NOT NULL,
    "status" "store_nodejs"."StatusAppImage" NOT NULL DEFAULT 'PENDENTE_UPLOAD',
    "anexo_id" TEXT NOT NULL,

    CONSTRAINT "imagem_aplicativo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_nodejs"."imagem_detalhe_aplicativo_vinculo" (
    "id" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,
    "criado_por" TEXT NOT NULL,
    "atualizado_por" TEXT NOT NULL,
    "imagem_aplicativo_id" TEXT NOT NULL,
    "detalhe_aplicativo_id" TEXT NOT NULL,

    CONSTRAINT "imagem_detalhe_aplicativo_vinculo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "imagem_detalhe_aplicativo_vinculo_imagem_aplicativo_id_deta_key" ON "store_nodejs"."imagem_detalhe_aplicativo_vinculo"("imagem_aplicativo_id", "detalhe_aplicativo_id");

-- AddForeignKey
ALTER TABLE "store_nodejs"."imagem_aplicativo" ADD CONSTRAINT "imagem_aplicativo_anexo_id_fkey" FOREIGN KEY ("anexo_id") REFERENCES "store_nodejs"."anexo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."imagem_detalhe_aplicativo_vinculo" ADD CONSTRAINT "imagem_detalhe_aplicativo_vinculo_imagem_aplicativo_id_fkey" FOREIGN KEY ("imagem_aplicativo_id") REFERENCES "store_nodejs"."imagem_aplicativo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."imagem_detalhe_aplicativo_vinculo" ADD CONSTRAINT "imagem_detalhe_aplicativo_vinculo_detalhe_aplicativo_id_fkey" FOREIGN KEY ("detalhe_aplicativo_id") REFERENCES "store_nodejs"."detalhe_aplicativo_historico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."versao_aplicativo" ADD CONSTRAINT "versao_aplicativo_icone_id_fkey" FOREIGN KEY ("icone_id") REFERENCES "store_nodejs"."imagem_aplicativo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

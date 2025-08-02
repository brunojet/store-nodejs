/*
  Warnings:

  - You are about to drop the `categoria_aplicativo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "store_nodejs"."categoria_aplicativo" DROP CONSTRAINT "categoria_aplicativo_pai_id_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."categoria_aplicativo" DROP CONSTRAINT "categoria_aplicativo_tipo_classificacao_id_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."categoria_aplicativo_vinculo" DROP CONSTRAINT "categoria_aplicativo_vinculo_categoria_aplicativo_id_fkey";

-- DropTable
DROP TABLE "store_nodejs"."categoria_aplicativo";

-- CreateTable
CREATE TABLE "store_nodejs"."categoria" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo_classificacao_id" INTEGER NOT NULL,
    "pai_id" INTEGER,

    CONSTRAINT "categoria_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "categoria_nome_key" ON "store_nodejs"."categoria"("nome");

-- AddForeignKey
ALTER TABLE "store_nodejs"."categoria" ADD CONSTRAINT "categoria_tipo_classificacao_id_fkey" FOREIGN KEY ("tipo_classificacao_id") REFERENCES "store_nodejs"."tipo_classificacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."categoria" ADD CONSTRAINT "categoria_pai_id_fkey" FOREIGN KEY ("pai_id") REFERENCES "store_nodejs"."categoria"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."categoria_aplicativo_vinculo" ADD CONSTRAINT "categoria_aplicativo_vinculo_categoria_aplicativo_id_fkey" FOREIGN KEY ("categoria_aplicativo_id") REFERENCES "store_nodejs"."categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

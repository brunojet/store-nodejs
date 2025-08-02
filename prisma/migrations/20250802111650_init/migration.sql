/*
  Warnings:

  - You are about to drop the `categoria_aplicativo_historico` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "store_nodejs"."categoria_aplicativo_historico" DROP CONSTRAINT "categoria_aplicativo_historico_aplicativo_id_fkey";

-- DropForeignKey
ALTER TABLE "store_nodejs"."categoria_aplicativo_historico" DROP CONSTRAINT "categoria_aplicativo_historico_categoria_aplicativo_id_fkey";

-- DropTable
DROP TABLE "store_nodejs"."categoria_aplicativo_historico";

-- CreateTable
CREATE TABLE "store_nodejs"."categoria_aplicativo_vinculo" (
    "id" SERIAL NOT NULL,
    "aplicativo_id" INTEGER NOT NULL,
    "categoria_aplicativo_id" INTEGER NOT NULL,

    CONSTRAINT "categoria_aplicativo_vinculo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "categoria_aplicativo_vinculo_aplicativo_id_categoria_aplica_key" ON "store_nodejs"."categoria_aplicativo_vinculo"("aplicativo_id", "categoria_aplicativo_id");

-- AddForeignKey
ALTER TABLE "store_nodejs"."categoria_aplicativo_vinculo" ADD CONSTRAINT "categoria_aplicativo_vinculo_aplicativo_id_fkey" FOREIGN KEY ("aplicativo_id") REFERENCES "store_nodejs"."aplicativo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."categoria_aplicativo_vinculo" ADD CONSTRAINT "categoria_aplicativo_vinculo_categoria_aplicativo_id_fkey" FOREIGN KEY ("categoria_aplicativo_id") REFERENCES "store_nodejs"."categoria_aplicativo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

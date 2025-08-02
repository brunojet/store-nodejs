-- CreateTable
CREATE TABLE "store_nodejs"."tipo_classificacao" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "tipo_classificacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_nodejs"."categoria_aplicativo" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo_classificacao_id" INTEGER NOT NULL,
    "pai_id" INTEGER,

    CONSTRAINT "categoria_aplicativo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_nodejs"."categoria_aplicativo_historico" (
    "id" SERIAL NOT NULL,
    "aplicativo_id" INTEGER NOT NULL,
    "categoria_aplicativo_id" INTEGER NOT NULL,

    CONSTRAINT "categoria_aplicativo_historico_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tipo_classificacao_nome_key" ON "store_nodejs"."tipo_classificacao"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "categoria_aplicativo_nome_key" ON "store_nodejs"."categoria_aplicativo"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "categoria_aplicativo_historico_aplicativo_id_categoria_apli_key" ON "store_nodejs"."categoria_aplicativo_historico"("aplicativo_id", "categoria_aplicativo_id");

-- AddForeignKey
ALTER TABLE "store_nodejs"."categoria_aplicativo" ADD CONSTRAINT "categoria_aplicativo_tipo_classificacao_id_fkey" FOREIGN KEY ("tipo_classificacao_id") REFERENCES "store_nodejs"."tipo_classificacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."categoria_aplicativo" ADD CONSTRAINT "categoria_aplicativo_pai_id_fkey" FOREIGN KEY ("pai_id") REFERENCES "store_nodejs"."categoria_aplicativo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."categoria_aplicativo_historico" ADD CONSTRAINT "categoria_aplicativo_historico_aplicativo_id_fkey" FOREIGN KEY ("aplicativo_id") REFERENCES "store_nodejs"."aplicativo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_nodejs"."categoria_aplicativo_historico" ADD CONSTRAINT "categoria_aplicativo_historico_categoria_aplicativo_id_fkey" FOREIGN KEY ("categoria_aplicativo_id") REFERENCES "store_nodejs"."categoria_aplicativo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

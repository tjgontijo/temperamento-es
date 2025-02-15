-- CreateTable
CREATE TABLE "TipoQuestao" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,

    CONSTRAINT "TipoQuestao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoAlternativa" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "grupo" TEXT,

    CONSTRAINT "TipoAlternativa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Questao" (
    "id" TEXT NOT NULL,
    "tipoQuestaoId" TEXT NOT NULL,
    "pergunta" TEXT NOT NULL,
    "complemento" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Questao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Alternativa" (
    "id" TEXT NOT NULL,
    "questaoId" TEXT NOT NULL,
    "texto" TEXT NOT NULL,
    "tipoAlternativaId" TEXT NOT NULL,

    CONSTRAINT "Alternativa_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TipoQuestao_nome_key" ON "TipoQuestao"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "TipoAlternativa_nome_key" ON "TipoAlternativa"("nome");

-- CreateIndex
CREATE INDEX "Questao_tipoQuestaoId_idx" ON "Questao"("tipoQuestaoId");

-- CreateIndex
CREATE INDEX "Alternativa_questaoId_idx" ON "Alternativa"("questaoId");

-- CreateIndex
CREATE INDEX "Alternativa_tipoAlternativaId_idx" ON "Alternativa"("tipoAlternativaId");

-- AddForeignKey
ALTER TABLE "Questao" ADD CONSTRAINT "Questao_tipoQuestaoId_fkey" FOREIGN KEY ("tipoQuestaoId") REFERENCES "TipoQuestao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alternativa" ADD CONSTRAINT "Alternativa_questaoId_fkey" FOREIGN KEY ("questaoId") REFERENCES "Questao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alternativa" ADD CONSTRAINT "Alternativa_tipoAlternativaId_fkey" FOREIGN KEY ("tipoAlternativaId") REFERENCES "TipoAlternativa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

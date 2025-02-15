import { PrismaClient } from '@prisma/client';
import { seedTipoQuestao } from './seed-tipo-questao';
import { seedTipoAlternativa } from './seed-tipo-alternativa';
import { seedLinguagem } from './seed-linguagem';
import { seedTemperamento } from './seed-temperamento';
import { seedLinguagemAutor } from './seed-linguagem-autor';
import { seedTemperamentoAutor } from './seed-temperamento-autor';

const prisma = new PrismaClient();

async function cleanDatabase() {
  console.log('Limpando banco de dados...');
  await prisma.alternativa.deleteMany();
  await prisma.questao.deleteMany();
  await prisma.tipoAlternativa.deleteMany();
  await prisma.tipoQuestao.deleteMany();
  console.log('Banco de dados limpo.');
}

export async function seed(prisma: PrismaClient) {
  try {
    // Seed de tipos
    await seedTipoQuestao(prisma);
    console.log('Tipos de Questão criados com sucesso');

    await seedTipoAlternativa(prisma);
    console.log('Tipos de Alternativa criados com sucesso');

    // Seed de questionários
    await seedLinguagem(prisma);
    console.log('Questionário de Linguagem criado com sucesso');

    await seedTemperamento(prisma);
    console.log('Questionário de Temperamento criado com sucesso');

    await seedLinguagemAutor(prisma);
    console.log('Questionário de Linguagem do Autor criado com sucesso');

    await seedTemperamentoAutor(prisma);
    console.log('Questionário de Temperamento do Autor criado com sucesso');

  } catch (error) {
    console.error('Erro durante o seed:', error);
    throw error;
  }
}

async function createInitialData() {
  try {
    await cleanDatabase();
    await seed(prisma);

  } catch (error) {
    console.error('Erro durante a criação dos seeds:', error);
    throw error;
  }
}

createInitialData()
  .catch((error) => {
    console.error('Seed falhou:', error);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
    console.log('Conexão com o banco de dados encerrada.');
  });
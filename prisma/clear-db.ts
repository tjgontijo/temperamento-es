import { PrismaClient } from '@prisma/client/edge'

async function clearDatabase() {
  const prisma = new PrismaClient()

  try {
    // Deletar registros em ordem reversa para evitar violações de chave estrangeira
    await prisma.alternativa.deleteMany()
    await prisma.questao.deleteMany()
    await prisma.tipoAlternativa.deleteMany()
    await prisma.tipoQuestao.deleteMany()

    console.log('Todos os registros foram deletados com sucesso!')
  } catch (error) {
    console.error('Erro ao limpar o banco de dados:', error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

clearDatabase()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })

import { PrismaClient } from '@prisma/client'

export const seedTipoQuestao = async (prisma: PrismaClient) => {
  const tiposQuestao = [
    {
      nome: 'TEMPERAMENTO',
      descricao: 'Cuestiones relacionadas con el temperamento'
    },
    {
      nome: 'LINGUAGEM',
      descricao: 'Cuestiones sobre el lenguaje del amor'
    },
    {
      nome: 'TEMPERAMENTO_AUTOR',
      descricao: 'Cuestiones sobre el temperamento del autor'
    },
    {
      nome: 'LINGUAGEM_AUTOR',
      descricao: 'Cuestiones sobre el lenguaje del amor del autor'
    }
  ]

  for (const tipo of tiposQuestao) {
    await prisma.tipoQuestao.create({
      data: tipo
    })
  }
}
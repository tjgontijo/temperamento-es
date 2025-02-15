import { cache } from 'react'
import prisma from '@/lib/prisma'
import { 
  QuestaoWithRelations
} from '@/types/prisma'

export const QuestaoRepository = {
  findById: cache(async (id: string): Promise<QuestaoWithRelations | null> => {
    return prisma.questao.findUnique({
      where: { id },
      include: { 
        tipoQuestao: true,
        alternativas: {
          include: { tipoAlternativa: true }
        }
      }
    })
  }),

  findByTipo: cache(async (tipo: string): Promise<QuestaoWithRelations[]> => {
    return prisma.questao.findMany({
      where: { 
        tipoQuestao: { 
          nome: tipo 
        } 
      },
      include: { 
        tipoQuestao: true,
        alternativas: {
          include: { tipoAlternativa: true }
        }
      }
    })
  })
}

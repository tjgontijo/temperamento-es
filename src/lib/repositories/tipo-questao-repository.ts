import { cache } from 'react'
import prisma from '@/lib/prisma'
import { 
  TipoQuestaoCreateInput, 
  TipoQuestaoWithRelations 
} from '@/types/prisma'

export const TipoQuestaoRepository = {
  findAll: cache(async (): Promise<TipoQuestaoWithRelations[]> => {
    return prisma.tipoQuestao.findMany({
      include: {
        _count: {
          select: { questoes: true }
        }
      }
    })
  }),

  findByNome: cache(async (nome: string): Promise<TipoQuestaoWithRelations | null> => {
    return prisma.tipoQuestao.findUnique({
      where: { nome },
      include: {
        _count: {
          select: { questoes: true }
        }
      }
    })
  }),

  // Server Action para criar tipo de questão
  create: async (data: TipoQuestaoCreateInput): Promise<TipoQuestaoWithRelations> => {
    'use server'
    return prisma.tipoQuestao.create({ 
      data,
      include: {
        _count: {
          select: { questoes: true }
        }
      }
    })
  }
}

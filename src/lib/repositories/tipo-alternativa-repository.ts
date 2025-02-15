import { cache } from 'react'
import prisma from '@/lib/prisma'
import { 
  TipoAlternativaCreateInput, 
  TipoAlternativaWithRelations 
} from '@/types/prisma'

export const TipoAlternativaRepository = {
  findAll: cache(async (): Promise<TipoAlternativaWithRelations[]> => {
    return prisma.tipoAlternativa.findMany({
      include: {
        _count: {
          select: { alternativas: true }
        }
      }
    })
  }),

  findByNome: cache(async (nome: string): Promise<TipoAlternativaWithRelations | null> => {
    return prisma.tipoAlternativa.findUnique({
      where: { nome },
      include: {
        _count: {
          select: { alternativas: true }
        }
      }
    })
  }),

  findByGrupo: cache(async (grupo: string): Promise<TipoAlternativaWithRelations[]> => {
    return prisma.tipoAlternativa.findMany({
      where: { grupo },
      include: {
        _count: {
          select: { alternativas: true }
        }
      }
    })
  }),

  // Server Action para criar tipo de alternativa
  create: async (data: TipoAlternativaCreateInput): Promise<TipoAlternativaWithRelations> => {
    'use server'
    return prisma.tipoAlternativa.create({ 
      data,
      include: {
        _count: {
          select: { alternativas: true }
        }
      }
    })
  }
}

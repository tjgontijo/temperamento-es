import { PrismaClient } from '@prisma/client'

export const seedTipoAlternativa = async (prisma: PrismaClient) => {
  const tiposAlternativa = [
    // Tipos de Lenguaje del Amor
    {
      nome: 'PALAVRA_AFIRMACAO',
      descricao: 'Valora palabras de aliento y reconocimiento',
      grupo: 'LINGUAGEM_AMOR'
    },
    {
      nome: 'TOQUE_FISICO',
      descricao: 'Valora demostraciones físicas de cariño',
      grupo: 'LINGUAGEM_AMOR'
    },
    {
      nome: 'TEMPO_QUALIDADE',
      descricao: 'Valora atención y momentos dedicados',
      grupo: 'LINGUAGEM_AMOR'
    },
    {
      nome: 'ATOS_SERVICO',
      descricao: 'Valora ayuda práctica y gestos de cuidado',
      grupo: 'LINGUAGEM_AMOR'
    },
    {
      nome: 'PRESENTES',
      descricao: 'Valora regalos significativos',
      grupo: 'LINGUAGEM_AMOR'
    },
    
    // Tipos de Temperamento
    {
      nome: 'SANGUINIO',
      descricao: 'Temperamento extrovertido y comunicativo',
      grupo: 'TEMPERAMENTO'
    },
    {
      nome: 'COLERICO',
      descricao: 'Temperamento asertivo y orientado a objetivos',
      grupo: 'TEMPERAMENTO'
    },
    {
      nome: 'MELANCOLICO',
      descricao: 'Temperamento analítico y perfeccionista',
      grupo: 'TEMPERAMENTO'
    },
    {
      nome: 'FLEUMATICO',
      descricao: 'Temperamento calmado y pacífico',
      grupo: 'TEMPERAMENTO'
    }
  ]

  for (const tipo of tiposAlternativa) {
    await prisma.tipoAlternativa.create({
      data: tipo
    })
  }
}
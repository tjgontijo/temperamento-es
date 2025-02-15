import { 
  Prisma, 
  TipoQuestao, 
  TipoAlternativa, 
  Questao, 
  Alternativa 
} from '@prisma/client'

// Tipos de Input com validações
export type TipoQuestaoCreateInput = Prisma.TipoQuestaoCreateInput & {
  nome: string;
  descricao?: string;
}

export type TipoAlternativaCreateInput = Prisma.TipoAlternativaCreateInput & {
  nome: string;
  descricao?: string;
  grupo: 'LINGUAGEM_AMOR' | 'TEMPERAMENTO';
}

export type QuestaoCreateInput = Omit<Prisma.QuestaoCreateInput, 'tipoQuestao'> & {
  tipoQuestaoId: string;
  pergunta: string;
  complemento?: string;
}

export type AlternativaCreateInput = Omit<Prisma.AlternativaCreateInput, 'tipoAlternativa'> & {
  texto: string;
  tipoAlternativaId: string;
}

// Tipos de Resposta com inclusões
export type TipoQuestaoWithRelations = TipoQuestao & {
  _count?: {
    questoes: number;
  }
}

export type TipoAlternativaWithRelations = TipoAlternativa & {
  _count?: {
    alternativas: number;
  }
}

export type QuestaoWithRelations = Questao & {
  tipoQuestao: TipoQuestao;
  alternativas: AlternativaWithRelations[];
}

export type AlternativaWithRelations = Alternativa & {
  tipoAlternativa: TipoAlternativa;
}

'use server';

import prisma from "@/lib/prisma";
import { salvarResultadosQuestionario } from '@/utils/storage';

// Tipos baseados no schema.prisma
type TipoQuestao = {
  id: string;
  nome: string;
  descricao?: string | null;
};

type TipoAlternativa = {
  id: string;
  nome: string;
  descricao?: string | null;
  grupo?: string | null;
};

type Alternativa = {
  id: string;
  questaoId: string;
  texto: string;
  tipoAlternativaId: string;
  tipoAlternativa: TipoAlternativa;
};

type QuestaoComTipo = {
  id: string;
  tipoQuestaoId: string;
  tipoQuestao: TipoQuestao;
  pergunta: string;
  complemento?: string | null;
  alternativas: Alternativa[];
  createdAt: Date;
  updatedAt: Date;
};

type RespostaData = {
  tipoQuestaoId: string;
  tipoAlternativaId: string;
};

type ResultadoCategoria = {
  principal: string;
  secundario: string;
  totalPontos: number;
  quantidadePrincipal: number;
  quantidadeSecundario: number;
  percentualPrincipal: number;
  percentualSecundario: number;
};

type ResultadoCalculado = {
  temperamento: ResultadoCategoria;
  linguagem: ResultadoCategoria;
  temperamentoAutor: ResultadoCategoria;
  linguagemAutor: ResultadoCategoria;
};

const resultadoPadrao: ResultadoCategoria = {
  principal: '',
  secundario: '',
  totalPontos: 0,
  quantidadePrincipal: 0,
  quantidadeSecundario: 0,
  percentualPrincipal: 0,
  percentualSecundario: 0,
};

export async function calcularResultado(respostas: Record<string, RespostaData>): Promise<ResultadoCalculado> {
  if (!respostas || Object.keys(respostas).length === 0) {
    return {
      temperamento: resultadoPadrao,
      linguagem: resultadoPadrao,
      temperamentoAutor: resultadoPadrao,
      linguagemAutor: resultadoPadrao,
    };
  }

  const tiposAlternativa = await prisma.tipoAlternativa.findMany({
    where: {
      id: {
        in: Object.values(respostas).map(r => r.tipoAlternativaId),
      },
    },
    select: {
      id: true,
      nome: true,
    },
  });

  if (!tiposAlternativa || tiposAlternativa.length === 0) {
    return {
      temperamento: resultadoPadrao,
      linguagem: resultadoPadrao,
      temperamentoAutor: resultadoPadrao,
      linguagemAutor: resultadoPadrao,
    };
  }

  const nomesPorId = tiposAlternativa.reduce((acc: Record<string, string>, tipo) => {
    acc[tipo.id] = tipo.nome;
    return acc;
  }, {});

  const questoes: QuestaoComTipo[] = await prisma.questao.findMany({
    where: {
      id: {
        in: Object.keys(respostas),
      },
    },
    include: {
      tipoQuestao: true,
      alternativas: {
        include: {
          tipoAlternativa: true,
        },
      },
    },
  });

  const contadores: Record<string, Record<string, number>> = {};

  questoes.forEach((questao) => {
    const resposta = respostas[questao.id];
    if (!resposta) return;

    const tipoQuestao = questao.tipoQuestao.nome;
    const tipoAltId = resposta.tipoAlternativaId;

    const categoria = tipoQuestao;

    contadores[categoria] = contadores[categoria] || {};
    contadores[categoria][tipoAltId] = (contadores[categoria][tipoAltId] || 0) + 1;
  });

  function calcularResultadoPorCategoria(categoria: string): ResultadoCategoria {
    const contadoresDaCategoria = contadores[categoria];
    if (!contadoresDaCategoria) {
      return resultadoPadrao;
    }

    const totalRespostas = Object.values(contadoresDaCategoria).reduce((a, b) => a + b, 0);
    if (totalRespostas === 0) {
      return resultadoPadrao;
    }

    const tiposOrdenados = Object.entries(contadoresDaCategoria)
      .sort((a, b) => b[1] - a[1]);

    const principalId = tiposOrdenados[0]?.[0];
    const secundarioId = tiposOrdenados[1]?.[0];

    const mapeamentoNomes: Record<string, string> = {
      'COLERICO': 'Colérico',
      'FLEUMATICO': 'Fleumático',
      'SANGUINIO': 'Sanguíneo',
      'MELANCOLICO': 'Melancólico',
      'PALAVRA_AFIRMACAO': 'Palavras de Afirmação',
      'TOQUE_FISICO': 'Toque Físico',
      'TEMPO_QUALIDADE': 'Tempo de Qualidade',
      'ATOS_SERVICO': 'Atos de Serviço',
      'PRESENTES': 'Presentes',
    };

    return {
      principal: principalId ? (mapeamentoNomes[nomesPorId[principalId]] || nomesPorId[principalId]) : '',
      secundario: secundarioId ? (mapeamentoNomes[nomesPorId[secundarioId]] || nomesPorId[secundarioId]) : '',
      totalPontos: totalRespostas,
      quantidadePrincipal: tiposOrdenados[0]?.[1] || 0,
      quantidadeSecundario: tiposOrdenados[1]?.[1] || 0,
      percentualPrincipal: principalId ? tiposOrdenados[0][1] / totalRespostas : 0,
      percentualSecundario: secundarioId ? tiposOrdenados[1][1] / totalRespostas : 0,
    };
  }

  const resultado: ResultadoCalculado = {
    temperamento: calcularResultadoPorCategoria('TEMPERAMENTO'),
    linguagem: calcularResultadoPorCategoria('LINGUAGEM'),
    temperamentoAutor: calcularResultadoPorCategoria('TEMPERAMENTO_AUTOR'),
    linguagemAutor: calcularResultadoPorCategoria('LINGUAGEM_AUTOR'),
  };

  if (typeof window !== 'undefined') {
    salvarResultadosQuestionario({
      temperamento: resultado.temperamento,
      linguagem: resultado.linguagem,
      temperamentoAutor: resultado.temperamentoAutor,
      linguagemAutor: resultado.linguagemAutor,
    });
  }

  return resultado;
}

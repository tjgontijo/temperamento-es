'use client';

const RESPOSTAS_STORAGE_KEY = 'respostas_data';
const CONTEXTO_STORAGE_KEY = 'contexto_data';
const ANALISE_STORAGE_KEY = 'analise_data';
const RESULTADOS_STORAGE_KEY = 'resultados_questionario';
const TIPOS_STORAGE_KEY = 'tipos_questionario';

// Tipos de Resposta
type RespostaData = {
  tipoQuestaoId: string;
  tipoAlternativaId: string;
  alternativaId: string;
};

// Tipos de Contexto
type ContextoData = {
  nome_autor: string;
  nome_parceiro: string;
  historia_relacionamento: string;
};

// Tipo de Resultado de Categoria
type ResultadoCategoria = {
  principal: string;
  secundario: string;
  totalPontos: number;
  quantidadePrincipal: number;
  quantidadeSecundario: number;
  percentualPrincipal: number;
  percentualSecundario: number;
};

// Tipo de Resultado Calculado
type ResultadoCalculado = {
  temperamento: ResultadoCategoria;
  linguagem: ResultadoCategoria;
  temperamentoAutor: ResultadoCategoria;
  linguagemAutor: ResultadoCategoria;
  timestamp?: number;
};

// Tipos de Questionário
type TiposQuestionario = {
  temperamento: {
    principal: string;
    secundario: string;
  };
  linguagem: {
    principal: string;
    secundario: string;
  };
  temperamentoAutor: {
    principal: string;
    secundario: string;
  };
  linguagemAutor: {
    principal: string;
    secundario: string;
  };
};

export const salvarResposta = (
  questaoId: string,
  tipoQuestaoId: string,
  tipoAlternativaId: string,
  alternativaId: string
) => {
  if (!questaoId || !tipoQuestaoId || !tipoAlternativaId || !alternativaId) {
    console.error('Dados inválidos para salvar resposta:', { questaoId, tipoQuestaoId, tipoAlternativaId, alternativaId });
    return;
  }

  try {
    const data = localStorage.getItem(RESPOSTAS_STORAGE_KEY);
    const respostas = data ? JSON.parse(data) : {};
    
    const novasRespostas = {
      ...respostas,
      [questaoId]: {
        tipoQuestaoId,
        tipoAlternativaId,
        alternativaId
      }
    };
    
    localStorage.setItem(RESPOSTAS_STORAGE_KEY, JSON.stringify(novasRespostas));
  } catch (error) {
    console.error('Erro ao salvar resposta:', error);
  }
};

export const obterRespostas = (): Record<string, RespostaData> => {
  if (typeof window === 'undefined') {
    return {};
  }

  const data = localStorage.getItem(RESPOSTAS_STORAGE_KEY);
  if (!data) {
    return {};
  }

  try {
    const respostas = JSON.parse(data);
    return respostas;
  } catch (error) {
    console.error('Erro ao parsear respostas:', error);
    return {};
  }
};

export const salvarDadosContexto = (dados: ContextoData) => {
  if (!dados.nome_autor || !dados.nome_parceiro) {
    throw new Error('Nome do autor e parceiro são obrigatórios');
  }

  try {
    if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
      throw new Error('localStorage não suportado');
    }

    const dadosSerializados = JSON.stringify({
      nome_autor: dados.nome_autor.trim(),
      nome_parceiro: dados.nome_parceiro.trim(),
      historia_relacionamento: (dados.historia_relacionamento || '').trim()
    });

    localStorage.setItem(CONTEXTO_STORAGE_KEY, dadosSerializados);
  } catch {
    // Silenciosamente lida com erros de salvamento
  }
};

export const obterDadosContexto = (): ContextoData | null => {
  if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
    return null;
  }

  try {
    const data = localStorage.getItem(CONTEXTO_STORAGE_KEY);
    
    if (!data) {
      return null;
    }

    const dadosParseados = JSON.parse(data);

    if (!dadosParseados.nome_autor || !dadosParseados.nome_parceiro) {
      return null;
    }

    return dadosParseados;
  } catch {
    return null;
  }
};

export const limparRespostas = () => {
  localStorage.removeItem(RESPOSTAS_STORAGE_KEY);
};

export const limparDadosContexto = () => {
  localStorage.removeItem(CONTEXTO_STORAGE_KEY);
};

export const limparTodosDados = () => {
  limparRespostas();
  limparDadosContexto();
  limparAnalise();
  limparResultadosQuestionario();
  limparTiposQuestionario();
};

export const salvarAnalise = (analise: {
  titulo: string;
  subtitulo: string;
  paragrafos: string[];
}) => {
  localStorage.setItem(ANALISE_STORAGE_KEY, JSON.stringify(analise));
};

export const obterAnalise = () => {
  if (typeof window === 'undefined') {
    return null;
  }

  const data = localStorage.getItem(ANALISE_STORAGE_KEY);
  return data ? JSON.parse(data) : null;
};

export const limparAnalise = () => {
  localStorage.removeItem(ANALISE_STORAGE_KEY);
};

export const salvarResultadosQuestionario = (resultado: ResultadoCalculado) => {  
  
  if (typeof window === 'undefined') {    
    return;
  }

  try {
    const resultadoComTimestamp = {
      ...resultado,
      timestamp: Date.now()
    };
    localStorage.setItem(RESULTADOS_STORAGE_KEY, JSON.stringify(resultadoComTimestamp));    
  } catch (error) {
    console.error('Erro ao salvar resultados:', error);
  }
};

export const obterResultadosQuestionario = (): ResultadoCalculado | null => {
  if (typeof window === 'undefined') {
    console.error('Ambiente de navegador não detectado');
    return null;
  }

  const data = localStorage.getItem(RESULTADOS_STORAGE_KEY);
  // console.log('Dados brutos do localStorage:', data);

  if (!data) {
    console.error('Nenhum resultado encontrado no localStorage');
    return null;
  }

  try {
    const resultado = JSON.parse(data);
    // console.log('Resultado parseado:', resultado);
    return resultado;
  } catch (error) {
    console.error('Erro ao parsear resultados:', error);
    return null;
  }
};

export const limparResultadosQuestionario = () => {
  if (typeof window === 'undefined') {
    return;
  }
  localStorage.removeItem(RESULTADOS_STORAGE_KEY);
};

export const salvarTiposQuestionario = (tipos: TiposQuestionario) => {
  if (typeof window === 'undefined') {
    return;
  }
  try {
    localStorage.setItem(TIPOS_STORAGE_KEY, JSON.stringify(tipos));
  } catch (error) {
    console.error('Erro ao salvar tipos:', error);
  }
};

export const obterTiposQuestionario = (): TiposQuestionario | null => {
  if (typeof window === 'undefined') {
    console.warn('Tentativa de obter tipos em ambiente sem localStorage');
    return null;
  }

  const tiposString = localStorage.getItem(TIPOS_STORAGE_KEY);
   
  if (!tiposString) {
    console.warn('Nenhum tipo encontrado no localStorage');
    return null;
  }

  try {
    const tipos = JSON.parse(tiposString);
    return tipos;
  } catch (error) {
    console.error('Erro ao parsear tipos:', error);
    return null;
  }
};

export const limparTiposQuestionario = () => {
  if (typeof window === 'undefined') {
    return;
  }
  localStorage.removeItem(TIPOS_STORAGE_KEY);
};

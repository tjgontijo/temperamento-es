import { analisarCasal } from './couple-analysis-openai';
import { analisarCasalGroq } from './couple-analysis-groq';

interface ResultadoAnalise {
  titulo: string;
  subtitulo: string;
  paragrafos: string[];
}

interface DadosAnalise {
  nomeAutor: string;
  nomeParceiro: string;
  temperamentoParceiro: string;
  linguagemParceiro: string;
  temperamentoAutor: string;
  linguagemAutor: string;
  historiaRelacionamento: string;
}

export async function realizarAnalise(
  dadosAnalise: DadosAnalise
): Promise<{ 
  sucesso: boolean; 
  resultado?: ResultadoAnalise; 
  mensagem: string;
  provedor?: 'groq' | 'openai';
}> {
  try {
    console.log('Usando IA Groq para análise de casal');
    const resultadoGroq = await analisarCasalGroq(
      dadosAnalise.nomeAutor, 
      dadosAnalise.nomeParceiro,
      dadosAnalise.temperamentoParceiro,
      dadosAnalise.linguagemParceiro,
      dadosAnalise.temperamentoAutor,
      dadosAnalise.linguagemAutor,
      dadosAnalise.historiaRelacionamento
    );
    
    return {
      sucesso: true,
      resultado: resultadoGroq,
      mensagem: 'Análise realizada com sucesso - Groq',
      provedor: 'groq'
    };
  } catch {
    console.log('Usando IA OpenAI para análise de casal');
    try {
      const resultadoOpenAI = await analisarCasal(
        dadosAnalise.nomeAutor, 
        dadosAnalise.nomeParceiro,
        dadosAnalise.temperamentoParceiro,
        dadosAnalise.linguagemParceiro,
        dadosAnalise.temperamentoAutor,
        dadosAnalise.linguagemAutor,
        dadosAnalise.historiaRelacionamento
      );
      
      return {
        sucesso: true,
        resultado: resultadoOpenAI,
        mensagem: 'Análise realizada com sucesso - 4o',
        provedor: 'openai'
      };
    } catch {
      // Se ambos falharem, retorna erro amigável
      return {
        sucesso: false,
        mensagem: 'Não foi possível realizar a análise no momento. Tente novamente mais tarde.',
        provedor: undefined
      };
    }
  }
}

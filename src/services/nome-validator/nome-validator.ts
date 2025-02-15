import { validarNome } from './nome-validator-openai';
import { validarNomeGroq } from './nome-validator-groq';

export async function validarNomeRedundante(nome: string): Promise<{ 
  valido: boolean; 
  mensagem: string;
  provedor?: 'groq' | 'openai';
}> {
  try {
    console.log('Usando IA Groq para validação de nome');
    const resultadoGroq = await validarNomeGroq(nome);
    return {
      ...resultadoGroq,
      provedor: 'groq'
    };
  } catch {
    console.log('Usando IA OpenAI para validação de nome');
    try {
      const resultadoOpenAI = await validarNome(nome);
      return {
        ...resultadoOpenAI,
        provedor: 'openai'
      };
    } catch {
      // Se ambos falharem, retorna erro amigável
      return {
        valido: true, // Permite passar para não bloquear o usuário
        mensagem: 'Não foi possível validar o nome no momento, mas você pode continuar.',
        provedor: undefined
      };
    }
  }
}

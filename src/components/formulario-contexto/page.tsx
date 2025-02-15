'use client';

import { useState } from 'react';
import { InputContexto } from './input-contexto';
import { Introducao } from '@/components/questionario/introducao';
import { salvarDadosContexto, obterDadosContexto } from '@/utils/storage';

interface FormularioContextoProps {
  onConcluido?: () => void;
}

const questoesContexto: Array<{
  id: string;
  tipo: 'input' | 'textarea';
  pergunta: string;
  descricao?: string;
}> = [
  {
    "id": "nome_autor",
    "tipo": "input",
    "pergunta": "¿Cuál es tu Primer Nombre?",    
    "descricao": "Necesitamos tu nombre exacto para garantizar que el análisis sea preciso."
  },
  {
    "id": "nome_parceiro",
    "tipo": "input",
    "pergunta": "¿Cuál es el Primer Nombre de la persona que quieres analizar?",    
    "descricao": "El nombre es esencial para calcular la compatibilidad entre ustedes."
  },
  {
    "id": "historia_relacionamento",
    "tipo": "textarea",
    "pergunta": "Cuéntame un poco sobre la historia de ustedes dos",    
    "descricao": "Este campo es opcional, sin embargo, cuantos más detalles compartas sobre cómo se conocieron y cómo es la relación de ustedes, más preciso será el análisis."
  }
];

export function FormularioContexto({ onConcluido }: FormularioContextoProps) {
  const [mostrarIntroducao, setMostrarIntroducao] = useState(true);
  const [questaoAtual, setQuestaoAtual] = useState(0);
  const [respostas, setRespostas] = useState<Record<string, string>>({});

  const handleResposta = (valor: string) => {
    const questao = questoesContexto[questaoAtual];
    const novasRespostas = { ...respostas, [questao.id]: valor };
    setRespostas(novasRespostas);
  };

  const handleNext = async () => {
    if (questaoAtual < questoesContexto.length - 1) {
      setQuestaoAtual(prev => prev + 1);
      return;
    }

    // Última questão
    const validarCampo = (campo: string) => {
      if (!campo || campo.trim() === '') {
        return false;
      }
      return true;
    };

    const nomeAutorValido = validarCampo(respostas.nome_autor);
    const nomeParceiroValido = validarCampo(respostas.nome_parceiro);

    if (!nomeAutorValido || !nomeParceiroValido) {
      return;
    }

    // Preparar dados para salvar
    const dadosContexto = {
      nome_autor: respostas.nome_autor.trim(),
      nome_parceiro: respostas.nome_parceiro.trim(),
      historia_relacionamento: (respostas.historia_relacionamento || '').trim()
    };

    try {
      // Salvamos as respostas
      await salvarDadosContexto(dadosContexto);
      
      // Verificar se os dados foram realmente salvos
      const dadosSalvos = obterDadosContexto();
      
      // Verificação adicional
      if (!dadosSalvos) {
        return;
      }

      // Notifica o componente pai que o formulário foi concluído
      if (onConcluido) {
        onConcluido();
      }
    } catch {
      // Silenciosamente lida com erros de salvamento
    }
  };

  const handleBack = () => {
    if (questaoAtual > 0) {
      setQuestaoAtual(prev => prev - 1);
    }
  };

  if (mostrarIntroducao) {
    return <Introducao onStart={() => setMostrarIntroducao(false)} />;
  }

  const questao = questoesContexto[questaoAtual];
  const progresso = ((questaoAtual + 1) / questoesContexto.length) * 100;

  return (
    <InputContexto
      pergunta={questao.pergunta}
      descricao={questao.descricao}
      tipo={questao.tipo}
      valor={respostas[questao.id] || ''}
      onChange={handleResposta}
      onNext={handleNext}
      onBack={handleBack}
      progresso={progresso}
      isUltima={questaoAtual === questoesContexto.length - 1}
      isPrimeira={questaoAtual === 0}
    />
  );
}

'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface QuestaoProps {
  pergunta: string;
  complemento?: string;
  tipo: string;
  opcoes?: Array<{ 
    valor: string; 
    texto: string;
  }>;
  respostaSelecionada: string;
  onResposta: (valor: string) => void;
  onBack?: () => void;
  progresso: number;
  isUltima?: boolean;
  isPrimeira?: boolean;
  nomePretendente?: string;
  isLoading?: boolean;
}

export function Questao({
  pergunta,
  complemento,
  tipo,
  opcoes = [],
  respostaSelecionada,
  onResposta,
  onBack,
  progresso,
  isUltima = false,
  isPrimeira = false,
  nomePretendente,
  isLoading = false,
}: QuestaoProps) {
  const [localValor, setLocalValor] = useState(respostaSelecionada);

  // Atualiza o valor local quando a pergunta ou valor mudam
  useEffect(() => {
    setLocalValor(respostaSelecionada);
  }, [pergunta, respostaSelecionada]);

  const handleChange = (novoValor: string) => {
    setLocalValor(novoValor);
    onResposta(novoValor);
  };

  const handleOpcaoClick = (valor: string) => {
    setLocalValor(valor);
    onResposta(valor);
  };

  // Formata o texto substituindo as variáveis
  const formatarTextoComDestaque = (texto: string, nomePretendente?: string) => {
    if (!texto) return texto;

    const nomeDestacado = nomePretendente || 'ele';
    
    return texto.replace(
      /\{nome\}/g, 
      `<span class="font-bold text-purple-600">${nomeDestacado}</span>`
    );
  };

  // Garante que opcoes é sempre um array
  const opcoesArray = Array.isArray(opcoes) ? opcoes : [];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-50 via-white to-pink-50 px-4">
      {/* Barra de Progresso Fixa no Topo */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-100">
        <motion.div
          className="h-full bg-purple-600"
          initial={{ width: 0 }}
          animate={{ width: `${progresso}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Container Principal - Centralizado com largura máxima */}
      <div className="w-full max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="space-y-10 w-full"
        >
          {/* Pergunta e Complemento */}
          <AnimatePresence mode="wait">
            <motion.div
              key={pergunta}
              className="space-y-3 text-left px-4"
            >
              <motion.h2 
                className="text-2xl font-medium text-gray-900 leading-tight"
                dangerouslySetInnerHTML={{ 
                  __html: formatarTextoComDestaque(
                    pergunta, 
                    nomePretendente
                  ) 
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
              {complemento && (
                <motion.p 
                  className="text-base font-normal text-gray-500 leading-relaxed"
                  dangerouslySetInnerHTML={{ 
                    __html: formatarTextoComDestaque(
                      complemento, 
                      nomePretendente
                    ) 
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Campo de Input ou Opções */}
          <motion.div
            className="space-y-4 w-full px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {tipo === 'input' || tipo === 'textarea' ? (
              tipo === 'textarea' ? (
                <textarea
                  className="w-full text-lg p-6 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:ring-purple-400 transition-colors min-h-[150px] resize-none bg-white shadow-sm"
                  value={localValor}
                  onChange={(e) => handleChange(e.target.value)}
                  placeholder="Digite sua resposta aqui..."
                />
              ) : (
                <Input
                  type="text"
                  value={localValor}
                  onChange={(e) => handleChange(e.target.value)}
                  className="w-full text-lg p-6 h-14 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:ring-purple-400 transition-colors text-center bg-white shadow-sm"
                  placeholder="Digite sua resposta aqui..."
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && localValor.trim()) {
                      // handleNext();
                    }
                  }}
                />
              )
            ) : (
              <div className="grid gap-3">
                {opcoesArray.map((opcao) => (
                  <Button
                    key={opcao.valor}
                    onClick={() => handleOpcaoClick(opcao.valor)}
                    variant="questionario"
                    className={`w-full p-6 h-auto text-left flex items-start justify-start whitespace-normal font-normal ${
                      opcao.valor === localValor
                        ? 'border-2 border-purple-600 text-gray-700 bg-purple-50'
                        : 'bg-white text-gray-700 border-2 border-gray-200 hover:bg-white'
                    }`}
                  >
                    <span dangerouslySetInnerHTML={{ 
                      __html: formatarTextoComDestaque(
                        opcao.texto, 
                        nomePretendente
                      ) 
                    }} />
                  </Button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Botões de Navegação */}
          <motion.div
            className="flex flex-col w-full px-4 pt-4 space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {tipo === 'input' || tipo === 'textarea' ? (
              <Button
                // onClick={handleNext}
                disabled={!localValor.trim() || isLoading}
                className="w-full bg-purple-600 h-14 text-base font-medium rounded-xl transition-all transform active:scale-[0.98] shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : isUltima ? (
                  'Finalizar'
                ) : (
                  'Continuar'
                )}
              </Button>
            ) : null}

            {!isPrimeira && onBack && (
              <Button
                onClick={onBack}
                variant="ghost"
                className="w-full text-gray-400 gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

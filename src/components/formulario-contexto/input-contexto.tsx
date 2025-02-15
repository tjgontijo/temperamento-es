'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft } from 'lucide-react';
import { validarNomeRedundante } from '@/services/nome-validator/nome-validator';

interface InputContextoProps {
  pergunta: string;
  descricao?: string;
  tipo: 'input' | 'textarea';
  valor: string;
  onChange: (valor: string) => void;
  onNext?: () => void;
  onBack?: () => void;
  progresso: number;
  isUltima?: boolean;
  isPrimeira?: boolean;
}

export function InputContexto({
  pergunta,
  descricao,
  tipo,
  valor,
  onChange,
  onNext,
  onBack,
  progresso,
  isUltima = false,
  isPrimeira = false,
}: InputContextoProps) {
  const [localValor, setLocalValor] = useState(valor);
  const [erro, setErro] = useState<string>('');
  const [validando, setValidando] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    setLocalValor(valor);
  }, [valor]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [tipo]);

  const handleChange = (novoValor: string) => {
    setErro(''); // Limpa mensagem de erro ao digitar

    if (tipo === 'input') {
      // Remove caracteres especiais e números, mantém apenas letras e espaços
      novoValor = novoValor.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
      
      // Remove espaços extras e pega apenas o primeiro nome
      novoValor = novoValor.trim().split(/\s+/)[0] || '';
      
      // Limita a 50 caracteres
      novoValor = novoValor.slice(0, 50);
      
      // Capitaliza a primeira letra
      novoValor = novoValor.charAt(0).toUpperCase() + novoValor.slice(1).toLowerCase();

      // Se o usuário tentar digitar mais nomes, mostra uma mensagem
      if (novoValor.trim() !== novoValor.trim().split(/\s+/)[0]) {
        setErro('Por favor, escribe solo el primer nombre');
      }
    }
    // Para textarea não fazemos nenhuma formatação, aceitamos o texto como está

    setLocalValor(novoValor);
    onChange(novoValor);
  };

  const handleNext = async () => {
    const valorTratado = localValor.trim();
    
    // Validações locais para campos de nome
    if (tipo === 'input') {
      // 1. Validação de tamanho mínimo
      if (valorTratado.length < 2) {
        setErro('El nombre necesita tener al menos 2 letras');
        return;
      }

      // 2. Validação de tamanho máximo
      if (valorTratado.length > 50) {
        setErro('El nombre no puede tener más de 50 letras');
        return;
      }

      // 3. Validação de nome único (sem sobrenome)
      if (valorTratado.includes(' ')) {
        setErro('Por favor, escribe solo el primer nombre');
        return;
      }

      // 4. Validação de caracteres válidos
      if (!/^[a-zA-ZÀ-ÿ]+$/.test(valorTratado)) {
        setErro('El nombre debe contener solo letras');
        return;
      }

      // 5. Validação com Groq/OpenAI (apenas se passar em todas as validações anteriores)
      try {
        setValidando(true);
        const resultado = await validarNomeRedundante(valorTratado);
        if (!resultado.valido) {
          setErro(resultado.mensagem);
          setValidando(false);
          return;
        }
        setValidando(false);
      } catch {
        setValidando(false);
        // Continua mesmo com erro na validação para não bloquear o usuário
      }
    }
    
    // Validação para textarea
    if (tipo === 'textarea') {
      // Permite avanço mesmo com textarea vazio
      // Não faz nada se o campo estiver em branco
    }
    
    // Para textarea, sempre permite avanço, mesmo com valor vazio
    if (tipo === 'textarea') {
      onNext?.();
      return;
    }
    
    if (valorTratado && onNext) {
      onNext();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-50 via-white to-pink-50 px-4">
      {/* Barra de Progresso */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-100">
        <motion.div
          className="h-full bg-purple-600"
          initial={{ width: 0 }}
          animate={{ width: `${progresso}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Container Principal */}
      <div className="w-full max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="space-y-10 w-full"
        >
          {/* Pergunta e Descrição */}
          <AnimatePresence mode="wait">
            <motion.div
              key={pergunta}
              className="space-y-3 text-left px-4"
            >
              <motion.h2 
                className="text-2xl font-medium text-gray-900 leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {pergunta}
              </motion.h2>
              {descricao && (
                <motion.p 
                  className="text-base font-normal text-gray-500 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {descricao}
                </motion.p>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Campo de Input */}
          <motion.div
            className="space-y-4 w-full px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {tipo === 'textarea' ? (
              <div className="space-y-2">
                <textarea
                  ref={inputRef as React.RefObject<HTMLTextAreaElement>}
                  value={localValor}
                  onChange={(e) => handleChange(e.target.value)}
                  className={`w-full text-lg p-6 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:ring-purple-400 transition-colors min-h-[150px] resize-none bg-white shadow-sm`}
                  placeholder="Describe con tus propias palabras..."
                  maxLength={500}
                />
                <div className="text-right text-sm text-gray-400">
                  {localValor.length}/500 caracteres
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <Input
                  ref={inputRef as React.RefObject<HTMLInputElement>}
                  type="text"
                  value={localValor}
                  onChange={(e) => handleChange(e.target.value)}
                  className={`w-full text-lg p-6 border-2 rounded-xl focus:ring-purple-400 transition-colors text-center bg-white shadow-sm ${
                    erro ? 'border-red-300' : 'border-gray-200 focus:border-purple-400'
                  }`}
                  placeholder="Escribe solo el primer nombre..."
                  maxLength={50}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && localValor.trim()) {
                      handleNext();
                    }
                  }}
                />
                {erro && (
                  <p className="text-sm text-red-500 text-center animate-fadeIn">{erro}</p>
                )}
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
            <Button
              onClick={handleNext}
              disabled={tipo === 'input' ? (!localValor.trim() || validando) : validando}
              className="w-full bg-purple-600 hover:bg-purple-700 h-14 text-base font-medium rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {validando ? 'Validando...' : isUltima ? 'Iniciar Cuestionario' : 'Continuar'}
            </Button>

            {!isPrimeira && onBack && (
              <Button
                onClick={onBack}
                variant="ghost"
                className="w-full text-gray-400 hover:text-purple-600 hover:bg-purple-50 gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Volver
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

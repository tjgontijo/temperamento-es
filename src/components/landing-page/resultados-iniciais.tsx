'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaLock, FaUnlock, FaHeart } from 'react-icons/fa';

type PercentageCircleProps = {
  percentage: number;
  label: string;
  color: string;
  isDominant?: 'dominant' | 'secondary' | 'equal';
};

const PercentageCircle = ({ 
  percentage, 
  label, 
  color, 
  isDominant 
}: PercentageCircleProps) => (
  <div className="flex flex-col items-center group">
    <div 
      className="relative w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-105"
      style={{
        background: `conic-gradient(${color} ${percentage * 360}deg, #e0e0e0 ${percentage * 360}deg)`
      }}
    >
      <div className="absolute w-20 h-20 md:w-28 md:h-28 bg-white rounded-full flex items-center justify-center shadow-inner">
        <span className="text-2xl md:text-3xl font-bold text-gray-800">
          {Math.round(percentage * 100)}%
        </span>
      </div>
    </div>
    <div className="mt-4 text-center">
      <p className="text-sm md:text-base font-semibold text-gray-900 group-hover:text-indigo-700 transition">
        {label}
      </p>
      <p className="text-xs md:text-sm text-gray-600 italic font-light group-hover:text-indigo-600 transition">
        {isDominant === 'dominant' 
          ? 'Rasgo dominante' 
          : isDominant === 'secondary' 
            ? 'Influencia secundaria' 
            : 'Equilibrio emocional'}
      </p>
    </div>
  </div>
);

type ResultadosIniciaisProps = {
  nome_parceiro: string;
  analise: {
    titulo: string;
    subtitulo: string;
    paragrafos: string[];
    mensagem?: string;
    provedor?: 'groq' | 'openai';
  };
};

type DadosResultadoType = {
  temperamento: {
    principal: string;
    secundario: string;
    percentualPrincipal: number;
    percentualSecundario: number;
  };
  linguagem: {
    principal: string;
    secundario: string;
    percentualPrincipal: number;
    percentualSecundario: number;
  };
  temperamentoAutor: {
    principal: string;
    secundario: string;
    percentualPrincipal: number;
    percentualSecundario: number;
  };
  linguagemAutor: {
    principal: string;
    secundario: string;
    percentualPrincipal: number;
    percentualSecundario: number;
  };
};

const HeartAnimation = ({ isActive }: { isActive: boolean }) => {
  const hearts = Array(300).fill(0).map((_, index) => ({  
    id: index,
    x: Math.random() * 300 - 150,  
    initialY: window.innerHeight,  
    targetY: -window.innerHeight,  
    delay: Math.random() * 5,  
    scale: Math.random() * 0.7 + 0.3,  
    rotate: Math.random() * 360,
    opacity: Math.random() * 0.5 + 0.5,  
    size: Math.random() * 30 + 10  
  }));

  return isActive ? (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ 
            opacity: 0, 
            x: heart.x, 
            y: heart.initialY,  
            scale: 0,
            rotate: heart.rotate
          }}
          animate={{ 
            opacity: [0, heart.opacity, 1, 0.5, 0],  
            x: [heart.x, heart.x + Math.random() * 200 - 100],  
            y: [heart.initialY, heart.targetY],  
            scale: [0, heart.scale, 0],  
            rotate: heart.rotate + 360  
          }}
          transition={{
            duration: 8,  
            delay: heart.delay,
            repeat: 1,
            repeatType: 'loop',
            ease: "easeInOut"  
          }}
          className="absolute"
          style={{ 
            left: `${80 + heart.x / 2}%`,  
          }}
        >
          <FaHeart 
            className="drop-shadow-lg"  
            style={{ 
              width: `${heart.size}px`,  
              height: `${heart.size}px`,
              color: `rgba(255, 105, 180, ${heart.opacity})`,  
            }} 
          />
        </motion.div>
      ))}
    </div>
  ) : null;
};

const UnlockButton = ({ 
  isUnlocked, 
  onUnlock,
  isHeartAnimationActive
}: { 
  isUnlocked: boolean, 
  onUnlock: () => void,
  isHeartAnimationActive: boolean
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onUnlock}
      disabled={isUnlocked}
      className={`
        relative overflow-hidden rounded-full px-6 py-3 text-white font-bold 
        transition-all duration-300 ease-in-out
        ${isUnlocked 
          ? 'bg-green-500 cursor-not-allowed' 
          : 'bg-purple-600 hover:bg-purple-700'}
      `}
    >
      {/* Background de loading */}
      {!isUnlocked && (
        <motion.div
          className="absolute inset-0 bg-purple-400 z-0"
          initial={{ width: '0%' }}
          animate={{ 
            width: isHeartAnimationActive ? '100%' : '0%'
          }}
          transition={{ 
            duration: 8,  
            ease: 'linear'
          }}
        />
      )}

      {/* Conteúdo do botão */}
      <div className="relative z-10 flex items-center justify-center space-x-2">
        {isUnlocked ? (
          <>
            <FaUnlock className="w-5 h-5" />
            <span>Análisis desbloqueado</span>
          </>
        ) : (
          <>
            <FaLock className="w-5 h-5" />
            <span>Desbloquear análisis de pareja</span>
          </>
        )}
      </div>
    </motion.button>
  );
};

export function ResultadosIniciais({
  nome_parceiro,
  analise
}: ResultadosIniciaisProps) {
  const [dadosResultado, setDadosResultado] = useState<DadosResultadoType | null>(null);
  const [analiseUnlocked, setAnaliseUnlocked] = useState(false);
  const [isHeartAnimationActive, setIsHeartAnimationActive] = useState(false);

  useEffect(() => {
    const resultadosQuestionario = localStorage.getItem('resultados_questionario');
    if (resultadosQuestionario) {
      setDadosResultado(JSON.parse(resultadosQuestionario));
    }
  }, []);

  const handleUnlock = () => {
    if (!analiseUnlocked) {
      setIsHeartAnimationActive(true);
      
      // Tempo total sincronizado com a animação dos corações
      setTimeout(() => {
        setIsHeartAnimationActive(false);
        setAnaliseUnlocked(true);
      }, 8000);  // 8 segundos, igual à duração da animação
    }
  };

  if (!dadosResultado) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl text-gray-600">Cargando resultados...</p>
      </div>
    );
  }

  const {      
    temperamento, 
    linguagem,
    temperamentoAutor,
    linguagemAutor
  } = dadosResultado;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* Animação de corações */}
      <HeartAnimation isActive={isHeartAnimationActive} />

      <div className="relative z-10 max-w-xl mx-auto bg-white rounded-3xl shadow-2xl p-6 md:p-8 lg:p-12">
        {/* Título Persuasivo */}
        <div className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-2xl mb-8 shadow-xl">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            El Código Secreto del Amor de {nome_parceiro}
          </h1>
          <p className="text-base md:text-xl text-indigo-100 max-w-2xl mx-auto text-center">
            Con base en sus respuestas conseguimos revelar con profundidad cómo {nome_parceiro} se conecta emocionalmente.
          </p>
        </div>

        {/* Temperamento Parceiro */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-4">
          El mapa emocional de {nome_parceiro}
          </h2>
          <div className="flex justify-center space-x-8 md:space-x-12">
            <div className="text-center">
              <PercentageCircle 
                percentage={temperamento.percentualPrincipal} 
                label={temperamento.principal}
                color="#6366f1"
                isDominant={temperamento.percentualPrincipal > temperamento.percentualSecundario ? 'dominant' : temperamento.percentualPrincipal < temperamento.percentualSecundario ? 'secondary' : 'equal'}
              />
            </div>
            <div className="text-center">
              <PercentageCircle 
                percentage={temperamento.percentualSecundario} 
                label={temperamento.secundario}
                color="#a855f7"
                isDominant={temperamento.percentualSecundario > temperamento.percentualPrincipal ? 'dominant' : temperamento.percentualSecundario < temperamento.percentualPrincipal ? 'secondary' : 'equal'}
              />
            </div>
          </div>
        </div>

        {/* Linguagem do Amor Parceiro */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-pink-800 mb-6 border-b-2 border-pink-200 pb-4">
            Cómo {nome_parceiro} Recibe Amor
          </h2>
          <div className="flex justify-center space-x-8 md:space-x-12">
            <div className="text-center">
              <PercentageCircle 
                percentage={linguagem.percentualPrincipal} 
                label={linguagem.principal}
                color="#ec4899"
                isDominant={linguagem.percentualPrincipal > linguagem.percentualSecundario ? 'dominant' : linguagem.percentualPrincipal < linguagem.percentualSecundario ? 'secondary' : 'equal'}
              />
            </div>
            <div className="text-center">
              <PercentageCircle 
                percentage={linguagem.percentualSecundario} 
                label={linguagem.secundario}
                color="#f472b6"
                isDominant={linguagem.percentualSecundario > linguagem.percentualPrincipal ? 'dominant' : linguagem.percentualSecundario < linguagem.percentualPrincipal ? 'secondary' : 'equal'}
              />
            </div>
          </div>
        </div>

        {/* Bônus: Perfil do Autor */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 mb-8 border-2 border-purple-200">
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-800 mb-4 text-center">
            Tomamos la Libertad y también mapeamos tu perfil 😉
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 text-center">
            El amor no es una vía de mano única. Por eso, además de desvelar cómo {nome_parceiro} siente y se conecta, revelamos también lo que te hace única en la forma de amar. Saber cómo tú amas y te conectas puede cambiar completamente la forma en que esta relación se desarrolla.
          </p>
          
          {/* Temperamento Autor */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-4">
          Tu Universo Interno
          </h2>

            <div className="flex justify-center space-x-8 md:space-x-12">
              <div className="text-center">
                <PercentageCircle 
                  percentage={temperamentoAutor.percentualPrincipal} 
                  label={temperamentoAutor.principal}
                  color="#6366f1"
                  isDominant={temperamentoAutor.percentualPrincipal > temperamentoAutor.percentualSecundario ? 'dominant' : temperamentoAutor.percentualPrincipal < temperamentoAutor.percentualSecundario ? 'secondary' : 'equal'}
                />
              </div>
              <div className="text-center">
                <PercentageCircle 
                  percentage={temperamentoAutor.percentualSecundario} 
                  label={temperamentoAutor.secundario}
                  color="#a855f7"
                  isDominant={temperamentoAutor.percentualSecundario > temperamentoAutor.percentualPrincipal ? 'dominant' : temperamentoAutor.percentualSecundario < temperamentoAutor.percentualPrincipal ? 'secondary' : 'equal'}
                />
              </div>
            </div>
          </div>

          {/* Linguagem do Amor Autor */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-pink-800 mb-6 border-b-2 border-pink-200 pb-4">
              Cómo Tú Expresas Amor
            </h3>
            <div className="flex justify-center space-x-8 md:space-x-12">
              <div className="text-center">
                <PercentageCircle 
                  percentage={linguagemAutor.percentualPrincipal} 
                  label={linguagemAutor.principal}
                  color="#ec4899"
                  isDominant={linguagemAutor.percentualPrincipal > linguagemAutor.percentualSecundario ? 'dominant' : linguagemAutor.percentualPrincipal < linguagemAutor.percentualSecundario ? 'secondary' : 'equal'}
                />
              </div>
              <div className="text-center">
                <PercentageCircle 
                  percentage={linguagemAutor.percentualSecundario} 
                  label={linguagemAutor.secundario}
                  color="#f472b6"
                  isDominant={linguagemAutor.percentualSecundario > linguagemAutor.percentualPrincipal ? 'dominant' : linguagemAutor.percentualSecundario < linguagemAutor.percentualPrincipal ? 'secondary' : 'equal'}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Botão de Desbloquear */}
        <div className="flex justify-center mt-8">
          <UnlockButton 
            isUnlocked={analiseUnlocked}
            onUnlock={handleUnlock}
            isHeartAnimationActive={isHeartAnimationActive}
          />
        </div>

        {/* Análise desbloqueada com animação */}
        <AnimatePresence>
          {analiseUnlocked && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="mt-8 p-6 bg-purple-50 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-purple-800 mb-4">
                {analise.titulo}
              </h3>
              <p className="text-lg text-purple-700 mb-4">
                {analise.subtitulo}
              </p>
              {analise.paragrafos.map((paragrafo, index) => (
                <p key={index} className="text-base text-gray-700 mb-4">
                  {paragrafo}
                </p>
              ))}
               {analise.mensagem && (
        <p 
          className="text-right text-xs italic text-gray-500 mt-4"
        >
          {analise.mensagem}
        </p>
      )}
            </motion.div>
          )}
        </AnimatePresence>       
      </div>
      
    </motion.div>
  );
}

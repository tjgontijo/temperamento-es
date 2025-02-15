'use client';

import React, { useState, useEffect } from 'react';
import { Clock, ShieldCheck } from 'lucide-react';
import { obterResultadosQuestionario } from '@/utils/storage';

export function Urgencia({ nome_parceiro }: { nome_parceiro: string }) {
  const [timeLeft, setTimeLeft] = useState({
    horas: 0,
    minutos: 20,
    segundos: 0
  });

  useEffect(() => {
    // Obtém o timestamp inicial dos resultados
    const resultados = obterResultadosQuestionario();
    const timestampInicial = resultados?.timestamp || Date.now();
    
    // Define o tempo limite como 20 minutos (1200000 ms) após o timestamp inicial
    const tempoLimite = timestampInicial + 1200000;

    const calcularTempoRestante = () => {
      const agora = Date.now();
      const diferenca = Math.max(0, tempoLimite - agora);
      
      const horas = Math.floor(diferenca / (1000 * 60 * 60));
      const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
      
      return { horas, minutos, segundos };
    };

    // Atualiza o tempo inicial
    setTimeLeft(calcularTempoRestante());

    const timer = setInterval(() => {
      const tempoRestante = calcularTempoRestante();
      setTimeLeft(tempoRestante);

      // Se o tempo acabou, limpa o intervalo
      if (tempoRestante.horas === 0 && tempoRestante.minutos === 0 && tempoRestante.segundos === 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  if (!nome_parceiro) {
    throw new Error('Nome do pretendente não encontrado');
  }

  return (
    <div className="bg-gradient-to-br from-red-50 to-pink-50 py-16 md:py-20 px-4 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(255,0,0,0.1),_transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_rgba(255,0,0,0.1),_transparent_50%)]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-3 bg-red-100 text-red-800 px-4 py-2 rounded-full mb-6">
          <Clock className="w-5 h-5" />
          <span className="font-medium text-sm">Oferta por Tiempo Limitado</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 max-w-3xl mx-auto leading-tight">
          Esta Oportunidad Única Expirará Pronto
        </h2>

        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          No dejes pasar la oportunidad de conquistar a {nome_parceiro} con una guía 100% personalizada.
          Esta oferta especial desaparecerá en:
        </p>

        {/* Countdown */}
        <div className="flex justify-center items-center gap-4 md:gap-8 mb-8">
          {[
            { label: 'Horas', value: formatNumber(timeLeft.horas) },
            { label: 'Minutos', value: formatNumber(timeLeft.minutos) },
            { label: 'Segundos', value: formatNumber(timeLeft.segundos) }
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-4 md:p-6 text-center min-w-[80px] md:min-w-[100px]"
            >
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
                {item.value}
              </div>
              <div className="text-xs md:text-sm text-gray-600">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-6">
          <a 
            href="https://pay.kiwify.com.br/HgJq08Z"
            target="_blank"
            rel="noopener noreferrer"
            className="utmify w-full md:w-auto bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white text-lg font-bold py-4 px-12 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
          >
            QUIERO FORTALECER MI RELACIÓN CON {(nome_parceiro || '').toUpperCase()}
          </a>
          
          <div className="text-sm text-gray-600 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-green-500" />
            <span>7 días de garantía incondicional</span>
          </div>
        </div>
      </div>
    </div>
  );
}

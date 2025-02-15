'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Hero } from '@/components/landing-page/hero';
import { Introducao } from '@/components/landing-page/introducao';
import { ResultadosIniciais } from '@/components/landing-page/resultados-iniciais';
import { ApresentacaoGuia } from '@/components/landing-page/apresentacao-guia';
import { Oferta } from '@/components/landing-page/oferta';
import { Urgencia } from '@/components/landing-page/urgencia';
import { Transition } from '@/components/landing-page/transition';
import { FAQ } from '@/components/landing-page/faq';

type ResultadoCategoriaType = {
  principal: string;
  secundario: string;
  totalPontos: number;
  quantidadePrincipal: number;
  quantidadeSecundario: number;
  percentualPrincipal: number;
  percentualSecundario: number;
};

type InformacoesContextoType = {
  nome_autor: string;
  nome_parceiro: string;
  historia_relacionamento: string;
};

type AnaliseCasalType = {
  titulo: string;
  subtitulo: string;
  paragrafos: string[];
};

type ResultadoCalculadoType = {
  temperamento: ResultadoCategoriaType;
  linguagem: ResultadoCategoriaType;
  temperamentoAutor: ResultadoCategoriaType;
  linguagemAutor: ResultadoCategoriaType;
  informacoes?: InformacoesContextoType;
  analise?: AnaliseCasalType;
};

export default function Resultado() {
  const router = useRouter();
  const [resultado, setResultado] = useState<ResultadoCalculadoType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Define o título da página
    document.title = "Resultado da Análise - Decifrando Corações";

    const carregarResultados = () => {
      try {
        if (typeof window === 'undefined') return;

        const resultadosString = localStorage.getItem('resultados_questionario');
        if (!resultadosString) throw new Error('Nenhum resultado encontrado');

        const resultadosCarregados = JSON.parse(resultadosString) as ResultadoCalculadoType;
        if (!resultadosCarregados.informacoes?.nome_parceiro) throw new Error('Dados incompletos');

        setResultado(resultadosCarregados);
        setLoading(false);
      } catch (err) {
        console.error('Erro ao carregar resultados:', err);
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
        setLoading(false);
        router.push('/questionario');
      }
    };

    carregarResultados();

    const sendMetaEvent = () => {
      if (typeof window.fbq !== 'function') {
        console.warn('Meta Pixel ainda não carregado. Tentando novamente em 2 segundos...');
        setTimeout(sendMetaEvent, 2000);
        return;
      }

      try {
        const utmifyLead = JSON.parse(localStorage.getItem('lead') || '{}');

        const eventData = {
          event_name: 'result_page',
          event_time: Math.floor(new Date().getTime() / 1000),
          event_source_url: window.location.href,
          traffic_source: document.referrer || undefined,
          parameters: window.location.search,
          external_id: utmifyLead._id || undefined,
          em: utmifyLead.email || undefined,
          ph: utmifyLead.phone || undefined,
          fn: utmifyLead.firstName || undefined,
          ln: utmifyLead.lastName || undefined,
          country: utmifyLead.geolocation?.country || undefined,
          ct: utmifyLead.geolocation?.city || undefined,
          st: utmifyLead.geolocation?.state || undefined,
          zp: utmifyLead.geolocation?.zipcode || undefined,
          client_user_agent: navigator.userAgent,
          client_ip_address: utmifyLead.ip || utmifyLead.ipv6 || undefined,
        };

        console.log('Enviando evento result_page para Meta Ads:', eventData);
        window.fbq('trackCustom', 'result_page', eventData);
      } catch (error) {
        console.error('Erro ao enviar evento result_page para Meta Ads:', error);
      }
    };

    sendMetaEvent();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (error || !resultado || !resultado.informacoes) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Ops! Algo deu errado.</h1>
          <p className="text-gray-600 mb-8">{error || 'Não foi possível carregar os resultados.'}</p>
          <button
            onClick={() => router.push('/questionario')}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Voltar ao Questionário
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Hero nome_autor={resultado.informacoes.nome_autor} nome_parceiro={resultado.informacoes.nome_parceiro} />
      <Introducao nome_parceiro={resultado.informacoes.nome_parceiro} />
      <ResultadosIniciais nome_parceiro={resultado.informacoes.nome_parceiro} analise={resultado.analise || { titulo: 'Análise Personalizada', subtitulo: 'Compreendendo Sua Dinâmica de Relacionamento', paragrafos: ['Não foi possível gerar a análise completa.'] }} />
      <Transition nome_parceiro={resultado.informacoes.nome_parceiro} />
      <ApresentacaoGuia />
      <Oferta nome_parceiro={resultado.informacoes.nome_parceiro} />
      <FAQ />
      <Urgencia nome_parceiro={resultado.informacoes.nome_parceiro} />
    </div>
  );
}

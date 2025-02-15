// Types específicos
'use client';

type TipoQuestaoType = {
  id: string;
  nome: string;
};

type AlternativaType = {
  id: string;
  texto: string;
  tipoAlternativaId: string;
};

type QuestaoType = {
  id: string;
  texto: string;
  tipo: string;
  tipoQuestao: TipoQuestaoType;
  alternativas: AlternativaType[];
};

type RespostaArmazenadaType = {
  questaoId: string;
  tipoQuestaoId: string;
  alternativaId: string;
  tipoAlternativaId: string;
};

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

// Imports
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  salvarResposta,
  obterDadosContexto,
  obterRespostas,
  salvarResultadosQuestionario,
  limparTodosDados
} from '@/utils/storage';
import { buscarQuestoesPorTipo } from '@/lib/actions/questionario-actions';
import { calcularResultado } from '@/lib/actions/resultado-actions';
import { realizarAnalise } from '@/services/couple-analysis/couple-analysis';
import { Questao } from '@/components/questionario/questao';
import { FormularioContexto } from '@/components/formulario-contexto/page';
import { motion } from 'framer-motion';
import { Loading } from '@/components/questionario/loading';



export default function QuestionarioPage() {
  const [isClient, setIsClient] = useState(false);
  const [questoes, setQuestoes] = useState<QuestaoType[]>([]);
  const [indiceQuestaoAtual, setIndiceQuestaoAtual] = useState(0);
  const [etapaQuestionario, setEtapaQuestionario] = useState<'contexto' | 'perguntas'>('contexto');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Limpar todos os dados antes de iniciar o questionário
    limparTodosDados();
  }, []);

  useEffect(() => {
    document.title = "Questionário Interativo - Decifrando Corações";
    setIsClient(true);
    const carregarQuestoes = async () => {
      try {
        const questoesCarregadas: QuestaoType[] = await buscarQuestoesPorTipo([
          'TEMPERAMENTO',
          'LINGUAGEM',
          'TEMPERAMENTO_AUTOR',
          'LINGUAGEM_AUTOR',
        ], Number(process.env.NEXT_PUBLIC_QUESTOES_QUANTIDADE) || 8);

        setQuestoes(questoesCarregadas);
      } catch (error) {
        console.error('Erro ao carregar questões:', error);
      }
    };

    carregarQuestoes();

    const sendMetaEvent = () => {
      if (typeof window.fbq !== 'function') {
        console.warn('Meta Pixel ainda não carregado. Tentando novamente em 2 segundos...');
        setTimeout(sendMetaEvent, 2000);
        return;
      }

      try {
        const utmifyLead = JSON.parse(localStorage.getItem('lead') || '{}');

        const eventData = {
          event_name: 'questionario_page',
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

        console.log('Enviando evento questionario_page para Meta Ads:', eventData);
        window.fbq('trackCustom', 'questionario_page', eventData);
      } catch (error) {
        console.error('Erro ao enviar evento questionario_page para Meta Ads:', error);
      }
    };

    sendMetaEvent();
  }, []);

  const handleSalvarResposta = (questao: QuestaoType, alternativaSelecionada: AlternativaType) => {
    const resposta: RespostaArmazenadaType = {
      questaoId: questao.id,
      tipoQuestaoId: questao.tipoQuestao.id,
      alternativaId: alternativaSelecionada.id,
      tipoAlternativaId: alternativaSelecionada.tipoAlternativaId,
    };

    salvarResposta(
      resposta.questaoId, 
      resposta.tipoQuestaoId, 
      resposta.tipoAlternativaId,
      resposta.alternativaId
    );
  };

  const handleResposta = async (alternativaId: string) => {
    if (!questoes.length) {
      console.error('Não há questões carregadas');
      return;
    }

    const questao = questoes[indiceQuestaoAtual];
    if (!questao) {
      console.error('Questão atual não encontrada:', indiceQuestaoAtual);
      return;
    }

    const alternativaSelecionada = questao.alternativas.find((alt) => alt.id === alternativaId);
    if (!alternativaSelecionada) {
      console.error('Alternativa não encontrada:', alternativaId);
      return;
    }

    handleSalvarResposta(questao, alternativaSelecionada);

    if (indiceQuestaoAtual === questoes.length - 1) {
      setIsLoading(true);
      try {
        const respostas = obterRespostas();
        const resultados = await calcularResultado(respostas);

        const contexto = obterDadosContexto();
        if (!contexto) {
          throw new Error('Dados de contexto não encontrados');
        }

        const resultadosCompletos: ResultadoCalculadoType = {
          ...resultados,
          informacoes: {
            nome_autor: contexto.nome_autor,
            nome_parceiro: contexto.nome_parceiro,
            historia_relacionamento: contexto.historia_relacionamento,
          },
          analise: await realizarAnalise({
            nomeAutor: contexto.nome_autor || '',
            nomeParceiro: contexto.nome_parceiro || '',
            temperamentoParceiro: resultados.temperamento.principal,
            linguagemParceiro: resultados.linguagem.principal,
            temperamentoAutor: resultados.temperamentoAutor.principal,
            linguagemAutor: resultados.linguagemAutor.principal,
            historiaRelacionamento: contexto.historia_relacionamento || ''
          }).then(resultado => {
            if (resultado.sucesso && resultado.resultado) {
              return {
                ...resultado.resultado,
                mensagem: resultado.mensagem,
                provedor: resultado.provedor
              };
            }
            throw new Error('Falha na análise de casal');
          }),
        };

        salvarResultadosQuestionario(resultadosCompletos);

        router.push('/resultado');
      } catch (error) {
        console.error('Erro ao processar respostas:', error);
        setIsLoading(false);
      }
      return;
    }

    setIndiceQuestaoAtual((prev) => Math.min(prev + 1, questoes.length - 1));
  };

  const handleBack = () => {
    if (indiceQuestaoAtual > 0) {
      setIndiceQuestaoAtual((prev) => prev - 1);
    }
  };

  if (!isClient) {
    return null;
  }

  if (isLoading) {
    return <Loading message="Analizando tus respuestas..." nome_autor={obterDadosContexto()?.nome_autor} />;
  }

  if (etapaQuestionario === 'contexto') {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <FormularioContexto
          onConcluido={() => {
            setEtapaQuestionario('perguntas');
          }}
        />
      </motion.div>
    );
  }

  if (!questoes.length) {
    return <div>Carregando questões...</div>;
  }

  const questao = questoes[indiceQuestaoAtual];
  const progresso = ((indiceQuestaoAtual + 1) / questoes.length) * 100;
  const isPrimeira = indiceQuestaoAtual === 0;
  const isUltima = indiceQuestaoAtual === questoes.length - 1;

  const respostaAtual = questao ? obterRespostas()[questao.id]?.alternativaId || '' : '';

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Questao
        pergunta={questao.texto}
        complemento={''}
        tipo={questao.tipo}
        opcoes={
          questao.alternativas
            ? questao.alternativas.map((alt) => ({ valor: alt.id, texto: alt.texto }))
            : []
        }
        respostaSelecionada={respostaAtual}
        onResposta={handleResposta}
        onBack={handleBack}
        progresso={progresso}
        isUltima={isUltima}
        isPrimeira={isPrimeira}
        isLoading={isLoading}        
        nomePretendente={obterDadosContexto()?.nome_parceiro}
      />
    </motion.div>
  );
}

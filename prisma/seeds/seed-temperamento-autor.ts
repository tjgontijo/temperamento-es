import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Função para embaralhar array
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export const seedTemperamentoAutor = async (prismaClient?: PrismaClient) => {
  const client = prismaClient || prisma;

  // Primeiro, encontra o tipo de questão 'temperamento_autor'
  const tipoQuestao = await client.tipoQuestao.findUnique({
    where: { nome: 'TEMPERAMENTO_AUTOR' }
  });

  if (!tipoQuestao) {
    console.error('Tipo de questão TEMPERAMENTO_AUTOR não encontrado');
    return;
  }

  type QuestaoInput = {
    tipoQuestaoId: string;
    pergunta: string;
    complemento: string;
    alternativas: {
      texto: string;
      tipoAlternativa: string;
    }[];
  };

   // Datos de las cuestiones de temperamento del autor
   const questoes: QuestaoInput[] = [
    {
      "tipoQuestaoId": tipoQuestao.id,
      "pergunta": "¿Tienes un día completamente libre, sin ninguna obligación. ¿Qué haces?",
      "complemento": "Imagina que puedes hacer cualquier cosa sin preocupaciones. ¿Cómo aprovechas ese tiempo?",
      "alternativas": [
          { "texto": "Aprovecho para planificar mis próximos pasos y poner al día las tareas pendientes.", "tipoAlternativa": "COLERICO" },
          { "texto": "Me quedo en casa relajándome, sin prisa por decidir qué hacer.", "tipoAlternativa": "FLEUMATICO" },
          { "texto": "Salgo a encontrarme con amigos, conversar y divertirme al máximo.", "tipoAlternativa": "SANGUINIO" },
          { "texto": "Paso el día a solas, leyendo un buen libro o viendo algo inspirador.", "tipoAlternativa": "MELANCOLICO" }
      ]
  },
  {
      "tipoQuestaoId": tipoQuestao.id,
      "pergunta": "Estás planeando un viaje con amigos. ¿Cómo organizas todo?",
      "complemento": "Cada persona tiene una forma diferente de lidiar con los viajes. ¿Cuál es la tuya?",
      "alternativas": [
          { "texto": "Asumo el control y defino itinerarios, horarios y todo lo que necesita ser hecho.", "tipoAlternativa": "COLERICO" },
          { "texto": "¡Solo quiero saber de los momentos divertidos! Dejo la organización para los demás.", "tipoAlternativa": "SANGUINIO" },
          { "texto": "Hago investigaciones detalladas sobre los mejores lugares y planeo cada paso con cuidado.", "tipoAlternativa": "MELANCOLICO" },
          { "texto": "Voy con la corriente, sin estrés. Lo importante es relajarme y disfrutar del momento.", "tipoAlternativa": "FLEUMATICO" }
      ]
  },
  {
      "tipoQuestaoId": tipoQuestao.id,
      "pergunta": "Si alguien te da un regalo inesperado, ¿cómo reaccionas?",
      "complemento": "Imagina que un amigo te da un regalo sin motivo aparente. ¿Cómo respondes?",
      "alternativas": [
          { "texto": "Agradezco de forma discreta y acepto sin mucha ceremonia.", "tipoAlternativa": "FLEUMATICO" },
          { "texto": "Agradezco de forma directa y ya pienso en retribuir de alguna manera.", "tipoAlternativa": "COLERICO" },
          { "texto": "¡Me pongo súper animada, abrazo a la persona y expreso mi felicidad en el momento!", "tipoAlternativa": "SANGUINIO" },
          { "texto": "Me siento conmovida y guardo el regalo con mucho cariño, valorando el gesto.", "tipoAlternativa": "MELANCOLICO" }
      ]
  },
  {
      "tipoQuestaoId": tipoQuestao.id,
      "pergunta": "Tu grupo de amigos quiere elegir un restaurante, pero nadie decide. ¿Qué haces?",
      "complemento": "Cada uno tiene una forma de lidiar con la indecisión en grupo. ¿Cómo actúas?",
      "alternativas": [
          { "texto": "Espero a que alguien decida y sigo la elección del grupo sin preocuparme.", "tipoAlternativa": "FLEUMATICO" },
          { "texto": "Bromeo sobre la situación e intento hacer la elección divertida.", "tipoAlternativa": "SANGUINIO" },
          { "texto": "Tomo la decisión rápidamente para acabar pronto con la indecisión.", "tipoAlternativa": "COLERICO" },
          { "texto": "Sugiero opciones basadas en el gusto de cada uno e intento equilibrar las preferencias.", "tipoAlternativa": "MELANCOLICO" }
      ]
  },
  {
      "tipoQuestaoId": tipoQuestao.id,
      "pergunta": "Recibes una crítica constructiva. ¿Cómo reaccionas?",
      "complemento": "No siempre es fácil escuchar críticas. ¿Cuál es tu reacción más común?",
      "alternativas": [
          { "texto": "Defiendo mi punto de vista y justifico mis elecciones.", "tipoAlternativa": "COLERICO" },
          { "texto": "Acepto la crítica y no me quedo dándole vueltas, siempre y cuando se diga de forma respetuosa.", "tipoAlternativa": "FLEUMATICO" },
          { "texto": "Me lo tomo con deportividad y sigo adelante sin darle mucha importancia.", "tipoAlternativa": "SANGUINIO" },
          { "texto": "Me quedo reflexionando sobre la crítica por un buen tiempo e intento aprender de ella.", "tipoAlternativa": "MELANCOLICO" }
      ]
  },
  {
    "tipoQuestaoId": tipoQuestao.id,
    "pergunta": "¿Qué haces cuando estás interesado en alguien?",
    "complemento": "Conociste a alguien que llamó tu atención. ¿Cómo sueles actuar cuando te gusta alguien?",
    "alternativas": [
        { "texto": "Espero a que la otra persona demuestre interés primero, sin apresurarme.", "tipoAlternativa": "FLEUMATICO" },
        { "texto": "Observo primero, analizo las señales y espero un momento adecuado para acercarme.", "tipoAlternativa": "MELANCOLICO" },
        { "texto": "Me aseguro de estar siempre cerca y sacar tema de conversación de forma divertida.", "tipoAlternativa": "SANGUINIO" },
        { "texto": "Voy directo al grano, dejo claro mi interés y veo si la persona corresponde.", "tipoAlternativa": "COLERICO" }
    ]
},
{
    "tipoQuestaoId": tipoQuestao.id,
    "pergunta": "¿Cómo reaccionas cuando estás peleado con alguien importante para ti?",
    "complemento": "Tuviste un malentendido con alguien que amas. ¿Cómo lidias con la situación?",
    "alternativas": [
        { "texto": "Sé que tengo razón, así que no corro detrás. Quien quiera que venga a conversar.", "tipoAlternativa": "COLERICO" },
        { "texto": "¡Necesito desahogarme pronto! Digo lo que siento en el momento, aunque después me arrepienta.", "tipoAlternativa": "SANGUINIO" },
        { "texto": "Dejo que el tiempo resuelva, prefiero evitar el conflicto al máximo.", "tipoAlternativa": "FLEUMATICO" },
        { "texto": "Me quedo dándole vueltas a todo, intentando entender qué salió mal y ensayando qué decir.", "tipoAlternativa": "MELANCOLICO" }
    ]
},
{
    "tipoQuestaoId": tipoQuestao.id,
    "pergunta": "Cuando recibes un cumplido, ¿cuál es tu reacción?",
    "complemento": "Recibes un cumplido inesperado de alguien que admiras. ¿Cómo respondes?",
    "alternativas": [
        { "texto": "Sonrío discretamente, sin mucha reacción, porque no sé bien qué decir.", "tipoAlternativa": "FLEUMATICO" },
        { "texto": "Agradezco con una sonrisa confiada y sigo adelante.", "tipoAlternativa": "COLERICO" },
        { "texto": "¡Adoro los cumplidos! Retribuyo en el momento y sigo la conversación animadamente.", "tipoAlternativa": "SANGUINIO" },
        { "texto": "Me pongo un poco incómodo, pero agradezco de forma sincera.", "tipoAlternativa": "MELANCOLICO" }
    ]
},
{
    "tipoQuestaoId": tipoQuestao.id,
    "pergunta": "Si tienes un gran objetivo, ¿cómo actúas para conquistarlo?",
    "complemento": "Tienes un sueño o una meta importante. ¿Cuál es tu enfoque para alcanzarlo?",
    "alternativas": [
        { "texto": "¡Voy con todo! Planifico, ejecuto y hago lo que sea necesario para llegar allí.", "tipoAlternativa": "COLERICO" },
        { "texto": "Voy despacio, sin prisa, y confío en que todo se arregla a su tiempo.", "tipoAlternativa": "FLEUMATICO" },
        { "texto": "Analizo cada detalle antes de actuar, prefiero estar seguro antes de cualquier paso.", "tipoAlternativa": "MELANCOLICO" },
        { "texto": "Comienzo entusiasmada, pero a veces me distraigo en el camino y necesito motivación extra.", "tipoAlternativa": "SANGUINIO" }
    ]
},
{
    "tipoQuestaoId": tipoQuestao.id,
    "pergunta": "Si pudieras elegir un superpoder, ¿cuál sería?",
    "complemento": "Imagina que te despertaste con un superpoder increíble. ¿Cuál de ellos combina más contigo?",
    "alternativas": [
        { "texto": "Ser invisible para observar todo sin ser notada y evitar conflictos.", "tipoAlternativa": "FLEUMATICO" },
        { "texto": "Leer mentes y entender profundamente lo que las personas sienten y piensan.", "tipoAlternativa": "MELANCOLICO" },
        { "texto": "¡Tener fuerza y determinación imbatibles para conquistar cualquier cosa!", "tipoAlternativa": "COLERICO" },
        { "texto": "¡Encantar a cualquier persona con mi carisma y energía contagiosa!", "tipoAlternativa": "SANGUINIO" }
    ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Descubres que alguien está difundiendo un rumor sobre ti. ¿Cómo reaccionas?",
  "complemento": "Una persona inventó algo sobre ti y la noticia se está difundiendo. ¿Qué haces?",
  "alternativas": [
      { "texto": "Enfrento a la persona de frente y resuelvo la situación sin rodeos.", "tipoAlternativa": "COLERICO" },
      { "texto": "Bromeo sobre la situación y dejo claro que no me afecta fácilmente.", "tipoAlternativa": "SANGUINIO" },
      { "texto": "Me siento dolido y reflexiono bastante sobre por qué sucedió esto.", "tipoAlternativa": "MELANCOLICO" },
      { "texto": "Ignoro completamente y sigo mi vida como si nada hubiera pasado.", "tipoAlternativa": "FLEUMATICO" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Si se hiciera una película sobre tu vida, ¿qué género combinaría más?",
  "complemento": "Imagina que tu historia va al cine. ¿Qué tipo de película sería?",
  "alternativas": [
      { "texto": "Un gran drama lleno de giros emocionales.", "tipoAlternativa": "MELANCOLICO" },
      { "texto": "Una aventura llena de acción, desafíos y superación.", "tipoAlternativa": "COLERICO" },
      { "texto": "Una comedia divertida, con muchas historias graciosas.", "tipoAlternativa": "SANGUINIO" },
      { "texto": "Una película tranquila y reflexiva, sobre aprender y crecer poco a poco.", "tipoAlternativa": "FLEUMATICO" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Estás en una fiesta, pero no conoces a casi nadie. ¿Cómo actúas?",
  "complemento": "Fuiste invitado a un evento donde la mayoría de las personas son desconocidas. ¿Qué haces?",
  "alternativas": [
      { "texto": "Aprovecho para observar, entender el ambiente y solo después interactúo.", "tipoAlternativa": "MELANCOLICO" },
      { "texto": "Llego saludando a todo el mundo e intento hacer amistad rápido.", "tipoAlternativa": "SANGUINIO" },
      { "texto": "Me quedo tranquilo, converso si alguien saca tema, pero no fuerzo nada.", "tipoAlternativa": "FLEUMATICO" },
      { "texto": "Tomo la iniciativa, inicio conversaciones e intento organizar algo para animar el ambiente.", "tipoAlternativa": "COLERICO" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Si pudieras viajar en el tiempo, ¿a dónde irías?",
  "complemento": "Imagina que tienes una máquina del tiempo. ¿Cuál sería tu elección?",
  "alternativas": [
      { "texto": "Al futuro, donde puedo ver las nuevas tecnologías y estar siempre a la vanguardia.", "tipoAlternativa": "COLERICO" },
      { "texto": "A un momento feliz de mi vida, para revivir buenos recuerdos.", "tipoAlternativa": "MELANCOLICO" },
      { "texto": "A la época de oro de las fiestas y la diversión, como los años 80 o 90!", "tipoAlternativa": "SANGUINIO" },
      { "texto": "A un tiempo pacífico, donde pudiera vivir tranquilamente sin preocupaciones.", "tipoAlternativa": "FLEUMATICO" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Encuentras una billetera llena de dinero en la calle. ¿Qué haces?",
  "complemento": "Nadie está cerca y ves una billetera tirada en el suelo. ¿Cuál es tu reacción?",
  "alternativas": [
      { "texto": "La llevo a casa, pienso con calma y analizo la mejor forma de resolver la situación.", "tipoAlternativa": "MELANCOLICO" },
      { "texto": "Publico en las redes sociales e intento encontrar al dueño rápidamente.", "tipoAlternativa": "SANGUINIO" },
      { "texto": "Voy a la comisaría o al banco para entregarla a quien pertenece.", "tipoAlternativa": "COLERICO" },
      { "texto": "La coloco en un lugar visible y espero a que el dueño vuelva a buscarla.", "tipoAlternativa": "FLEUMATICO" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Estás en un grupo de trabajo y te das cuenta de que nadie está tomando la iniciativa. ¿Qué haces?",
  "complemento": "El plazo se acerca y nadie está organizando las tareas. ¿Cuál es tu actitud?",
  "alternativas": [
      { "texto": "Asumo el mando y comienzo a delegar funciones para asegurar que todo salga como lo planeado.", "tipoAlternativa": "COLERICO" },
      { "texto": "Hago mi parte a mi ritmo y espero que los demás se organicen también.", "tipoAlternativa": "FLEUMATICO" },
      { "texto": "Sugiero un plan bien estructurado e intento convencer al grupo de que lo siga.", "tipoAlternativa": "MELANCOLICO" },
      { "texto": "Rompo el hielo con bromas e intento animar a la gente para que empecemos juntos.", "tipoAlternativa": "SANGUINIO" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Tienes un compromiso importante y estás atrasado. ¿Cómo lidias con la situación?",
  "complemento": "El reloj corre y el retraso es inevitable. ¿Cuál es tu reacción?",
  "alternativas": [
      { "texto": "Envío un mensaje explicando y, al llegar, intento resolver lo que sea posible rápidamente.", "tipoAlternativa": "COLERICO" },
      { "texto": "Acepto que no hay mucho que hacer e iré tranquilo, sin estrés.", "tipoAlternativa": "FLEUMATICO" },
      { "texto": "Me siento incómodo y me culpo por no haber salido antes, intentando encontrar una solución en el camino.", "tipoAlternativa": "MELANCOLICO" },
      { "texto": "Pienso en una forma creativa o divertida de disculparme cuando llegue.", "tipoAlternativa": "SANGUINIO" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Necesitas aprender algo completamente nuevo. ¿Cómo abordas esta situación?",
  "complemento": "Ya sea un nuevo idioma, habilidad o tecnología, ¿cuál es tu forma de aprender?",
  "alternativas": [
      { "texto": "Me sumerjo de cabeza, practico y me desafío a aprender lo más rápido posible.", "tipoAlternativa": "COLERICO" },
      { "texto": "Investigo bastante antes de comenzar y sigo un método bien organizado.", "tipoAlternativa": "MELANCOLICO" },
      { "texto": "Aprendo a mi tiempo, sin prisa y sin presiones.", "tipoAlternativa": "FLEUMATICO" },
      { "texto": "Transformo el aprendizaje en algo divertido e interactivo, involucrando a otras personas.", "tipoAlternativa": "SANGUINIO" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Alguien te invita a un evento al que no quieres asistir. ¿Qué haces?",
  "complemento": "Ya sea una fiesta, un compromiso social o una reunión, no tienes ganas de ir. ¿Cómo lidias con esto?",
  "alternativas": [
      { "texto": "Digo que no puedo e intento no prolongar la conversación.", "tipoAlternativa": "COLERICO" },
      { "texto": "Doy una excusa educada para evitar vergüenzas.", "tipoAlternativa": "MELANCOLICO" },
      { "texto": "Acepto para no causar problemas, pero intento salir temprano.", "tipoAlternativa": "FLEUMATICO" },
      { "texto": "Termino yendo, ya que me gusta divertirme y aprovechar cualquier oportunidad social.", "tipoAlternativa": "SANGUINIO" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Si fueras un personaje de un libro, ¿cuál sería tu papel?",
  "complemento": "Imagina que vives en una gran historia. ¿Qué papel combina más contigo?",
  "alternativas": [
      { "texto": "El líder valiente que toma las decisiones y guía a los demás al éxito.", "tipoAlternativa": "COLERICO" },
      { "texto": "El héroe emocional y profundo, que siempre ve más allá de las apariencias.", "tipoAlternativa": "MELANCOLICO" },
      { "texto": "El personaje divertido que trae ligereza y momentos inolvidables a la historia.", "tipoAlternativa": "SANGUINIO" },
      { "texto": "El sabio discreto, que observa todo y siempre tiene un consejo valioso.", "tipoAlternativa": "FLEUMATICO" }
  ]
}
   ]


  // Buscar os tipos de alternativa
  const tiposAlternativa = await client.tipoAlternativa.findMany({
    where: {
      nome: {
        in: ['SANGUINIO', 'COLERICO', 'MELANCOLICO', 'FLEUMATICO']
      }
    }
  });

  const tiposMap: Record<string, string> = {};
  tiposAlternativa.forEach(tipo => {
    tiposMap[tipo.nome] = tipo.id;
  });

  // Primeiro, limpa as questões existentes desse tipo
  await client.questao.deleteMany({
    where: { tipoQuestaoId: tipoQuestao.id }
  });

  // Criar as questões com suas alternativas
  for (const questao of questoes) {
    await client.questao.create({
      data: {
        pergunta: questao.pergunta,
        complemento: questao.complemento || '',
        tipoQuestaoId: tipoQuestao.id,
        alternativas: {
          create: shuffleArray(questao.alternativas).map(alternativa => {
            const tipoAlternativaId = tiposMap[alternativa.tipoAlternativa];
            if (!tipoAlternativaId) {
              throw new Error(`Tipo de alternativa ${alternativa.tipoAlternativa} não encontrado`);
            }
            return {
              texto: alternativa.texto,
              tipoAlternativaId: tipoAlternativaId
            };
          })
        }
      }
    });
  }

  console.log('Seed de Temperamento do Autor concluído');
};

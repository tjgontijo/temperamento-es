import { PrismaClient, TipoQuestao, TipoAlternativa } from '@prisma/client';

// Función para barajar array
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export const seedTemperamento = async (prisma: PrismaClient) => {
  // Buscar el ID del tipo de cuestión de temperamento
  const tipoQuestao: TipoQuestao | null = await prisma.tipoQuestao.findUnique({
    where: { nome: 'TEMPERAMENTO' }
  });

  if (!tipoQuestao) {
    throw new Error('Tipo de cuestión TEMPERAMENTO no encontrado');
  }

  // Buscar los tipos de alternativa
  const tipoAlternativas: TipoAlternativa[] = await prisma.tipoAlternativa.findMany({
    where: { 
      nome: {
        in: ['SANGUINIO', 'COLERICO', 'MELANCOLICO', 'FLEUMATICO']
      }
    }
  });

  const tiposPorNome: Record<string, string> = {};
  tipoAlternativas.forEach(tipo => {
    tiposPorNome[tipo.nome] = tipo.id;
  });

  // Definir tipo para las cuestiones
  type QuestaoInput = {
    tipoQuestaoId: string;
    pergunta: string;
    complemento: string;
    alternativas: {
      texto: string;
      tipoAlternativa: string;
    }[];
  };

  // Seed de las cuestiones de temperamento
  const questoes: QuestaoInput[] = [
    {
      "tipoQuestaoId": tipoQuestao.id,
      "pergunta": "Cuando {nome} hace planes para ustedes, ¿cómo suele actuar?",
      "complemento": "Esta respuesta puede revelar si le gusta el control, la improvisación o si simplemente prefiere que tú decidas todo.",
      "alternativas": [
          { "texto": "{nome} decide todo solo y ya me avisa cómo va a ser.", "tipoAlternativa": "COLERICO" },
          { "texto": "{nome} le gusta investigar bien antes de sugerir algo, todo necesita estar correcto.", "tipoAlternativa": "MELANCOLICO" },
          { "texto": "{nome} me pregunta a dónde quiero ir y acepta cualquier idea.", "tipoAlternativa": "FLEUMATICO" },
          { "texto": "{nome} sugiere algo en el momento e improvisamos juntos.", "tipoAlternativa": "SANGUINIO" }
      ]
  },
  {
      "tipoQuestaoId": tipoQuestao.id,
      "pergunta": "Si algo sale diferente de lo planeado, ¿cuál es la reacción de {nome}?",
      "complemento": "La forma en que lidia con imprevistos puede decir mucho sobre su personalidad.",
      "alternativas": [
          { "texto": "{nome} se irrita e intenta resolver el problema de forma rápida.", "tipoAlternativa": "COLERICO" },
          { "texto": "{nome} se incomoda e intenta entender dónde salió mal.", "tipoAlternativa": "MELANCOLICO" },
          { "texto": "{nome} se ríe de la situación y sigue adelante sin estrés.", "tipoAlternativa": "SANGUINIO" },
          { "texto": "{nome} no se preocupa mucho, simplemente se adapta a lo que sucedió.", "tipoAlternativa": "FLEUMATICO" }
      ]
  },
  {
      "tipoQuestaoId": tipoQuestao.id,
      "pergunta": "Cuando {nome} necesita tomar una decisión importante, ¿qué hace?",
      "complemento": "Esta elección puede mostrar si actúa por impulso, lógica o si evita decisiones difíciles.",
      "alternativas": [
          { "texto": "{nome} decide rápido, sin vacilación, y sigue adelante.", "tipoAlternativa": "COLERICO" },
          { "texto": "{nome} piensa bastante, analiza pros y contras antes de actuar.", "tipoAlternativa": "MELANCOLICO" },
          { "texto": "{nome} pide la opinión de varias personas antes de elegir.", "tipoAlternativa": "SANGUINIO" },
          { "texto": "{nome} evita tomar la decisión hasta el último momento.", "tipoAlternativa": "FLEUMATICO" }
      ]
  },
  {
      "tipoQuestaoId": tipoQuestao.id,
      "pergunta": "¿Cómo {nome} suele actuar cuando está con un grupo de amigos?",
      "complemento": "Esto puede darte pistas sobre su energía y cómo le gusta relacionarse.",
      "alternativas": [
          { "texto": "{nome} le gusta contar historias, hacer bromas y ser el centro de atención.", "tipoAlternativa": "SANGUINIO" },
          { "texto": "{nome} es reservado, conversa poco y observa más de lo que habla.", "tipoAlternativa": "MELANCOLICO" },
          { "texto": "{nome} prefiere interacciones uno a uno y evita grandes grupos.", "tipoAlternativa": "FLEUMATICO" },
          { "texto": "{nome} toma el liderazgo de la conversación e influencia al grupo.", "tipoAlternativa": "COLERICO" }
      ]
  },
  {
      "tipoQuestaoId": tipoQuestao.id,
      "pergunta": "¿Cómo {nome} demuestra interés por ti?",
      "complemento": "Esta respuesta puede indicar lo que valora y cómo expresa sus sentimientos.",
      "alternativas": [
          { "texto": "{nome} se asegura de estar siempre cerca y enviar mensajes espontáneos.", "tipoAlternativa": "SANGUINIO" },
          { "texto": "{nome} lo demuestra de forma práctica, ayudando y resolviendo cosas para mí.", "tipoAlternativa": "COLERICO" },
          { "texto": "{nome} dice cosas profundas y hace pequeños gestos llenos de significado.", "tipoAlternativa": "MELANCOLICO" },
          { "texto": "{nome} es discreto, pero constante. Muestra interés de una manera sutil.", "tipoAlternativa": "FLEUMATICO" }
      ]
  },
  {
    "tipoQuestaoId": tipoQuestao.id,
    "pergunta": "Si tú y {nome} quedan para verse, ¿cómo maneja los horarios?",
    "complemento": "La forma en que se organiza puede revelar mucho sobre su personalidad.",
    "alternativas": [
        { "texto": "{nome} siempre llega a tiempo o incluso antes. ¡Odia los retrasos!", "tipoAlternativa": "COLERICO" },
        { "texto": "{nome} suele planificar bien, pero a veces algo inesperado lo retrasa.", "tipoAlternativa": "MELANCOLICO" },
        { "texto": "{nome} es puntual, pero si se retrasa un poco, no se estresa por ello.", "tipoAlternativa": "FLEUMATICO" },
        { "texto": "{nome} casi nunca llega a la hora exacta, pero lo compensa con un buen humor contagioso.", "tipoAlternativa": "SANGUINIO" }
    ]
},
{
    "tipoQuestaoId": tipoQuestao.id,
    "pergunta": "Cuando {nome} necesita lidiar con un problema o desafío, ¿qué hace?",
    "complemento": "La forma en que enfrenta las dificultades puede revelar si es más práctico, emocional o estratégico.",
    "alternativas": [
        { "texto": "{nome} actúa rápido e intenta resolver todo sin perder tiempo.", "tipoAlternativa": "COLERICO" },
        { "texto": "{nome} analiza bien la situación y piensa en diferentes soluciones antes de actuar.", "tipoAlternativa": "MELANCOLICO" },
        { "texto": "{nome} bromea sobre la situación e intenta llevar el problema de forma ligera.", "tipoAlternativa": "SANGUINIO" },
        { "texto": "{nome} evita el estrés y espera a que el problema se resuelva solo.", "tipoAlternativa": "FLEUMATICO" }
    ]
},
{
    "tipoQuestaoId": tipoQuestao.id,
    "pergunta": "Si {nome} recibe una crítica constructiva, ¿cómo reacciona?",
    "complemento": "La manera en que maneja las opiniones puede indicar su nivel de autoconfianza y apertura al cambio.",
    "alternativas": [
        { "texto": "{nome} escucha, pero luego intenta justificarse y demostrar que tiene razón.", "tipoAlternativa": "COLERICO" },
        { "texto": "{nome} se lo toma en serio y reflexiona sobre la crítica durante bastante tiempo.", "tipoAlternativa": "MELANCOLICO" },
        { "texto": "{nome} no se lo toma muy en serio, se ríe de la situación y sigue con su vida.", "tipoAlternativa": "SANGUINIO" },
        { "texto": "{nome} lo acepta, pero no se preocupa mucho. Si lo considera útil, cambia.", "tipoAlternativa": "FLEUMATICO" }
    ]
},
{
    "tipoQuestaoId": tipoQuestao.id,
    "pergunta": "Si tú y {nome} están viendo una película juntos, ¿cuál es su actitud?",
    "complemento": "Su forma de ser en momentos simples puede revelar rasgos importantes de su personalidad.",
    "alternativas": [
        { "texto": "{nome} prefiere películas que hagan pensar y traigan reflexiones profundas.", "tipoAlternativa": "MELANCOLICO" },
        { "texto": "{nome} elige algo que capte la atención y le gusta comentar sobre la película.", "tipoAlternativa": "SANGUINIO" },
        { "texto": "{nome} le gusta verla tranquilo, sin muchas interrupciones o emociones exageradas.", "tipoAlternativa": "FLEUMATICO" },
        { "texto": "{nome} adora las películas llenas de acción y no tiene paciencia para historias muy lentas.", "tipoAlternativa": "COLERICO" }
    ]
},
{
    "tipoQuestaoId": tipoQuestao.id,
    "pergunta": "Si {nome} pudiera elegir cualquier tipo de viaje, ¿cuál sería?",
    "complemento": "La forma en que le gusta explorar el mundo puede revelar mucho sobre su energía y personalidad.",
    "alternativas": [
        { "texto": "{nome} elegiría un destino lleno de desafíos y aventuras, como senderos o deportes extremos.", "tipoAlternativa": "COLERICO" },
        { "texto": "{nome} preferiría un lugar histórico y cultural, para aprender y explorar con calma.", "tipoAlternativa": "MELANCOLICO" },
        { "texto": "{nome} le encantaría un viaje sin itinerario fijo, conociendo gente nueva y aprovechando cada momento.", "tipoAlternativa": "SANGUINIO" },
        { "texto": "{nome} elegiría un lugar tranquilo, sin mucha agitación, solo para descansar y disfrutar del ambiente.", "tipoAlternativa": "FLEUMATICO" }
    ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Si {nome} necesita enfrentar un desafío en el trabajo o en los estudios, ¿cómo actúa?",
  "complemento": "Su comportamiento bajo presión puede revelar mucho sobre su personalidad.",
  "alternativas": [
      { "texto": "{nome} enfrenta el problema de frente e intenta resolver todo rápidamente.", "tipoAlternativa": "COLERICO" },
      { "texto": "{nome} analiza la situación con calma antes de actuar.", "tipoAlternativa": "MELANCOLICO" },
      { "texto": "{nome} intenta no preocuparse demasiado y lidia con el desafío a su tiempo.", "tipoAlternativa": "FLEUMATICO" },
      { "texto": "{nome} pide ayuda y bromea para aliviar la tensión.", "tipoAlternativa": "SANGUINIO" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Si ustedes discuten por algo tonto, ¿cuál suele ser la reacción de {nome}?",
  "complemento": "Las reacciones emocionales pueden indicar su nivel de control y madurez.",
  "alternativas": [
      { "texto": "{nome} quiere resolverlo en el momento y ya pasa a la confrontación.", "tipoAlternativa": "COLERICO" },
      { "texto": "{nome} se cierra y se queda dándole vueltas al asunto por un tiempo.", "tipoAlternativa": "MELANCOLICO" },
      { "texto": "{nome} se ríe de la situación e intenta cambiar de tema.", "tipoAlternativa": "SANGUINIO" },
      { "texto": "{nome} prefiere evitar discusiones e ignora hasta que el ambiente mejore.", "tipoAlternativa": "FLEUMATICO" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "¿Cómo {nome} lidia con momentos románticos?",
  "complemento": "La forma en que expresa el cariño puede revelar mucho sobre sus emociones.",
  "alternativas": [
      { "texto": "{nome} no es mucho de palabras, pero lo demuestra con actitudes prácticas.", "tipoAlternativa": "COLERICO" },
      { "texto": "{nome} crea momentos especiales y le gusta expresar sentimientos profundos.", "tipoAlternativa": "MELANCOLICO" },
      { "texto": "{nome} es espontáneo y adora los elogios y las bromas románticas.", "tipoAlternativa": "SANGUINIO" },
      { "texto": "{nome} es cariñoso, pero de una manera discreta y tranquila.", "tipoAlternativa": "FLEUMATICO" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Si {nome} pudiera elegir una manera de pasar el tiempo libre, ¿qué haría?",
  "complemento": "Los hobbies y preferencias pueden indicar su energía y estilo.",
  "alternativas": [
      { "texto": "{nome} prefiere algo productivo, como aprender algo nuevo o entrenar.", "tipoAlternativa": "COLERICO" },
      { "texto": "{nome} le gusta pasar tiempo a solas leyendo, dibujando o reflexionando.", "tipoAlternativa": "MELANCOLICO" },
      { "texto": "{nome} quiere estar con amigos, divertirse y aprovechar cada momento.", "tipoAlternativa": "SANGUINIO" },
      { "texto": "{nome} adora quedarse relajándose, viendo algo o descansando.", "tipoAlternativa": "FLEUMATICO" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Si ustedes están conversando y hay un silencio, ¿cómo reacciona {nome}?",
  "complemento": "Su comodidad con momentos de silencio puede decir mucho sobre su personalidad.",
  "alternativas": [
      { "texto": "{nome} no se siente incómodo, simplemente continúa a su ritmo.", "tipoAlternativa": "FLEUMATICO" },
      { "texto": "{nome} se siente incómodo e intenta llenar el silencio de alguna forma.", "tipoAlternativa": "SANGUINIO" },
      { "texto": "{nome} observa el silencio e incluso puede usarlo para reflexionar.", "tipoAlternativa": "MELANCOLICO" },
      { "texto": "{nome} cree que el silencio es una pérdida de tiempo y luego cambia de tema o hace algo.", "tipoAlternativa": "COLERICO" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "¿Cómo {nome} actúa en situaciones de estrés?",
  "complemento": "Su nivel de control emocional puede ser un gran indicativo del temperamento.",
  "alternativas": [
      { "texto": "{nome} actúa rápido y no deja que el estrés lo controle.", "tipoAlternativa": "COLERICO" },
      { "texto": "{nome} siente profundamente, necesita tiempo para procesar.", "tipoAlternativa": "MELANCOLICO" },
      { "texto": "{nome} intenta aliviar el estrés riendo o distrayendo la mente.", "tipoAlternativa": "SANGUINIO" },
      { "texto": "{nome} evita el estrés al máximo y sigue la vida tranquilamente.", "tipoAlternativa": "FLEUMATICO" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Cuando {nome} quiere algo, ¿cuál es su enfoque?",
  "complemento": "La forma en que busca lo que desea puede indicar si es persistente o más relajado.",
  "alternativas": [
      { "texto": "{nome} hace un plan y persigue el objetivo sin dudar.", "tipoAlternativa": "COLERICO" },
      { "texto": "{nome} piensa mucho antes de actuar y solo decide si está seguro.", "tipoAlternativa": "MELANCOLICO" },
      { "texto": "{nome} actúa sin pensar mucho, simplemente va y ve qué pasa.", "tipoAlternativa": "SANGUINIO" },
      { "texto": "{nome} se adapta a la situación y no fuerza nada.", "tipoAlternativa": "FLEUMATICO" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Si {nome} recibe un regalo, ¿cómo reacciona?",
  "complemento": "Su reacción puede decir mucho sobre cómo se relaciona con las emociones y el reconocimiento.",
  "alternativas": [
      { "texto": "{nome} está agradecido, pero no muestra mucha emoción.", "tipoAlternativa": "COLERICO" },
      { "texto": "{nome} lo valora mucho, lo guarda con cariño y se emociona.", "tipoAlternativa": "MELANCOLICO" },
      { "texto": "{nome} hace fiesta, bromea y muestra entusiasmo.", "tipoAlternativa": "SANGUINIO" },
      { "texto": "{nome} lo acepta de forma tranquila y discreta.", "tipoAlternativa": "FLEUMATICO" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Si {nome} está muy cansado, ¿qué hace?",
  "complemento": "La forma en que lidia con el agotamiento puede indicar su ritmo de vida.",
  "alternativas": [
      { "texto": "{nome} sigue adelante, incluso cansado, porque tiene cosas que hacer.", "tipoAlternativa": "COLERICO" },
      { "texto": "{nome} se retira y necesita tiempo a solas para recargar.", "tipoAlternativa": "MELANCOLICO" },
      { "texto": "{nome} ignora el cansancio e intenta distraerse con algo divertido.", "tipoAlternativa": "SANGUINIO" },
      { "texto": "{nome} descansa sin culpa y espera a que la energía regrese naturalmente.", "tipoAlternativa": "FLEUMATICO" }
  ]
}
  ];
  // Crear cuestiones de temperamento
  for (const questao of questoes) {
    await prisma.questao.create({
      data: {
        tipoQuestaoId: tipoQuestao.id,
        pergunta: questao.pergunta,
        complemento: questao.complemento,
        alternativas: {
          create: await Promise.all(
            shuffleArray(questao.alternativas).map(async (alternativa) => {
              const tipoAlternativaId = tiposPorNome[alternativa.tipoAlternativa];
              if (!tipoAlternativaId) {
                throw new Error(`Tipo de alternativa ${alternativa.tipoAlternativa} no encontrado`);
              }
              return {
                texto: alternativa.texto,
                tipoAlternativaId: tipoAlternativaId
              }
            })
          )
        }
      }
    });
  }
};
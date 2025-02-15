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

export const seedLinguagemAutor = async (prismaClient?: PrismaClient) => {
  const client = prismaClient || prisma;

  // Primeiro, encontra o tipo de questão 'linguagem_autor'
  const tipoQuestao = await client.tipoQuestao.findUnique({
    where: { nome: 'LINGUAGEM_AUTOR' }
  });

  if (!tipoQuestao) {
    console.error('Tipo de questão LINGUAGEM_AUTOR não encontrado');
    return;
  }

  // Datos de las cuestiones de lenguaje del autor
  const questoes = [
    {
      "tipoQuestaoId": tipoQuestao.id,
      "pergunta": "Cuando piensas en una relación feliz con {nome}, ¿qué viene primero a tu mente?",
      "complemento": "Tu respuesta puede revelar lo que te hace sentir más conectada y valorada.",
      "alternativas": [
          { "texto": "El cariño físico, los abrazos apretados y la proximidad constante.", "tipoAlternativa": "TOQUE_FISICO" },
          { "texto": "Los momentos juntos, sin prisa, aprovechando la compañía uno del otro.", "tipoAlternativa": "TEMPO_QUALIDADE" },
          { "texto": "Las sorpresas y pequeños gestos inesperados que muestran que piensa en mí.", "tipoAlternativa": "PRESENTES" },
          { "texto": "Las conversaciones profundas y el modo en que me hace sentir especial con palabras.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
          { "texto": "El modo en que cuida de mí y percibe mis necesidades sin que necesite hablar.", "tipoAlternativa": "ATOS_SERVICO" }
      ]
  },
  {
      "tipoQuestaoId": tipoQuestao.id,
      "pergunta": "Si tú y {nome} estuvieran pasando por un momento difícil en la relación, ¿qué te ayudaría a sentirte más segura?",
      "complemento": "La forma en que buscas consuelo puede revelar mucho sobre lo que te hace sentir amada.",
      "alternativas": [
          { "texto": "Mantener el contacto físico, con abrazos y caricias, sin necesariamente necesitar decir nada.", "tipoAlternativa": "TOQUE_FISICO" },
          { "texto": "Oír de él palabras sinceras diciendo que todo va a estar bien, lo mucho que me ama y soy importante.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
          { "texto": "Recibir un gesto y/o un objeto simbólico que me recordara lo que vivimos juntos.", "tipoAlternativa": "PRESENTES" },
          { "texto": "Percibir que está dispuesto a hacer algo para mejorar las cosas sin que necesite pedirlo.", "tipoAlternativa": "ATOS_SERVICO" },
          { "texto": "Tener un tiempo solo nuestro, lejos de distracciones, para conversar y reconectarnos.", "tipoAlternativa": "TEMPO_QUALIDADE" }
      ]
  },
  {
      "tipoQuestaoId": tipoQuestao.id,
      "pergunta": "Si {nome} quisiera sorprenderte en un día común, ¿qué te dejaría más feliz?",
      "complemento": "¿Qué te haría sentir más especial y valorada inesperadamente?",
      "alternativas": [
          { "texto": "Obsequiarme con algo que mostrara que piensa en mí.", "tipoAlternativa": "PRESENTES" },
          { "texto": "Darme un abrazo fuerte y demorado que me hiciera olvidar del mundo.", "tipoAlternativa": "TOQUE_FISICO" },
          { "texto": "Él aparecer de la nada solo para verme y pasar un tiempo conmigo.", "tipoAlternativa": "TEMPO_QUALIDADE" },
          { "texto": "Él resolver algo para mí o ayudarme sin que necesite pedirlo.", "tipoAlternativa": "ATOS_SERVICO" },
          { "texto": "Un mensaje inesperado diciendo lo mucho que me ama y soy importante para él.", "tipoAlternativa": "PALAVRA_AFIRMACAO" }
      ]
  },
  {
      "tipoQuestaoId": tipoQuestao.id,
      "pergunta": "Si {nome} fuera a demostrar lo mucho que le gustas delante de los demás, ¿qué más te dejaría feliz?",
      "complemento": "El modo en que te sientes valorada en público puede decir mucho sobre lo que te hace bien en la relación.",
      "alternativas": [
          { "texto": "Si {nome} me diera una rosa de manera inesperada.", "tipoAlternativa": "PRESENTES" },
          { "texto": "Si {nome} tomara mi mano, me abrazara o demostrara cariño físico.", "tipoAlternativa": "TOQUE_FISICO" },
          { "texto": "Si {nome} prestara atención en mí y me incluyera en las conversaciones.", "tipoAlternativa": "TEMPO_QUALIDADE" },
          { "texto": "Si {nome} hablara de mí de forma cariñosa e hiciera cuestión de elogiarme.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
          { "texto": "Si {nome} hiciera algo por mí, mostrando que se importa con mi bienestar.", "tipoAlternativa": "ATOS_SERVICO" }
      ]
  },
  {
      "tipoQuestaoId": tipoQuestao.id,
      "pergunta": "Si {nome} tuviera un día súper corrido, pero quisiera mostrar que está pensando en ti, ¿qué actitud haría más diferencia?",
      "complemento": "La forma en que te gusta ser recordada puede revelar mucho sobre tu manera de sentir amor.",
      "alternativas": [
          { "texto": "Él me sorprendería con algo simbólico que me recordara a él.", "tipoAlternativa": "PRESENTES" },
          { "texto": "Él resolvería algo para mí, aliviándome un poco del estrés del día a día.", "tipoAlternativa": "ATOS_SERVICO" },
          { "texto": "Él haría cuestión de abrazarme fuerte en la primera oportunidad.", "tipoAlternativa": "TOQUE_FISICO" },
          { "texto": "Él reservaría un ratito, ni que fuera poco, para estar conmigo.", "tipoAlternativa": "TEMPO_QUALIDADE" },
          { "texto": "Una llamada rápida o un mensaje diciendo que siente mi falta.", "tipoAlternativa": "PALAVRA_AFIRMACAO" }
      ]
  },
  {
    "tipoQuestaoId": tipoQuestao.id,
    "pergunta": "Si {nome} quisiera hacer algo especial en tu cumpleaños, ¿qué te haría más feliz?",
    "complemento": "¿Qué tornaría esa fecha realmente marcante para ti?",
    "alternativas": [
        { "texto": "Si él me escribiera una carta o dijera algo significativo sobre mí.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
        { "texto": "Si él organizara un momento solo nuestro, sin distracciones.", "tipoAlternativa": "TEMPO_QUALIDADE" },
        { "texto": "Si él me llenara de cariño, abrazos y besos a lo largo del día.", "tipoAlternativa": "TOQUE_FISICO" },
        { "texto": "Si él cuidara de todo, evitándome preocupaciones y organizando algo por cuenta propia.", "tipoAlternativa": "ATOS_SERVICO" },
        { "texto": "Si él me diera un presente significativo, mostrando que pensó en mí.", "tipoAlternativa": "PRESENTES" }
    ]
},
{
    "tipoQuestaoId": tipoQuestao.id,
    "pergunta": "Si {nome} estuviera molesto contigo, ¿qué te haría sentir que todo está bien nuevamente?",
    "complemento": "La forma en que lidias con conflictos puede indicar cómo te sientes más amada.",
    "alternativas": [
        { "texto": "Si él viniera a hablar conmigo y dijera que me ama.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
        { "texto": "Si él separara un tiempo para que estemos juntos y conversemos.", "tipoAlternativa": "TEMPO_QUALIDADE" },
        { "texto": "Si él me abrazara apretado y mostrara que está todo bien.", "tipoAlternativa": "TOQUE_FISICO" },
        { "texto": "Si él hiciera algo práctico para demostrar que se importa conmigo, como dejar los platos lavados o hacer la cena.", "tipoAlternativa": "ATOS_SERVICO" },
        { "texto": "Si él me diera algo simbólico como forma de reconciliación.", "tipoAlternativa": "PRESENTES" }
    ]
},
{
    "tipoQuestaoId": tipoQuestao.id,
    "pergunta": "Si {nome} estuviera viajando por trabajo hace muchos días, ¿cómo él podría hacerte sentir amada?",
    "complemento": "La forma en que mantienes la conexión puede revelar mucho sobre tu forma de sentirte especial.",
    "alternativas": [
        { "texto": "Si él me mandara mensajes y audios cariñosos y me llamara siempre que posible.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
        { "texto": "Si él planeara momentos para que conversemos y mantengamos nuestra conexión.", "tipoAlternativa": "TEMPO_QUALIDADE" },
        { "texto": "Si él hiciera llamadas de video y demostrara cariño, aunque a la distancia.", "tipoAlternativa": "TOQUE_FISICO" },
        { "texto": "Si él encontrara maneras de facilitar mi rutina, aunque de lejos.", "tipoAlternativa": "ATOS_SERVICO" },
        { "texto": "Si él me enviara cartas, flores o presentes para recordarme a él.", "tipoAlternativa": "PRESENTES" }
    ]
},
{
    "tipoQuestaoId": tipoQuestao.id,
    "pergunta": "Si {nome} te invitara a un fin de semana especial, ¿cuál de estas opciones te haría más feliz?",
    "complemento": "El tipo de programa que más valoras puede indicar tu necesidad emocional.",
    "alternativas": [
        { "texto": "Un retiro romántico solo nosotros dos, sin distracciones del mundo.", "tipoAlternativa": "TEMPO_QUALIDADE" },
        { "texto": "Un día lleno de cariño, con abrazos y proximidad todo el tiempo.", "tipoAlternativa": "TOQUE_FISICO" },
        { "texto": "Una cena romántica, donde él me dijera todo lo que siente por mí.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
        { "texto": "Un fin de semana relajante, donde él se preocupara en cuidar de todo para mí.", "tipoAlternativa": "ATOS_SERVICO" },
        { "texto": "Una sorpresa especial, como un presente simbólico que mostrara cuánto me conoce.", "tipoAlternativa": "PRESENTES" }
    ]
},
{
    "tipoQuestaoId": tipoQuestao.id,
    "pergunta": "Si estuvieras teniendo un día malo, ¿cómo te gustaría que {nome} reaccionara?",
    "complemento": "La forma en que buscas confort emocional puede revelar tu principal lenguaje del amor.",
    "alternativas": [
        { "texto": "Que él me dijera algo inspirador y me recordara lo especial que soy.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
        { "texto": "Que él parara todo y se quedara conmigo para animarme.", "tipoAlternativa": "TEMPO_QUALIDADE" },
        { "texto": "Que él me abrazara apretado y se quedara cerca de mí.", "tipoAlternativa": "TOQUE_FISICO" },
        { "texto": "Que él asumiera algunas tareas mías para aliviar mi día.", "tipoAlternativa": "ATOS_SERVICO" },
        { "texto": "Que él me sorprendiera con un gesto o presente inesperado.", "tipoAlternativa": "PRESENTES" }
    ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Si {nome} quisiera demostrar lo especial que eres para él de una forma inesperada, ¿qué te emocionaría más?",
  "complemento": "La forma en que recibes amor puede estar en esta respuesta.",
  "alternativas": [
      { "texto": "Si él dijera palabras bonitas, reforzando lo importante que soy para él.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
      { "texto": "Si él planeara un momento solo nuestro, para disfrutar juntos.", "tipoAlternativa": "TEMPO_QUALIDADE" },
      { "texto": "Si él hiciera algo práctico por mí, como resolver un problema sin que yo lo pida.", "tipoAlternativa": "ATOS_SERVICO" },
      { "texto": "Si él me sorprendiera con un regalo especial, un chocolate que me guste, sin motivo específico.", "tipoAlternativa": "PRESENTES" },
      { "texto": "Si él viniera y me abrazara fuerte, y me llenara de cariño.", "tipoAlternativa": "TOQUE_FISICO" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Si {nome} te dijera 'te amo', ¿cómo te gustaría que complementara esta demostración?",
  "complemento": "La manera en que imaginas este momento puede revelar cómo te sientes más amada.",
  "alternativas": [
      { "texto": "Me gustaría que él me mirara a los ojos y dijera todo lo que siente por mí.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
      { "texto": "Que él estuviera presente, tomando un tiempo solo para nosotros dos.", "tipoAlternativa": "TEMPO_QUALIDADE" },
      { "texto": "Que él me abrazara fuerte y me hiciera sentir segura.", "tipoAlternativa": "TOQUE_FISICO" },
      { "texto": "Con una acción, cuidando de algo para mí, para ver que él presta atención a mis necesidades.", "tipoAlternativa": "ATOS_SERVICO" },
      { "texto": "Que él me regalara algo simbólico que representara nuestro amor.", "tipoAlternativa": "PRESENTES" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Si {nome} estuviera distraído con algo y quisieras que él demostrara más atención, ¿qué te haría sentir mejor?",
  "complemento": "Tu respuesta puede indicar cómo te sientes más valorada en la relación.",
  "alternativas": [
      { "texto": "Que él me mirara y dijera algo cariñoso, reafirmando lo que siente.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
      { "texto": "Que él parara lo que estuviera haciendo y reservara un tiempo para que estemos juntos.", "tipoAlternativa": "TEMPO_QUALIDADE" },
      { "texto": "Que él simplemente viniera hasta mí y tomara mi mano o me abrazara.", "tipoAlternativa": "TOQUE_FISICO" },
      { "texto": "Que él percibiera que necesito algo e hiciera eso por mí sin que yo lo pida.", "tipoAlternativa": "ATOS_SERVICO" },
      { "texto": "Que él apareciera con un mimo o un recuerdo inesperado para hacerme sonreír.", "tipoAlternativa": "PRESENTES" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Si {nome} estuviera muy ocupado, pero quisiera demostrar que piensa en ti, ¿qué significaría más?",
  "complemento": "La forma en que te gusta recibir amor, incluso en el ajetreo del día a día, puede estar en esta elección.",
  "alternativas": [
      { "texto": "Si él me enviara un mensaje o un audio reforzando que siente mi falta.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
      { "texto": "Si él hiciera cuestión de separar un ratito, aunque fuera corto, solo para nosotros.", "tipoAlternativa": "TEMPO_QUALIDADE" },
      { "texto": "Si, al verme, él hiciera cuestión de llenarme de cariño y abrazos.", "tipoAlternativa": "TOQUE_FISICO" },
      { "texto": "Si él resolviera algo para mí o me ayudara con alguna cosa sin que yo lo pida.", "tipoAlternativa": "ATOS_SERVICO" },
      { "texto": "Si él me mandara algo simbólico, como una flor o un pequeño regalo.", "tipoAlternativa": "PRESENTES" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Si estuvieras contando algo importante para {nome}, ¿qué te haría sentir que él realmente se importa?",
  "complemento": "Tu respuesta puede indicar lo que te hace sentir más escuchada y valorada.",
  "alternativas": [
      { "texto": "Si él dijera palabras de apoyo y reconocimiento sobre lo que estoy contando, mostrando que él se importa.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
      { "texto": "Si él realmente prestara atención, sin distracciones, y se quedara allí conmigo.", "tipoAlternativa": "TEMPO_QUALIDADE" },
      { "texto": "Si él se acercara y demostrara físicamente que está presente.", "tipoAlternativa": "TOQUE_FISICO" },
      { "texto": "Si él hiciera algo concreto para ayudarme con la situación.", "tipoAlternativa": "ATOS_SERVICO" },
      { "texto": "Si, después, él me sorprendiera con un gesto simbólico mostrando que recordó lo que dije.", "tipoAlternativa": "PRESENTES" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Si {nome} quisiera demostrar lo importante que eres para él después de un día difícil, ¿qué haría más sentido para ti?",
  "complemento": "Tu respuesta puede indicar lo que te hace sentir más segura y amada en momentos desafiantes.",
  "alternativas": [
      { "texto": "Si él dijera algo motivador y reforzara lo increíble que soy.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
      { "texto": "Si él cancelara otros compromisos para pasar un tiempo conmigo.", "tipoAlternativa": "TEMPO_QUALIDADE" },
      { "texto": "Si él me abrazara fuerte y se quedara allí conmigo en silencio.", "tipoAlternativa": "TOQUE_FISICO" },
      { "texto": "Si él asumiera alguna responsabilidad por mí para aliviar mi día.", "tipoAlternativa": "ATOS_SERVICO" },
      { "texto": "Si él me regalara algo simbólico, mostrando que pensó en mí.", "tipoAlternativa": "PRESENTES" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Si {nome} hiciera algo que te dejara molesta, ¿cómo él podría demostrar que se importa y quiere reconciliarse?",
  "complemento": "La forma en que lidias con la reconciliación puede revelar mucho sobre tu forma de recibir amor.",
  "alternativas": [
      { "texto": "Si él dijera palabras sinceras, explicando lo mucho que me valora.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
      { "texto": "Si él reservara un tiempo solo para nosotros dos conversar.", "tipoAlternativa": "TEMPO_QUALIDADE" },
      { "texto": "Si él viniera hasta mí y me abrazara sin decir nada.", "tipoAlternativa": "TOQUE_FISICO" },
      { "texto": "Si él hiciera algo para compensar el error y me ayudara de alguna forma.", "tipoAlternativa": "ATOS_SERVICO" },
      { "texto": "Si él me diera un regalo simbólico para marcar la reconciliación.", "tipoAlternativa": "PRESENTES" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Si {nome} estuviera planeando algo especial para ti, ¿qué te dejaría más emocionada?",
  "complemento": "El tipo de sorpresa que más te toca puede indicar tu principal necesidad emocional en la relación.",
  "alternativas": [
      { "texto": "Si él escribiera algo profundo y emocionante para mí.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
      { "texto": "Si él organizara un día solo para nosotros dos, sin interrupciones.", "tipoAlternativa": "TEMPO_QUALIDADE" },
      { "texto": "Si él viniera hasta mí y demostrara cariño todo el tiempo.", "tipoAlternativa": "TOQUE_FISICO" },
      { "texto": "Si él percibiera algo que yo necesitaba y resolviera sin que yo pida.", "tipoAlternativa": "ATOS_SERVICO" },
      { "texto": "Si él me diera algo simbólico que mostrara que pensó en mí.", "tipoAlternativa": "PRESENTES" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Si tú y {nome} tuvieran una rutina muy ajetreada, ¿cuál actitud de él mostraría que él todavía está conectado contigo?",
  "complemento": "¿Qué te haría sentir valorada incluso en el ajetreo del día a día?",
  "alternativas": [
      { "texto": "Si él me mandara mensajes o audios cariñosos a lo largo del día.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
      { "texto": "Si él hiciera cuestión de separar un momento solo para nosotros dos.", "tipoAlternativa": "TEMPO_QUALIDADE" },
      { "texto": "Si, al vernos, él hiciera cuestión de llenarme de cariño.", "tipoAlternativa": "TOQUE_FISICO" },
      { "texto": "Si él me ayudara con algo práctico, percibiendo que estoy sobrecargada.", "tipoAlternativa": "ATOS_SERVICO" },
      { "texto": "Si él me sorprendiera con un regalo inesperado, mostrando que piensa en mí.", "tipoAlternativa": "PRESENTES" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Si estuvieras pasando por un momento de inseguridad en la relación, ¿qué {nome} podría hacer para hacerte sentir amada nuevamente?",
  "complemento": "La manera en que buscas seguridad emocional puede indicar tu principal forma de sentirte amada.",
  "alternativas": [
      { "texto": "Me gustaría que él dijera exactamente lo que siente por mí, sin dejar dudas.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
      { "texto": "Si él pasara más tiempo conmigo e hiciera cuestión de darme atención.", "tipoAlternativa": "TEMPO_QUALIDADE" },
      { "texto": "Que él me diera un abrazo fuerte, se acercara y me envolviera con cariño y proximidad física.", "tipoAlternativa": "TOQUE_FISICO" },
      { "texto": "Si él me ayudara con algo que estoy necesitando, sin que yo pida. Mostraría que él presta atención en mí.", "tipoAlternativa": "ATOS_SERVICO" },
      { "texto": "Si él me diera un regalo simbólico que me recordara lo especial que soy para él.", "tipoAlternativa": "PRESENTES" }
  ]
}
  ];

  // Buscar os tipos de alternativa
  const tiposAlternativa = await client.tipoAlternativa.findMany({
    where: {
      nome: {
        in: ['PALAVRA_AFIRMACAO', 'TOQUE_FISICO', 'TEMPO_QUALIDADE', 'ATOS_SERVICO', 'PRESENTES']
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
        complemento: questao.complemento,
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

  console.log('Seed de Linguagem do Autor concluído');
};

// Remover a função main para ser usado como módulo
// export const main = async () => {
//   try {
//     await seedLinguagemAutor();
//   } catch (e) {
//     console.error(e);
//     process.exit(1);
//   } finally {
//     await prisma.$disconnect();
//   }
// }

// Descomentar se quiser rodar diretamente
// main();
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

export const seedLinguagem = async (prismaClient?: PrismaClient) => {
  const client = prismaClient || prisma;

  // Primeiro, encontra o tipo de questão 'LINGUAGEM'
  const tipoQuestao = await client.tipoQuestao.findUnique({
    where: { nome: 'LINGUAGEM' }
  });

  if (!tipoQuestao) {
    console.error('Tipo de questão LINGUAGEM não encontrado');
    return;
  }

   // Datos de las cuestiones de lenguaje
   const questoes = [
    {
      "tipoQuestaoId": tipoQuestao.id,
      "pergunta": "Cuando haces algo especial por {nome}, ¿cuál de estas actitudes parece valorar más?",
      "complemento": "La forma en que reacciona a tu cariño puede indicar la manera en que más le gusta recibir amor.",
      "alternativas": [
          { "texto": "{nome} se pone visiblemente feliz cuando lo elogio y digo palabras cariñosas.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
          { "texto": "{nome} se ilumina cuando le dedico atención exclusiva, sin distracciones.", "tipoAlternativa": "TEMPO_QUALIDADE" },
          { "texto": "{nome} parece más conectado cuando le demuestro cariño, como abrazos y toques sutiles.", "tipoAlternativa": "TOQUE_FISICO" },
          { "texto": "{nome} se siente especial cuando hago algo por él, como ayudarlo en algo importante.", "tipoAlternativa": "ATOS_SERVICO" },
          { "texto": "{nome} adora cuando lo sorprendo con un regalo o recuerdo simbólico.", "tipoAlternativa": "PRESENTES" }
      ]
  },
  {
      "tipoQuestaoId": tipoQuestao.id,
      "pergunta": "Si quieres animar a {nome} después de un día malo, ¿cuál de estas acciones parece surtir más efecto?",
      "complemento": "La manera en que responde a tu consuelo puede revelar cómo se siente más amado.",
      "alternativas": [
          { "texto": "{nome} se pone claramente mejor cuando le digo palabras de aliento y cariño.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
          { "texto": "{nome} parece calmarse cuando paramos todo para estar juntos sin prisa.", "tipoAlternativa": "TEMPO_QUALIDADE" },
          { "texto": "{nome} se relaja más rápidamente cuando lo abrazo o me quedo físicamente cerca.", "tipoAlternativa": "TOQUE_FISICO" },
          { "texto": "{nome} se siente aliviado cuando ayudo con alguna tarea que le está pesando.", "tipoAlternativa": "ATOS_SERVICO" },
          { "texto": "{nome} parece animado cuando lo sorprendo con algo simbólico para alegrar su día.", "tipoAlternativa": "PRESENTES" }
      ]
  },
  {
      "tipoQuestaoId": tipoQuestao.id,
      "pergunta": "Cuando intentas demostrar tu cariño por {nome}, ¿a qué reacciona de forma más positiva?",
      "complemento": "Su reacción puede indicar el tipo de gesto que más valora en una relación.",
      "alternativas": [
          { "texto": "{nome} se pone radiante cuando digo algo cariñoso o expreso mi admiración por él.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
          { "texto": "{nome} parece más conectado cuando dedicamos un tiempo juntos, solo nosotros dos.", "tipoAlternativa": "TEMPO_QUALIDADE" },
          { "texto": "{nome} se acerca aún más cuando lo toco, ya sea tomando su mano o abrazando.", "tipoAlternativa": "TOQUE_FISICO" },
          { "texto": "{nome} se siente muy valorado cuando percibe que hago algo para facilitar su vida.", "tipoAlternativa": "ATOS_SERVICO" },
          { "texto": "{nome} demuestra alegría cuando recibe algo especial que muestra que pensé en él.", "tipoAlternativa": "PRESENTES" }
      ]
  },
  {
      "tipoQuestaoId": tipoQuestao.id,
      "pergunta": "Si quieres que {nome} perciba lo importante que es para ti, ¿cuál de estas acciones tiende a notar más?",
      "complemento": "La forma en que percibe tu amor puede indicar lo que más valora en una relación.",
      "alternativas": [
          { "texto": "{nome} se llena de orgullo cuando hablo sobre lo especial que es para mí.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
          { "texto": "{nome} parece más involucrado cuando dedicamos tiempo exclusivo uno al otro, como una cena solo nuestra, o ver una película juntos.", "tipoAlternativa": "TEMPO_QUALIDADE" },
          { "texto": "{nome} responde con cariño cuando me acerco y demuestro afecto físico.", "tipoAlternativa": "TOQUE_FISICO" },
          { "texto": "{nome} valora mucho cuando hago algo práctico para ayudarlo en el día a día.", "tipoAlternativa": "ATOS_SERVICO" },
          { "texto": "{nome} se sorprende y se pone feliz cuando lo obsequio con algo especial.", "tipoAlternativa": "PRESENTES" }
      ]
  },
  {
      "tipoQuestaoId": tipoQuestao.id,
      "pergunta": "Si haces algo romántico para {nome}, ¿cómo tiende a reaccionar de forma más intensa?",
      "complemento": "Su reacción puede indicar cuál demostración de amor tiene más impacto emocional para él.",
      "alternativas": [
          { "texto": "{nome} parece más conmovido cuando digo cosas bonitas y alentadoras para él.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
          { "texto": "{nome} realmente se involucra cuando creamos momentos solo nuestros, sin interrupciones.", "tipoAlternativa": "TEMPO_QUALIDADE" },
          { "texto": "{nome} responde con cariño cuando hay contacto físico, como abrazos y toques.", "tipoAlternativa": "TOQUE_FISICO" },
          { "texto": "{nome} demuestra gratitud cuando percibe que hago algo práctico para facilitar su vida.", "tipoAlternativa": "ATOS_SERVICO" },
          { "texto": "{nome} se pone emocionado y entusiasmado cuando recibe un regalo especial.", "tipoAlternativa": "PRESENTES" }
      ]
  },
  {
    "tipoQuestaoId": tipoQuestao.id,
    "pergunta": "Si quieres hacer que {nome} se sienta amado, ¿cuál de estas acciones parece tener más impacto sobre él?",
    "complemento": "La forma en que responde a tu cariño puede indicar lo que realmente toca su corazón.",
    "alternativas": [
        { "texto": "{nome} parece más feliz cuando expreso admiración y elogio sus cualidades.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
        { "texto": "{nome} se conecta más cuando pasamos un tiempo juntos, sin distracciones.", "tipoAlternativa": "TEMPO_QUALIDADE" },
        { "texto": "{nome} se pone más cerca cuando hay contacto físico, como abrazos o toques sutiles.", "tipoAlternativa": "TOQUE_FISICO" },
        { "texto": "{nome} valora mucho cuando percibo sus necesidades y hago algo para ayudarlo.", "tipoAlternativa": "ATOS_SERVICO" },
        { "texto": "{nome} adora recibir regalos que muestren que pensé en él.", "tipoAlternativa": "PRESENTES" }
    ]
},
{
    "tipoQuestaoId": tipoQuestao.id,
    "pergunta": "Cuando demuestras cariño por {nome}, ¿cuál de estas reacciones suele tener?",
    "complemento": "El modo en que reacciona puede revelar qué tipo de afecto valora más.",
    "alternativas": [
        { "texto": "{nome} se pone claramente conmovido cuando le digo palabras alentadoras y cariñosas.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
        { "texto": "{nome} siempre prioriza tiempo de calidad conmigo cuando quiere demostrar que está involucrado.", "tipoAlternativa": "TEMPO_QUALIDADE" },
        { "texto": "{nome} responde de forma intensa al contacto físico, como abrazos y proximidad.", "tipoAlternativa": "TOQUE_FISICO" },
        { "texto": "{nome} se siente más amado cuando percibo sus dificultades e intento ayudarlo de forma práctica.", "tipoAlternativa": "ATOS_SERVICO" },
        { "texto": "{nome} siempre se entusiasma cuando recibe algo especial y simbólico de mí.", "tipoAlternativa": "PRESENTES" }
    ]
},
{
    "tipoQuestaoId": tipoQuestao.id,
    "pergunta": "Si quisieras agradar a {nome} sin decir nada, solo con un gesto, ¿cuál de estas opciones tendría más efecto?",
    "complemento": "Lo que le hace sentirse especial puede estar en esta respuesta.",
    "alternativas": [
        { "texto": "Escribir una nota o mandar un mensaje destacando lo especial que es para mí.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
        { "texto": "Reservar un tiempo para un encuentro solo nuestro, sin distracciones.", "tipoAlternativa": "TEMPO_QUALIDADE" },
        { "texto": "Tomar su mano, dar un abrazo apretado o demostrar cariño físico espontáneamente.", "tipoAlternativa": "TOQUE_FISICO" },
        { "texto": "Hacer algo que necesita, como ayudarlo en alguna tarea sin que lo pida.", "tipoAlternativa": "ATOS_SERVICO" },
        { "texto": "Dar un regalo simbólico que tenga un significado especial para él.", "tipoAlternativa": "PRESENTES" }
    ]
},
{
    "tipoQuestaoId": tipoQuestao.id,
    "pergunta": "Si le preguntas a {nome} cómo se siente en la relación, ¿cuál de estas respuestas probablemente daría?",
    "complemento": "La forma en que describe lo que le hace feliz puede indicar su lenguaje del amor.",
    "alternativas": [
        { "texto": "Adoro cuando me motivas y reconoces las cosas que hago.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
        { "texto": "Lo mejor es cuando conseguimos pasar tiempo juntos de verdad.", "tipoAlternativa": "TEMPO_QUALIDADE" },
        { "texto": "Me gusta cuando estamos cerca, cuando me tocas, me abrazas... eso me hace bien.", "tipoAlternativa": "TOQUE_FISICO" },
        { "texto": "Lo que más me gusta es cuando me ayudas con las cosas y te preocupas por lo que necesito.", "tipoAlternativa": "ATOS_SERVICO" },
        { "texto": "Me gustan las sorpresas, pequeños detalles que muestran que piensas en mí.", "tipoAlternativa": "PRESENTES" }
    ]
},
{
    "tipoQuestaoId": tipoQuestao.id,
    "pergunta": "Si {nome} está pasando por un momento difícil, ¿qué parece ayudarle a sentirse mejor?",
    "complemento": "Lo que más le consuela puede indicar la forma en que siente el amor.",
    "alternativas": [
        { "texto": "Decir palabras de apoyo y recordar lo fuerte y especial que es.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
        { "texto": "Quedarme a su lado, mostrando que estoy presente sin prisa.", "tipoAlternativa": "TEMPO_QUALIDADE" },
        { "texto": "Abrazarlo fuerte y demostrar cariño físico.", "tipoAlternativa": "TOQUE_FISICO" },
        { "texto": "Ayudarle de manera práctica, resolviendo algo que le está preocupando.", "tipoAlternativa": "ATOS_SERVICO" },
        { "texto": "Hacer una sorpresa para alegrarlo, algo simbólico para mostrar que me importo.", "tipoAlternativa": "PRESENTES" }
    ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Si {nome} recibe un elogio o un cariño inesperado, ¿cómo tiende a reaccionar?",
  "complemento": "La forma en que responde puede indicar lo que realmente toca su corazón.",
  "alternativas": [
      { "texto": "{nome} responde con un abrazo o un toque físico espontáneo.", "tipoAlternativa": "TOQUE_FISICO" },
      { "texto": "{nome} demuestra querer pasar más tiempo con la persona que demostró cariño.", "tipoAlternativa": "TEMPO_QUALIDADE" },
      { "texto": "{nome} se entusiasma si la demostración de cariño viene acompañada de una sorpresa simbólica.", "tipoAlternativa": "PRESENTES" },
      { "texto": "{nome} sonríe y responde con palabras de gratitud o un elogio de vuelta.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
      { "texto": "{nome} reconoce y valora el gesto, especialmente si involucró ayuda práctica.", "tipoAlternativa": "ATOS_SERVICO" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Si alguien quiere demostrar a {nome} lo especial que es, ¿qué actitud parece notar más?",
  "complemento": "La forma en que reacciona puede indicar cómo percibe el amor y la atención.",
  "alternativas": [
      { "texto": "{nome} parece más conectado cuando hay proximidad física, como un toque o abrazo.", "tipoAlternativa": "TOQUE_FISICO" },
      { "texto": "{nome} demuestra entusiasmo cuando recibe un regalo simbólico que muestra que pensaron en él.", "tipoAlternativa": "PRESENTES" },
      { "texto": "{nome} se impresiona cuando alguien percibe lo que necesita y actúa para ayudarlo.", "tipoAlternativa": "ATOS_SERVICO" },
      { "texto": "{nome} se pone visiblemente conmovido cuando recibe elogios sinceros y palabras positivas.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
      { "texto": "{nome} se involucra más cuando alguien reserva tiempo exclusivo para estar con él.", "tipoAlternativa": "TEMPO_QUALIDADE" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Si {nome} recibe una sorpresa de alguien, ¿cuál de estas reacciones suele tener?",
  "complemento": "Su reacción puede revelar lo que más valora emocionalmente.",
  "alternativas": [
      { "texto": "{nome} se acerca físicamente, tal vez un abrazo o un toque, mostrando que le gustó.", "tipoAlternativa": "TOQUE_FISICO" },
      { "texto": "{nome} agradece y destaca lo mucho que la sorpresa le hizo sentirse especial.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
      { "texto": "{nome} intenta retribuir haciendo algo útil para mostrar gratitud.", "tipoAlternativa": "ATOS_SERVICO" },
      { "texto": "{nome} parece querer prolongar el momento, aprovechando más tiempo con la persona.", "tipoAlternativa": "TEMPO_QUALIDADE" },
      { "texto": "{nome} se pone visiblemente animado cuando recibe algo inesperado que simboliza cariño.", "tipoAlternativa": "PRESENTES" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Si {nome} está pasando por un momento difícil, ¿qué parece ayudarlo más?",
  "complemento": "La forma en que busca apoyo puede indicar su principal necesidad emocional.",
  "alternativas": [
      { "texto": "{nome} se calma cuando alguien ofrece ayuda práctica, sin que necesite pedirlo.", "tipoAlternativa": "ATOS_SERVICO" },
      { "texto": "{nome} parece más cómodo cuando recibe un abrazo o un toque reconfortante.", "tipoAlternativa": "TOQUE_FISICO" },
      { "texto": "{nome} se anima al oír palabras que lo motiven y refuercen su importancia.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
      { "texto": "{nome} se siente mejor cuando alguien reserva un tiempo para estar con él.", "tipoAlternativa": "TEMPO_QUALIDADE" },
      { "texto": "{nome} se pone más feliz cuando alguien lo sorprende con un gesto simbólico.", "tipoAlternativa": "PRESENTES" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Cuando {nome} recibe atención de alguien que le gusta, ¿cómo tiende a reaccionar?",
  "complemento": "La forma en que responde puede indicar lo que le hace sentirse más especial.",
  "alternativas": [
      { "texto": "{nome} retribuye queriendo ayudar o haciendo algo práctico para demostrar gratitud.", "tipoAlternativa": "ATOS_SERVICO" },
      { "texto": "{nome} quiere prolongar el momento y mantener la conexión por más tiempo.", "tipoAlternativa": "TEMPO_QUALIDADE" },
      { "texto": "{nome} se acerca físicamente, demostrando más apertura y cariño.", "tipoAlternativa": "TOQUE_FISICO" },
      { "texto": "{nome} se entusiasma cuando recibe algo inesperado que demuestra que pensaron en él.", "tipoAlternativa": "PRESENTES" },
      { "texto": "{nome} retribuye con palabras amables y le gusta oír que es importante.", "tipoAlternativa": "PALAVRA_AFIRMACAO" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Si alguien quiere demostrar cariño por {nome}, ¿qué parece dejarlo más feliz?",
  "complemento": "La manera en que reacciona puede indicar lo que le hace sentirse más amado.",
  "alternativas": [
      { "texto": "{nome} parece más conectado cuando hay contacto físico, como un abrazo o un toque sutil.", "tipoAlternativa": "TOQUE_FISICO" },
      { "texto": "{nome} se anima cuando recibe palabras sinceras sobre lo especial que es.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
      { "texto": "{nome} le gusta cuando alguien percibe lo que necesita y se adelanta para ayudarlo.", "tipoAlternativa": "ATOS_SERVICO" },
      { "texto": "{nome} demuestra estar más involucrado cuando pasan tiempo juntos, sin distracciones.", "tipoAlternativa": "TEMPO_QUALIDADE" },
      { "texto": "{nome} se pone feliz y sorprendido cuando recibe un regalo o algo simbólico.", "tipoAlternativa": "PRESENTES" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Cuando {nome} percibe que alguien se importa por él, ¿cuál de estas actitudes parece tener más impacto?",
  "complemento": "Lo que valora puede indicar cómo percibe el amor.",
  "alternativas": [
      { "texto": "{nome} siente que es importante cuando oye palabras que refuerzan sus cualidades y esfuerzos.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
      { "texto": "{nome} valora cuando alguien se dedica a pasar tiempo con él, sin distracciones.", "tipoAlternativa": "TEMPO_QUALIDADE" },
      { "texto": "{nome} reacciona mejor a gestos de cariño físico, como un abrazo o un toque en el brazo.", "tipoAlternativa": "TOQUE_FISICO" },
      { "texto": "{nome} se siente cuidado cuando alguien hace algo por él, sin que necesite pedirlo.", "tipoAlternativa": "ATOS_SERVICO" },
      { "texto": "{nome} se pone claramente feliz cuando recibe un regalo inesperado.", "tipoAlternativa": "PRESENTES" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Si alguien quiere conquistar la confianza de {nome}, ¿cuál de estos enfoques parece más eficaz?",
  "complemento": "Lo que llama su atención puede indicar lo que más valora en una relación.",
  "alternativas": [
      { "texto": "{nome} se conecta más con quien reserva tiempo para estar con él y crear momentos especiales.", "tipoAlternativa": "TEMPO_QUALIDADE" },
      { "texto": "{nome} percibe cuando alguien se expresa con palabras sinceras y motivadoras.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
      { "texto": "{nome} le gusta cuando recibe cariño físico sutil, demostrando conexión y proximidad.", "tipoAlternativa": "TOQUE_FISICO" },
      { "texto": "{nome} se siente más cómodo cuando alguien hace algo útil para ayudarlo en el día a día.", "tipoAlternativa": "ATOS_SERVICO" },
      { "texto": "{nome} valora cuando recibe algo simbólico que muestre que pensaron en él.", "tipoAlternativa": "PRESENTES" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Si {nome} se siente inseguro o en duda sobre algo, ¿qué parece tranquilizarlo más?",
  "complemento": "La manera en que busca consuelo puede indicar su principal necesidad emocional.",
  "alternativas": [
      { "texto": "{nome} se calma al oír palabras que reafirman su importancia y sus cualidades.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
      { "texto": "{nome} se relaja cuando alguien se queda a su lado, dedicando tiempo sin prisa.", "tipoAlternativa": "TEMPO_QUALIDADE" },
      { "texto": "{nome} se siente más seguro cuando hay contacto físico, como un abrazo fuerte.", "tipoAlternativa": "TOQUE_FISICO" },
      { "texto": "{nome} mejora cuando percibe que alguien hace algo práctico para ayudarlo.", "tipoAlternativa": "ATOS_SERVICO" },
      { "texto": "{nome} se anima cuando recibe un gesto simbólico para recordarle que es especial.", "tipoAlternativa": "PRESENTES" }
  ]
},
{
  "tipoQuestaoId": tipoQuestao.id,
  "pergunta": "Cuando {nome} habla sobre momentos inolvidables, ¿qué parece marcarlo más?",
  "complemento": "Lo que considera especial puede indicar cómo se siente más amado.",
  "alternativas": [
      { "texto": "{nome} menciona palabras que oyó y que le hicieron sentirse especial.", "tipoAlternativa": "PALAVRA_AFIRMACAO" },
      { "texto": "{nome} siempre recuerda experiencias y momentos que pasó con alguien importante.", "tipoAlternativa": "TEMPO_QUALIDADE" },
      { "texto": "{nome} destaca los momentos de cariño físico, como abrazos y proximidad.", "tipoAlternativa": "TOQUE_FISICO" },
      { "texto": "{nome} se acuerda de cuando alguien hizo algo por él sin necesitar pedirlo.", "tipoAlternativa": "ATOS_SERVICO" },
      { "texto": "{nome} habla sobre regalos o gestos simbólicos que significaron mucho para él.", "tipoAlternativa": "PRESENTES" }
  ]
}
  ];

  // Criar as questões com suas alternativas
  for (const questao of questoes) {
    await client.questao.create({
      data: {
        pergunta: questao.pergunta,
        complemento: questao.complemento,
        tipoQuestaoId: questao.tipoQuestaoId,
        alternativas: {
          create: await Promise.all(
            // Embaralha as alternativas antes de criar
            shuffleArray(questao.alternativas).map(async (alternativa) => {
              const tipoAlternativa = await client.tipoAlternativa.findUnique({
                where: { nome: alternativa.tipoAlternativa }
              });

              if (!tipoAlternativa) {
                throw new Error(`Tipo de alternativa ${alternativa.tipoAlternativa} não encontrado`);
              }

              return {
                texto: alternativa.texto,
                tipoAlternativaId: tipoAlternativa.id
              };
            })
          )
        }
      }
    });
  }
};

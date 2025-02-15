import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function analisarCasal(
  nomeAutor: string,
  nomePretendente: string,
  temperamentoPrincipalPretendente: string,
  linguagemPrincipalPretendente: string,
  temperamentoPrincipalAutor: string,
  linguagemPrincipalAutor: string,
  historiaRelacionamento: string
) {
  const prompt = `
  Você é um especialista em relacionamentos e análise de compatibilidade, com anos de experiência ajudando casais a se entenderem melhor. 
  Sua missão é revelar o potencial deste relacionamento, validando os sentimentos de ${nomeAutor} e fornecendo insights profundos e práticos 
  para que ela possa fortalecer essa conexão de maneira realista.

  ### Informações da Análise

  ${nomeAutor} é a pessoa que está realizando o teste e apresentou as seguintes características:
  - Temperamento: ${temperamentoPrincipalAutor}
  - Linguagem do Amor: ${linguagemPrincipalAutor}  

  ${nomePretendente} é a pessoa pela qual ${nomeAutor} está interessada e apresentou as seguintes características:
  - Temperamento: ${temperamentoPrincipalPretendente}
  - Linguagem do Amor: ${linguagemPrincipalPretendente}  

  ${historiaRelacionamento ? `A história do relacionamento fornecida por ${nomeAutor} é essa: "${historiaRelacionamento}"` : ''}

  ### Diretrizes para a Análise

  - Seja envolvente e direto, como se estivesse explicando pessoalmente para ${nomeAutor}.
  - Use um tom próximo e acolhedor, como se estivesse dando um conselho personalizado para ela.
  - Valide as experiências de ${nomeAutor}, mostrando que as percepções que ela já tem fazem sentido e explicando o que está por trás disso.
  - Dê exemplos concretos e possíveis cenários que ${nomeAutor} pode ter vivido com ${nomePretendente}, para que a análise soe mais real e próxima da experiência dela.
  - Traga insights práticos, para que ${nomeAutor} saiba o que pode fazer hoje mesmo para melhorar essa relação.

  ### Estrutura da Resposta (exatamente 4 parágrafos)

  1. O Potencial Único do Relacionamento  
    - Mostre como essa combinação específica de temperamentos pode criar uma conexão especial.  
    - Valide algo que ${nomeAutor} possa já ter percebido sobre o relacionamento, usando a história fornecida.  
    - Dê um exemplo prático: "Talvez você já tenha notado que, quando vocês discutem, ${nomePretendente} tende a..."  

  2. Como essa Conexão Pode se Fortalecer  
    - Explique como as linguagens do amor de ${nomeAutor} e ${nomePretendente} se complementam ou entram em conflito.  
    - Mostre situações do dia a dia onde esses padrões podem estar se manifestando.  
    - Dê uma dica prática sobre como ${nomeAutor} pode se comunicar melhor com ${nomePretendente}.  

  3. Os Desafios Naturais da Relação  
    - Valide se ${nomeAutor} já percebeu certos desafios e explique por que isso acontece.  
    - Se possível, traga algo baseado na história do relacionamento.  
    - Mostre que não é um problema insuperável e que, com algumas mudanças, a dinâmica pode melhorar.  

  4. Um Novo Nível de Conexão  
   - Indique que há um caminho claro para fortalecer essa relação e tornar a conexão mais profunda.  
   - Mostre empatia e valide os sentimentos de ${nomeAutor}, reconhecendo que ela já tentou melhorar a relação, mas talvez não tenha encontrado as respostas certas ainda.  
   - Reforce sutilmente que, embora o conhecimento sobre o relacionamento seja essencial, **aplicar isso da maneira certa pode ser desafiador sem um direcionamento claro**.  
   - Use exemplos do dia a dia para que ${nomeAutor} se reconheça no texto, como situações em que ela tentou se aproximar de ${nomePretendente}, mas não obteve a resposta esperada.  
   - Finalize com uma reflexão estratégica que gere curiosidade e leve ${nomeAutor} a perceber que **seguir um caminho validado pode ser a chave para transformar a relação**.  

   Exemplo de tom a ser seguido:  
   - "Existe um caminho para fortalecer essa relação e tornar a conexão entre vocês mais profunda e equilibrada. Mas, se fosse fácil, você já teria descoberto sozinha. A verdade é que, muitas vezes, mesmo com os melhores sentimentos, podemos acabar cometendo erros sem perceber. Você já tentou demonstrar amor de um jeito que parecia certo, mas ${nomePretendente} não reagiu como esperava? Ou talvez tenha feito de tudo para manter a relação forte, mas ainda assim sente que algo está fora do lugar?"
   - "A boa notícia é que entender como ${nomePretendente} realmente pensa e sente já é um grande passo. Mas saber **o que fazer com essas informações** faz toda a diferença. Pequenos ajustes podem transformar completamente a dinâmica entre vocês, desde a forma como vocês conversam até a maneira como lidam com desafios juntos. **A questão é: você quer continuar tentando no escuro ou seguir um caminho que já foi testado e funciona?**"  

  ### Instruções Importantes  

  - NÃO mencione números, porcentagens ou estatísticas na análise.  
  - NÃO tente vender diretamente, apenas gere curiosidade sobre como aprofundar a conexão.
  - NÃO fique chamando a autora do questionario pelo nome, utilize o "você."  
  - Utilize um tom envolvente e empático, como se estivesse conversando diretamente com ${nomeAutor}.  
  - Certifique-se de que a análise seja altamente personalizada, utilizando insights da história do casal sempre que relevante.  
  - NÃO gere respostas genéricas ou vagas. A análise deve conter exemplos práticos e situações do dia a dia para que ${nomeAutor} se reconheça no texto.  
  - NÃO inclua introduções ou explicações fora do formato especificado. 
  - *IMPORTANTE*: Retorne a análise em Espanhol Global

  - IMPORTANTE: Retorne apenas um objeto JSON válido, sem formatação extra, exatamente nesta estrutura:   
    {"titulo":"título aqui","subtitulo":"subtítulo aqui","paragrafos":["parágrafo 1","parágrafo 2","parágrafo 3","parágrafo 4"]}
  `;

  try {
    const completion = await openai.chat.completions.create({
      messages: [{ 
        role: "system", 
        content: `Você é um assistente que SEMPRE retorna JSON válido. 
        Siga estas regras ESTRITAMENTE:
        1. Retorne um JSON com exatamente 3 chaves: "titulo", "subtitulo", "paragrafos"
        2. "paragrafos" deve ser um array com EXATAMENTE 4 strings
        3. Não use caracteres especiais que possam quebrar o JSON
        4. Mantenha o texto dentro das regras anteriores de análise de casal`
      },
      { 
        role: "user", 
        content: prompt 
      }],
      model: "gpt-4o-mini-2024-07-18",
      temperature: 0.3,
      max_tokens: 1000,
      response_format: { type: "json_object" }
    });

    const content = completion.choices[0].message.content?.trim() || '';
    
    // Validação adicional do JSON
    const parseJson = (jsonString: string) => {
      try {
        const parsed = JSON.parse(jsonString);
        
        // Validações extras
        if (!parsed.titulo || !parsed.subtitulo || !Array.isArray(parsed.paragrafos)) {
          throw new Error('Estrutura de JSON inválida');
        }
        
        if (parsed.paragrafos.length !== 4) {
          throw new Error('Deve haver exatamente 4 parágrafos');
        }
        
        return parsed;
      } catch (error) {
        console.error('Erro de parsing:', error);
        console.error('Conteúdo recebido:', jsonString);
        
        return {
          titulo: "Análise de Compatibilidade",
          subtitulo: "Erro na geração da análise",
          paragrafos: [
            "Não foi possível gerar a análise detalhada.",
            "Pedimos desculpas pelo inconveniente.",
            "Por favor, tente novamente mais tarde.",
            "Nosso time está trabalhando para resolver este problema."
          ]
        };
      }
    };

    return parseJson(content);
  } catch (error) {
    console.error('Erro ao gerar análise:', error);
    return {
      titulo: "Análise de Compatibilidade",
      subtitulo: "Erro ao gerar análise",
      paragrafos: [
        "Desculpe, não foi possível gerar a análise neste momento.",
        "Pedimos desculpas pelo inconveniente.",
        "Por favor, tente novamente mais tarde.",
        "Nosso time está trabalhando para resolver este problema."
      ]
    };
  }
}

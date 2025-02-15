interface ValidacaoNome {
  valido: boolean;
  mensagem: string;
}

export async function validarNomeGroq(nome: string): Promise<ValidacaoNome> {
  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama3-8b-8192',
        messages: [
          {
            role: "system",
            content: `Você é um assistente amigável que ajuda a validar nomes próprios.
            Sua função é verificar se o texto fornecido pode ser um nome próprio válido, sendo bastante permissivo na análise.

            Regras de validação:
            1. Aceitar nomes próprios de qualquer origem cultural (espanhois, brasileiro, americano, estrangeiros, etc)
            2. Aceitar variações e grafias não convencionais de nomes
            3. Aceitar nomes bíblicos e históricos (ex: Naã, Moisés, etc)
            4. Aceitar sobrenomes usados como nomes
            5. Aceitar nomes compostos por palavras não convencionais
            6. Seu objetivo é evitar digitação comum que usam quando não querem preencher corretamente como por exemplo:
            - "asdasdsad"
            -  "Nome"
            -  "123456"
            
            NÃO aceitar apenas:
            1. Palavras claramente ofensivas ou impróprias
            2. Números ou símbolos
            3. Frases ou expressões
            4. Marcas registradas óbvias (ex: Nike, Coca-Cola)

            Para nomes inválidos, use mensagens amigáveis como:
            - "Ops! Isso não parece ser um nome. Que tal digitar seu nome verdadeiro?"
            - "Hmm... precisamos do seu nome real para continuar."

            Para nomes válidos:
            - "Nome aceito! Podemos continuar."

            Responda apenas com um objeto JSON contendo:
            - valido (boolean): true se puder ser um nome próprio, false caso contrário
            - mensagem (string): Use as mensagens sugeridas acima, mantendo um tom amigável e direto`
          },
          {
            role: "user",
            content: `Analise se "${nome}" pode ser um nome próprio válido.`
          }
        ],
        temperature: 0.1,
        response_format: { type: "json_object" }
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices[0].message.content;

    if (!content) {
      return {
        valido: false,
        mensagem: 'Não foi possível validar o nome. Tente novamente.'
      };
    }

    const resultado = JSON.parse(content);
    return {
      valido: resultado.valido,
      mensagem: resultado.mensagem
    };
  } catch (error) {
    console.error('Erro ao validar nome com Groq:', error);
    return {
      valido: true, // Em caso de erro, permitimos passar para não bloquear o usuário
      mensagem: 'Não foi possível validar o nome no momento.'
    };
  }
}

export function JsonLdScript() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Decifrando Corações",
    "url": "https://decifrandocoracoes.com",
    "description": "Descubra o temperamento e a linguagem do amor do seu pretendente para criar uma conexão verdadeira e duradoura.",
    "applicationCategory": "Psychological Assessment",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BRL"
    },
    "about": {
      "@type": "Thing",
      "name": "Teste de Temperamento e Linguagem do Amor"
    },
    "keywords": [
      "como conquistar um homem",
      "linguagens do amor",
      "entender um homem",
      "psicologia de relacionamento",
      "como fazer ele se interessar",
      "criar conexão emocional",
      "relacionamento saudável",
      "método para conquistar",
      "inteligência emocional no amor",
      "guia de conquista"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

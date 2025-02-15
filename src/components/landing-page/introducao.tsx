'use client';

type IntroducaoProps = {
  nome_parceiro: string;
};

export function Introducao({ nome_parceiro }: IntroducaoProps) {
  if (!nome_parceiro) {
    throw new Error('Nome do pretendente não encontrado');
  }

  return (
    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 py-16 md:py-24 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* 1️⃣ Headline Curta e Impactante */}
        <div className="text-center">
          <div className="inline-block bg-purple-100/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-4">
            🔬 Ciencia Detrás de la Conexión Emocional
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-4 leading-tight">
          ¿Cómo Sabemos Lo Que Realmente Se Acerca o Se Aleja Entre Usted y {nome_parceiro}?
          </h2>
        </div>

        {/* 2️⃣ Texto Curto Validando a Metodologia */}
        <div className="text-left">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
          ¿Qué es lo que realmente hace que una relación funcione? Algunas personas creen que el amor solo es suficiente, pero la verdad es que <strong className="text-gray-900">la clave para una conexión profunda está en entender cómo cada persona siente y expresa emociones</strong>.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            Estudios del <strong className="text-gray-900">Dr. Gary Chapman</strong> muestran que <span className="font-semibold text-gray-900">los Lenguajes del Amor</span> definen la forma en que alguien recibe y demuestra cariño. Muchas veces, <strong className="text-gray-900">no es la falta de sentimientos lo que aleja a una pareja, sino la manera en que esos sentimientos son comunicados</strong>.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            Además, investigaciones de <strong className="text-gray-900">Tim LaHaye</strong> y <strong className="text-gray-900">David Keirsey</strong> revelan que nuestro <strong className="text-gray-900">temperamento</strong> influye directamente en <strong className="text-gray-900">nuestras reacciones emocionales, necesidades afectivas y desafíos en las relaciones</strong>.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            Cuando combinamos estos dos descubrimientos, conseguimos entender <strong className="text-gray-900">con exactitud lo que se acerca o se aleja emocionalmente entre dos personas</strong>. Y más que eso: podemos predecir <strong className="text-gray-900">lo que funciona y lo que puede crear barreras en la conexión entre ustedes</strong>.
          </p>
        </div>
        <div className="bg-white py-6 px-4 md:px-8 rounded-lg shadow-lg">
        <h4 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-4">📊 ¿Qué Significa Esto En La Práctica?</h4>
       

        {/* 3️⃣ Prova Social e Dados de Validação */}
        <div className="grid grid-cols-3 gap-4 md:gap-6 mt-8">
          {[
            { number: "96%", text: "Precisión Comportamental" },
            { number: "15mil+", text: "Análisis Realizados" },
            { number: "89%", text: "Éxito en 30 días" },
          ].map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-2xl md:text-3xl font-bold text-indigo-600 mb-2">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-gray-600">
                {stat.text}
              </div>
            </div>
          ))}
        </div>
        </div>

        {/* 4️⃣ Gatilho de Curiosidade */}
        <div className="text-center mt-8">
          <p className="text-lg md:text-xl font-semibold text-purple-700 italic">
          Ahora que tenemos las respuestas del test, conseguimos revelar los patrones emocionales de {nome_parceiro} – y cómo ellos impactan directamente su relación con él. Usted puede haber notado que, en algunos momentos, él actúa de forma distante o no expresa sentimientos como usted gustaría. Ahora usted va a entender el porqué.
          </p>
        </div>
      </div>
    </div>
  );
}

'use client';

import Image from 'next/image';

export function ApresentacaoGuia() {
  return (
    <div className="relative bg-gradient-to-br from-purple-100 via-white to-indigo-100 py-16 md:py-24 px-4 overflow-hidden">
      {/* Fundo decorativo com padrão de pontos */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div 
          className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: 'radial-gradient(#8B5CF6 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}
        />
      </div>

      {/* Elemento decorativo de fundo */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-purple-100/20 to-transparent opacity-30 transform -skew-x-12" />

      <div className="max-w-4xl mx-auto space-y-10 relative z-10">
        {/* 1️⃣ Headline Principal */}
        <div className="text-center">
          <div className="text-xl md:text-2xl font-semibold text-purple-600 mb-4 uppercase tracking-wider flex items-center justify-center gap-3">
            <span className="w-8 h-0.5 bg-purple-600"></span>
            📢 ¡Presentamos!
            <span className="w-8 h-0.5 bg-purple-600"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-6 leading-tight">
            El Mapa de la Conexión Emocional
          </h2>
          <Image src="/cover3d-guia.png" alt="El Guía Completo de la Conexión Emocional" width={800} height={600} className="mx-auto" />
          <p className="text-xl md:text-2xl text-gray-700 italic max-w-2xl mx-auto">
          El único método basado en la ciencia de los temperamentos y de los lenguajes del amor que muestra exactamente cómo crear un vínculo emocional fuerte y duradero con él.
          </p>
        </div>


        {/* 2️⃣ Parágrafos Introdutórios */}
        <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg">
        <p className="text-xl md:text-2xl text-gray-700 italic max-w-2xl mx-auto text-center">
        💡 ¿Qué es lo que realmente hace que un hombre se enamore profundamente?
        </p>
        </div>
        <div className="text-left">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            Lo que hace que un hombre quiera estar a su lado no es solo atracción, sino la forma en que él se siente emocionalmente conectado a usted.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
          Muchas mujeres creen que la atracción inicial es suficiente para mantener una relación, pero la verdad es que la clave para un vínculo inquebrantable está en la forma en que él se siente emocionalmente conectado a usted.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
          Ahora que ya entiende cómo él piensa, siente y expresa el amor, ha llegado el momento de transformar ese conocimiento en acciones estratégicas que realmente funcionan.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
          🗺️ El Mapa de la Conexión Emocional es un paso a paso práctico que le va a mostrar exactamente qué hacer, cómo actuar y cómo comunicarse para fortalecer esa conexión y hacer que él la vea como única e insustituible.
          </p>
        </div>

        {/* 3️⃣ O Que Você Vai Aprender */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-l-4 border-purple-600">
          <h3 className="text-2xl font-semibold text-purple-700 mb-6 text-center">
            Lo que usted va a aprender:
          </h3>
          <ul className="space-y-4 text-base md:text-lg text-gray-700">
            {[
              "Cómo los temperamentos influencian el comportamiento de él y qué significa esto para la relación de ustedes.",
              "Cómo identificar los gatillos emocionales que lo hacen sentirse seguro, conectado y verdaderamente enamorado.",
              "Qué decir y cómo actuar para que él la vea como alguien esencial y única en la vida de él.",
              "Los errores más comunes que alejan a un hombre de cada temperamento y cómo evitarlos.",
              "Cómo usar el Lenguaje del Amor de él para crear un ciclo de conexión continuo y mantener el interés siempre vivo."
            ]
            .map((item, index) => (
              <li key={index} className="flex items-start group">
                <span className="mr-4 text-purple-500 font-bold text-2xl">
                  ✔
                </span>
                <span className="flex-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 4️⃣ Por Que Este Guia Funciona */}
        <div className="bg-green-50 rounded-xl p-6 md:p-8 border-l-4 border-green-600">
          <h3 className="text-2xl font-semibold text-green-700 mb-6 text-center">
            ¿Por qué funciona este guía?
          </h3>
          <ul className="space-y-4 text-base md:text-lg text-green-800">
            {[
              "Basado en estudios comprobados sobre Temperamentos y Lenguajes del Amor, combinando ciencia y práctica.",
              "Método estructurado con un paso a paso claro y fácil de aplicar, sin necesidad de cambiar quién usted es.",
              "Resultados que pueden ser sentidos en pocos días al aplicar las estrategias correctas para el temperamento de él.",
              "No es sobre manipulación o jueguecitos, sino sobre crear una conexión auténtica y verdadera.",
              "El enfoque correcto para cada tipo de hombre, respetando su personalidad y la forma en que él se conecta emocionalmente."
            ]
            .map((item, index) => (
              <li key={index} className="flex items-start group">
                <span className="mr-4 text-green-500 font-bold text-2xl">
                  ✔
                </span>
                <span className="flex-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 5️⃣ Chamada para Ação (Comentada) */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-8 shadow-2xl hover:scale-[1.02] transition-transform">
          <div className="flex justify-center items-center mb-4 space-x-3">
            <span className="text-3xl">📥</span>
            <h3 className="text-2xl md:text-3xl font-bold">
              ¡Acceso inmediato!
            </h3>
          </div>
          <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto">
            Tan pronto como usted garantice su acceso, ya podrá comenzar a aplicar todo y ver cambios reales en el comportamiento de él.
          </p>
          {/* <button className="bg-white text-purple-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-purple-100 transition-colors">
            Garantir Meu Acesso Agora
          </button> */}
        </div>
      </div>
    </div>
  );
}

'use client';

type TransitionProps = {
  nome_parceiro: string;
};

export function Transition({ nome_parceiro }: TransitionProps) {
  return (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 py-16 md:py-24 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* 1️⃣ Headline Forte e Direta */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-800 mb-6 leading-tight uppercase">
            Ahora que entiendes cómo {nome_parceiro} se conecta emocionalmente, ¿cómo puedes usar esto para crear una relación más fuerte e irresistible?
          </h2>
        </div>

        {/* 2️⃣ Parágrafo de Reflexão e Leve Desconforto */}
        <div>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 text-left">
          Saber cómo él siente y expresa el amor es un gran paso, pero solo tener esta información no garantiza que lograrás crear la conexión que deseas.
          <br />
          Tal vez ya hayas sentido que:
          </p>
          <ul className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 list-none space-y-4 max-w-xl mx-auto">
            <li className="flex items-start">
              <span className="mr-3 text-red-500 font-bold text-2xl">•</span>
              <span>Te esfuerzas por demostrar interés, pero él parece distante, como si tus intentos de acercamiento simplemente no lo tocaran.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-red-500 font-bold text-2xl">•</span>
              <span>Cuando muestras cariño o atención, él no reacciona de la forma que esperas, y esto te deja frustrada, sin entender qué está mal.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-red-500 font-bold text-2xl">•</span>
              <span>Incluso cuando las cosas parecen estar bien, siempre hay una sensación de que algo falta — como si la conexión nunca fuera realmente profunda.</span>
            </li>
          </ul>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 text-left">
          ¿La verdad? No se trata de querer más, esforzarte más o cambiar quién eres. Se trata de saber exactamente cómo crear la conexión correcta para que él perciba, valore y sienta que te necesita.
          </p>
        </div>

        {/* 3️⃣ Apresentação das Opções */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-6">
          <h3 className="text-2xl font-semibold text-purple-700 mb-4 text-center">
            Ahora, tienes dos opciones
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-bold text-red-700 mb-2">Camino 1: Intentar Sola</h4>
              <p className="text-sm text-red-600">
                Aplicar esta información por tu cuenta y correr el riesgo de no saber exactamente qué funciona.
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-700 mb-2">Camino 2: Seguir Un Método Comprobado</h4>
              <p className="text-sm text-green-600">
              Usar un paso a paso validado, que transforma este conocimiento en acciones certeras para crear una conexión emocional verdadera y hacer que él te desee aún más.
              </p>
            </div>
          </div>
        </div>

        {/* 4️⃣ Transição para a Oferta */}
        <div className="text-center">
          <p className="text-xl md:text-2xl font-bold text-purple-800 italic">
            ¿Y sabes cuál es la buena noticia?
            <br />
            ¡Este método ya existe! Y puede cambiar completamente la dinámica entre ustedes.
          </p>
        </div>
      </div>
    </div>
  );
}

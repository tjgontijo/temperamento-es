'use client';

import { Heart, BrainCircuit, Clock, Focus } from 'lucide-react';

interface IntroducaoProps {
  onStart: () => void;
}

export function Introducao({ onStart }: IntroducaoProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center">
      <div className="w-full py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Bienvenida al Análisis de Conexión Emocional
            </h1>
            <p className="text-xl text-gray-600">
              Para obtener los mejores resultados, por favor, lea las recomendaciones a continuación
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Recomendação 1 */}
            <div className="bg-white rounded-lg p-6 shadow-md transform transition-all duration-200 hover:scale-105">
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-pink-500 mr-3" />
                <h2 className="text-xl font-semibold text-gray-900">Sé Sincera</h2>
              </div>
              <p className="text-gray-600">
                Ingrese la información solicitada con el máximo de atención y veracidad. Esto es fundamental para un análisis 
                preciso y personalizado de la compatibilidad entre ustedes.
              </p>
            </div>

            {/* Recomendação 2 */}
            <div className="bg-white rounded-lg p-6 shadow-md transform transition-all duration-200 hover:scale-105">
              <div className="flex items-center mb-4">
                <BrainCircuit className="w-8 h-8 text-purple-500 mr-3" />
                <h2 className="text-xl font-semibold text-gray-900">Enfoque Total</h2>
              </div>
              <p className="text-gray-600">
                Encuentre un lugar tranquilo y silencioso. Su concentración es esencial 
                para respuestas más precisas y resultados más exactos.
              </p>
            </div>

            {/* Recomendação 3 */}
            <div className="bg-white rounded-lg p-6 shadow-md transform transition-all duration-200 hover:scale-105">
              <div className="flex items-center mb-4">
                <Clock className="w-8 h-8 text-blue-500 mr-3" />
                <h2 className="text-xl font-semibold text-gray-900">Reserve Tiempo</h2>
              </div>
              <p className="text-gray-600">
                El cuestionario toma alrededor de 05 minutos. Dedique ese tiempo sin 
                interrupciones para una experiencia más provechosa.
              </p>
            </div>

            {/* Recomendação 4 */}
            <div className="bg-white rounded-lg p-6 shadow-md transform transition-all duration-200 hover:scale-105">
              <div className="flex items-center mb-4">
                <Focus className="w-8 h-8 text-green-500 mr-3" />
                <h2 className="text-xl font-semibold text-gray-900">Evite Distracciones</h2>
              </div>
              <p className="text-gray-600">
                Ponga el celular en silencio y cierre otras pestañas del navegador. 
                Cada respuesta es importante para su análisis final.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={onStart}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
            >
              Comenzar Análisis
              <Heart className="ml-2 w-5 h-5" />
            </button>
            <p className="mt-4 text-sm text-gray-500">
              Al comenzar, usted acepta proporcionar información verdadera para el mejor resultado del análisis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

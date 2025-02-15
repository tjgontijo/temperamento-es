'use client';

export function Oferta({ nome_parceiro }: { nome_parceiro: string }) {
  if (!nome_parceiro) {
    throw new Error('Nome do pretendente não encontrado');
  }

  return (
    <div className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-16 md:py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-50 opacity-20 rounded-3xl blur-xl"></div>
          
          <div className="relative z-10 p-8">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">
              <span className="block text-purple-900">Invierta en Su</span>
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Futuro con {nome_parceiro}
              </span>
              <div className="mt-2 h-1 w-24 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </h2>

            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed px-6 py-8 bg-white/50 backdrop-blur-sm rounded-2xl shadow-sm border border-purple-100/20">
                Ahora usted tiene acceso a un método validado, basado en ciencia y aplicado por miles de mujeres que transformaron sus relaciones. Si usted pudiera acelerar ese proceso y evitar años de intentos frustrados, ¿cuánto valdría eso para usted?
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {/* Pacote Normal */}
          <div className="w-full md:w-1/2 max-w-sm">
            <div className="bg-white/80 backdrop-blur rounded-2xl p-8 relative border-2 border-gray-100">
              <h3 className="text-xl font-bold text-gray-700 mb-4">Valor Normal</h3>
              
              {/* Preço */}
              <div className="mt-6 mb-8">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-3xl font-bold text-gray-400">R$ 67</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 pb-3 border-b border-gray-100">
                  <span className="text-gray-300">✓</span>
                  <span>Guía Personalizada</span>
                </li>
                <li className="flex items-center gap-3 pb-3 border-b border-gray-100">
                  <span className="text-gray-300">✓</span>
                  <span>Análisis de Temperamento</span>
                </li>
                <li className="flex items-center gap-3 pb-3 border-b border-gray-100">
                  <span className="text-gray-300">✓</span>
                  <span>Estrategias Prácticas</span>
                </li>
              </ul>

              <button disabled className="w-full bg-gray-300 text-white text-lg font-bold py-4 px-8 rounded-xl opacity-50 cursor-not-allowed">
                No Disponible
              </button>
            </div>
          </div>

          {/* Oferta Especial */}
          <div className="w-full md:w-1/2 max-w-sm relative">
            {/* Faixa de Desconto */}
            <div className="absolute -top-4 -right-10 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-1 rounded-lg transform rotate-6 shadow-lg z-20 animate-pulse">
              <span className="text-sm font-bold">50% DESCUENTO</span>
            </div>

            {/* Card Principal */}
            <div className="bg-white rounded-2xl p-8 relative transform transition-all duration-300 hover:scale-[1.02] border-2 border-purple-200 shadow-[0_8px_40px_-12px_rgba(124,58,237,0.5)]">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-2 py-1.5 rounded-full text-sm font-bold shadow-lg">
                  ⚡ Oferta Especial ⚡
                </div>
              </div>
              
              <div className="text-center mb-6 pt-4">
                <div className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-2">Solo Hoy</div>
                <div className="inline-block relative">
                  <span className="text-6xl font-black text-purple-700">R$37</span>
                  <div className="absolute -top-3 -right-6 transform rotate-12 bg-yellow-300 text-yellow-800 text-xs font-bold px-2 py-1 rounded">
                    HOY
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-500 font-medium">
                  <span className="text-green-500 font-semibold">Ahorro de R$30</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 p-3 rounded-lg bg-purple-50">
                  <svg className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-medium text-purple-900">Guía Paso a Paso</span>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-lg bg-purple-50">
                  <svg className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-medium text-purple-900">Análisis de Temperamento</span>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-lg bg-purple-50">
                  <svg className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-medium text-purple-900">Estrategias Prácticas</span>
                </li>

                <div className="mt-2 mb-3">
                  <span className="text-green-600 font-semibold">+ Usted también recibirá:</span>
                </div>
                
                <li className="flex items-center gap-3 p-3 rounded-lg bg-green-50">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/>
                  </svg>
                  <span className="font-medium text-green-900 text-left">Guía de Mensajes</span>
                </li>

                <li className="flex items-center gap-3 p-3 rounded-lg bg-green-50">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/>
                  </svg>
                  <span className="font-medium text-green-900 text-left">Guía de los Errores que Alejan a los Hombres de Cada Temperamento</span>
                </li>
              </ul>

              <a 
                href="https://pay.kiwify.com.br/HgJq08Z"
                target="_blank"
                rel="noopener noreferrer"
                className="utmify block w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white text-lg font-bold py-4 px-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative">
                  ¡QUIERO ESA CONEXIÓN CON {(nome_parceiro || '').toUpperCase()} AHORA!
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Texto de Justificativa */}
        <div className="mt-8 mb-8 text-center max-w-2xl mx-auto">
          <p className="text-gray-600 text-sm">
            Esta condición especial está disponible solo por tiempo limitado para hacer este conocimiento accesible a más mujeres.
          </p>
        </div>
      </div>
    </div>
  );
}

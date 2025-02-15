type ResultadoCategoria = {
  predominante: {
    nome: string;
    pontuacao: number;
  };
  secundario: {
    nome: string;
    pontuacao: number;
  };
  totalRespostas: number;
}

interface ResultadoSectionProps {
  titulo: string;  
  temperamento: ResultadoCategoria;
  linguagem: ResultadoCategoria;
}

export function ResultadoSection({ titulo, temperamento, linguagem }: ResultadoSectionProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-purple-800">{titulo}</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-medium mb-3">Perfil de Temperamento</h3>
          <div className="space-y-2">
            <div>
              <p className="font-medium text-gray-700">Temperamento Principal</p>
              <p className="text-purple-600">{temperamento.predominante.nome} ({temperamento.predominante.pontuacao} respostas)</p>
            </div>
            {temperamento.secundario.pontuacao > 0 && (
              <div>
                <p className="font-medium text-gray-700">Influência Secundária</p>
                <p className="text-purple-600">{temperamento.secundario.nome} ({temperamento.secundario.pontuacao} respostas)</p>
              </div>
            )}
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Baseado em {temperamento.totalRespostas} respostas analisadas
          </p>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-3">Linguagem do Amor</h3>
          <div className="space-y-2">
            <div>
              <p className="font-medium text-gray-700">Linguagem Principal</p>
              <p className="text-purple-600">{linguagem.predominante.nome} ({linguagem.predominante.pontuacao} respostas)</p>
            </div>
            {linguagem.secundario.pontuacao > 0 && (
              <div>
                <p className="font-medium text-gray-700">Linguagem Secundária</p>
                <p className="text-purple-600">{linguagem.secundario.nome} ({linguagem.secundario.pontuacao} respostas)</p>
              </div>
            )}
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Baseado em {linguagem.totalRespostas} respostas analisadas
          </p>
        </div>
      </div>
    </div>
  );
}

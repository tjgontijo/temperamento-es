import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";

interface DepoimentoCardProps {
  nome: string;
  idade: number;
  cidade?: string;
  texto: string;
}

export function DepoimentoCard({ nome, idade, cidade, texto }: DepoimentoCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
      <CardContent className="p-6 relative">
        <QuoteIcon className="w-8 h-8 text-purple-100 absolute top-4 right-4" />
        <div className="space-y-4">
          <p className="text-gray-600 italic relative z-10">
            &ldquo;{texto}&rdquo;
          </p>
          <div className="text-sm border-t pt-4">
            <p className="font-semibold text-purple-900">{nome}, {idade}</p>
            <p className="text-gray-500">{cidade}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-purple-100 last:border-0">
      <button
        className="w-full py-4 flex items-center justify-between text-left"
        onClick={onClick}
      >
        <span className="text-lg font-semibold text-purple-900">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-purple-500 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "¿Qué voy a aprender en esta guía?",
      answer: "Usted va a entender cómo los temperamentos y los lenguajes del amor influencian la conexión emocional y aprender estrategias prácticas para fortalecer su relación."
    },
    {
      question: "¿Este método funciona para cualquier tipo de relación?",
      answer: "¡Sí! El Mapa de la Conexión Emocional está basado en la psicología comportamental y puede ser aplicado en diferentes fases de la relación – desde quien está comenzando a involucrarse hasta quien quiere mejorar una relación de larga data."
    },
    {
      question: "¿Voy a necesitar cambiar quién soy para aplicar este método?",
      answer: "¡No! Esta guía no enseña manipulación o jueguecitos, sino cómo crear una conexión auténtica y real con él."
    },
    {
      question: "¿Cuánto tiempo lleva ver resultados?",
      answer: "Los resultados pueden variar, pero muchas mujeres perciben cambios en la dinámica de la relación en pocos días, cuando aplican las estrategias correctamente."
    },
    {
      question: "¿Cómo recibo el material después de la compra?",
      answer: "Después de la confirmación del pago, usted recibirá acceso inmediato al Mapa de la Conexión Emocional en la plataforma Hotmart. Hotmart es una de las plataformas más seguras y reconocidas, garantizando que usted pueda acceder a su material de forma rápida y protegida."
    },
    {
      question: "¿Y si percibo que el material no se ajusta a mi necesidad?",
      answer: "Usted tiene 7 días de garantía. Caso perciba que el material no atiende sus expectativas, podrá solicitar el reembolso de forma simple y sin burocracia directamente por la plataforma Hotmart."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-purple-900 mb-2">
          ¿Aún tiene dudas?
        </h2>
        <p className="text-center text-purple-700 mb-12">
          Vea las respuestas para las preguntas más comunes
        </p>

        <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur rounded-2xl p-6 shadow-sm border border-purple-100">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

'use client';

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Target, Users2, AlertTriangle } from "lucide-react";
import { DepoimentoCard } from "@/components/layout/depoimento-card";
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  return (
    <main className="relative overflow-hidden">
      {/* Header */}
      <Header />

      {/* Decorative Blurred Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 flex items-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-100 via-pink-50 to-purple-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern-background.svg')] opacity-10 pointer-events-none"></div>
        <div className="container mx-auto px-4 py-16 relative z-10 grid md:grid-cols-2 gap-8 items-center">
          {/* Coluna de Texto */}
          <div className="space-y-6 md:space-y-7 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4 leading-tight uppercase">
              ¿Por qué actúa así? Sin darte cuenta, podrías estar alejándolo…
            </h1>
            <div className="text-lg text-gray-700 mb-6 space-y-4">
              <p>
                Ya has sentido que él te quiere, pero a veces parece distante o confuso. Esto sucede porque cada persona tiene una forma única de conectarse emocionalmente. Con este análisis, finalmente entenderás qué los acerca o los aleja.
              </p>                
            </div>
            <div className="text-lg text-gray-700 mb-6">
              <p className="font-semibold text-purple-800 italic">
                Existe una forma de entender cómo piensa en el amor y qué realmente los acerca. ¿Quieres saber cómo?
              </p>
            </div>
            <div className="flex justify-center md:justify-start">
              <Button 
                onClick={() => router.push('/questionario')} 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-8 px-9 rounded-full shadow-xl text-xl whitespace-normal text-center hover:scale-105 transition-transform duration-300"
              >
                Descubre Ahora Qué Está Alejándolos
              </Button>
            </div>
          </div>

          {/* Coluna de Imagem */}
          <div className="flex justify-center items-center w-full">
            <Image 
              src="/deco-girls-background-hero.png" 
              alt="Mujer Pensativa" 
              width={500} 
              height={500} 
              className="block md:hidden w-full h-auto object-cover md:object-contain md:max-w-full -mx-4 md:mx-0 rounded-b-[20px] translate-x-3 md:translate-x-8"
              priority
            />
            <Image 
              src="/deco-girls-background-hero-desktop.png" 
              alt="Mujer Pensativa" 
              width={500} 
              height={500} 
              className="hidden md:block w-full h-auto object-cover md:object-contain md:max-w-full -mx-4 md:mx-0"
              priority
            />
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section id="beneficios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-6 uppercase">
              ¿Qué Descubrirás Con Este Análisis?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Ya has sentido que él te quiere, pero a veces parece distante o confuso. Esto sucede porque cada persona tiene una forma única de conectarse emocionalmente. Con este análisis, finalmente entenderás qué los acerca o los aleja.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-purple-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <Target className="w-10 h-10 text-purple-600 mr-4" />
                <h3 className="text-xl font-semibold text-purple-900">
                  ¿Por Qué Actúa Así?
                </h3>
              </div>
              <p className="text-gray-700">
                Descubre los patrones emocionales que influyen en su comportamiento en la relación.
              </p>
            </div>

            <div className="p-6 bg-purple-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <Heart className="w-10 h-10 text-purple-600 mr-4" />
                <h3 className="text-xl font-semibold text-purple-900">
                  ¿Qué Lo Hace Sentirse Amado?
                </h3>
              </div>
              <p className="text-gray-700">
                Entiende cómo realmente percibe y recibe amor, para evitar malentendidos.
              </p>
            </div>

            <div className="p-6 bg-purple-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <MessageCircle className="w-10 h-10 text-purple-600 mr-4" />
                <h3 className="text-xl font-semibold text-purple-900">
                  ¿Cómo Crear Una Conexión Genuina?
                </h3>
              </div>
              <p className="text-gray-700">
                Aprende a comunicarte de una manera que él comprenda y valore.
              </p>
            </div>

            <div className="p-6 bg-purple-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <AlertTriangle className="w-10 h-10 text-purple-600 mr-4" />
                <h3 className="text-xl font-semibold text-purple-900">
                  ¿Cómo Evitar Errores Que Alejan?
                </h3>
              </div>
              <p className="text-gray-700">
                Identifica actitudes que pueden estar debilitando la relación sin que te des cuenta.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <h3 className="text-2xl md:text-3xl font-bold text-purple-900 mb-6">
              ¿Estás lista para descubrir qué realmente sucede entre ustedes?
            </h3>
            <Button
              onClick={() => router.push('/questionario')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-8 px-8 rounded-full shadow-xl text-xl hover:scale-105 transition-transform duration-300 whitespace-normal text-center"
            >
              Recibir Mi Análisis Ahora
            </Button>
          </div>
        </div>
      </section>

      {/* Depoimento Após Benefícios */}
      <section className="bg-gradient-to-r from-purple-100 to-pink-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-200 rounded-full opacity-50 blur-2xl"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <Heart className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-900">Experiencia Real</h3>
                  <p className="text-gray-600">Validando Nuestro Análisis</p>
                </div>
              </div>
              <blockquote className="text-2xl italic text-gray-800 mb-6">
                &quot;Pensaba que mi novio era frío, pero después de la prueba entendí que expresa amor de una forma diferente a la mía. ¡Eso lo cambió todo!&quot;
              </blockquote>
              <div className="text-right">
                <p className="font-semibold text-purple-900">María Fernández, 28</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section id="como-funciona" className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-6 uppercase">
              ¿Cómo Funciona el Análisis de la Pareja?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Toda relación tiene su dinámica única, y entender esa conexión puede transformar completamente tu relación. Nuestro análisis va mucho más allá de identificar su temperamento y lenguaje del amor – revela cómo ustedes dos interactúan y qué puede fortalecer aún más esa relación.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-purple-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-purple-900">
                  Responda Unas Preguntas
                </h3>
              </div>
              <p className="text-gray-700">
                Cuéntame un poco sobre ustedes dos. Comparte tus percepciones sobre el comportamiento de él y la forma en que ustedes se relacionan.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-purple-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-purple-900">
                  Nuestro Análisis Inteligente
                </h3>
              </div>
              <p className="text-gray-700">
                Identificamos patrones emocionales en la pareja. Utilizamos conceptos de psicología comportamental y lenguajes del amor para entender cómo ustedes se conectan.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-purple-900">
                  Descubra Sus Puntos Fuertes y Desafíos
                </h3>
              </div>
              <p className="text-gray-700">
                Recibe un informe exclusivo sobre la dinámica entre ustedes. Entiende qué fortalece la relación, qué puede estar creando barreras y cómo ajustar la comunicación.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-purple-600">4</span>
                </div>
                <h3 className="text-xl font-semibold text-purple-900">
                  Transforme Su Relación
                </h3>
              </div>
              <p className="text-gray-700">
                Aplica los insights y vea la diferencia. Utiliza la información para crear una conexión más profunda y una relación más leve y equilibrada.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <h3 className="text-2xl md:text-3xl font-bold text-purple-900 mb-6">
              ¿Estás lista para descubrir qué realmente sucede entre ustedes?
            </h3>
            <Button
              onClick={() => router.push('/questionario')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-8 px-8 rounded-full shadow-xl text-xl hover:scale-105 transition-transform duration-300 whitespace-normal text-center"
            >
              Veo Qué Descubrimos Sobre Ustedes Dos
            </Button>
          </div>
        </div>
      </section>

      {/* Depoimento Após Como Funciona */}
      <section className="bg-gradient-to-r from-pink-100 to-purple-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 relative overflow-hidden">
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-pink-200 rounded-full opacity-50 blur-2xl"></div>
            <div className="relative z-10 text-right">
              <div className="flex items-center justify-end mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-purple-900">Transformación Real</h3>
                  <p className="text-gray-600">Mejorando Relaciones</p>
                </div>
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center ml-4">
                  <Users2 className="w-8 h-8 text-pink-600" />
                </div>
              </div>
              <blockquote className="text-2xl italic text-gray-800 mb-6">
                &quot;La gente se peleaba mucho porque yo pensaba que él no se importaba. Después del análisis, percibí que la forma de él de demostrar amor era diferente a la mía. ¡Ahora nuestra relación está mucho más leve y feliz!&quot;
              </blockquote>
              <div>
                <p className="font-semibold text-purple-900">Carmen López, 32</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Estás lista para transformar tu relación?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Comienza ahora mismo el camino hacia una conexión más profunda y significativa.
          </p>
          <Button
            onClick={() => router.push('/formulario-contexto')}
            className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-6 text-lg rounded-full"
          >
            Comenzar Análisis Gratuito
          </Button>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-4">
            Historias de Éxito
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Descubre cómo otras mujeres transformaron sus relaciones a través de nuestro método
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <DepoimentoCard
              nome="María Fernández"
              idade={28}
              texto="Después de entender el temperamento de mi novio, nuestra comunicación mejoró mucho. Ahora sé cómo expresar mis necesidades de una forma que él comprenda y responda positivamente."
            />
            <DepoimentoCard
              nome="Carmen López"
              idade={32}
              texto="El informe fue revelador. Descubrí que mi pretendiente tiene un lenguaje del amor totalmente diferente al mío. Hacer los ajustes sugeridos nos acercó mucho más."
            />
            <DepoimentoCard
              nome="Elena Rodríguez"
              idade={29}
              texto="Estaba a punto de rendirme en la relación por no entender algunas actitudes de él. El cuestionario me ayudó a ver que era solo su temperamento melancólico manifestándose."
            />
            <DepoimentoCard
              nome="Laura Martínez"
              idade={35}
              texto="Los insights sobre el lenguaje del amor de él cambiaron todo. Ahora sé exactamente cómo demostrar mi afecto de una forma que él realmente valora y aprecia."
            />
            <DepoimentoCard
              nome="Sofía García"
              idade={31}
              texto="El material complementario fue fundamental. Las sugerencias prácticas y ejercicios me ayudaron a construir una conexión mucho más profunda con mi pareja."
            />
            <DepoimentoCard
              nome="Ana Sánchez"
              idade={33}
              texto="Crecí en una familia tradicional y siempre tuve dificultades para entender las sutilezas emocionales de mi pareja. El informe me mostró patrones de comunicación que nunca había percibido antes."
            />
          </div>
        </div>
      </section>

      {/* CTA Depoimentos Section */}
      <section className="bg-gradient-to-r from-purple-100 to-pink-100 py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">
            Tu Historia de Transformación Comienza Aquí
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
            Cientos de mujeres ya descubrieron cómo entender mejor sus relaciones. Ahora es tu turno de descubrir los secretos de la conexión emocional y transformar tu historia de amor.
          </p>
          <Button
            onClick={() => router.push('/questionario')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-8 px-8 rounded-full shadow-xl text-xl hover:scale-105 transition-transform duration-300 whitespace-normal text-center"
          >
            Estoy Lista Para Cambiar Mi Historia
          </Button>
        </div>
      </section>
      <Footer />
    </main>
  );
}

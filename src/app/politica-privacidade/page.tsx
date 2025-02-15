import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad - Decifrando Corações',
  description: 'Política de privacidad y tratamiento de datos personales'
};

export default function PoliticaPrivacidadePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-purple-900">Política de Privacidad</h1>
      
      <section className="prose prose-purple max-w-none">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800">1. Introducción</h2>
        <p>Su privacidad es importante para nosotros. Esta Política de Privacidad describe cómo recopilamos, usamos y protegemos la información proporcionada por los usuarios al acceder a nuestro sitio web y utilizar nuestros servicios.</p>
        <p>Al utilizar nuestra plataforma, usted acepta los términos de esta Política de Privacidad.</p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-800">2. Información Recopilada</h2>
        <p>Podemos recopilar y procesar la siguiente información:</p>
        <ul>
          <li><strong>Datos proporcionados directamente por el usuario:</strong> Nombre, e-mail, nombre del/de la  parceiro(a), respuestas al cuestionario y otros datos ingresados voluntariamente.</li>
          <li><strong>Datos de navegación:</strong> Dirección IP, tipo de dispositivo, ubicación aproximada, páginas visitadas y tiempo de permanencia.</li>
          <li><strong>Cookies y tecnologías de rastreo:</strong> Utilizamos cookies para mejorar la experiencia del usuario y personalizar contenidos y anuncios.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-purple-800">3. Uso de la Información</h2>
        <p>Las informaciones recopiladas son utilizadas para:</p>
        <ul>
          <li>Proporcionar análisis personalizados sobre relaciones.</li>
          <li>Mejorar la experiencia del usuario en la plataforma.</li>
          <li>Enviar contenidos relevantes, ofertas y actualizaciones.</li>
          <li>Gestionar compras y proporcionar soporte al cliente.</li>
          <li>Cumplir obligaciones legales y regulatorias.</li>
        </ul>
        <p>El análisis de los cuestionarios puede ser realizado por <strong>inteligência artificial</strong>, incluyendo <strong>OpenAI</strong> o <strong>Llama</strong>, para proporcionar un informe personalizado con base en las respuestas proporcionadas.</p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-800">4. Compartición de Datos</h2>
        <p>Su información <strong>no será vendida o compartida con terceros</strong>, excepto en los siguientes casos:</p>
        <ul>
          <li><strong>Proveedores de servicios:</strong> Podemos compartir datos con plataformas seguras de pago (ej.: Kwify) y herramientas de análisis (ej.: Google Analytics, Meta Ads).</li>
          <li><strong>Análisis de IA:</strong> Algunos datos pueden ser procesados por herramientas de inteligência artificial (ej.: OpenAI, Llama) para generar insights personalizados.</li>
          <li><strong>Obligación legal:</strong> Si es exigido por ley u orden judicial.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-purple-800">5. Almacenamiento y Seguridad</h2>
        <p>Adoptamos medidas técnicas y organizacionales para proteger sus datos contra accesos no autorizados, pérdidas y uso indebido. Sin embargo, ningún sistema es 100% seguro, y recomendamos que los usuarios también adopten prácticas de seguridad, como contraseñas fuertes.</p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-800">6. Derechos del Usuario</h2>
        <p>Usted tiene el derecho de:</p>
        <ul>
          <li><strong>Acceder, corregir o eliminar sus datos</strong> en cualquier momento.</li>
          <li><strong>Solicitar la interrupción del envío de comunicaciones</strong> (opt-out).</li>
          <li><strong>Revocar su consentimiento para el procesamiento de datos personales.</strong></li>
        </ul>
        <p>Para ejercer estos derechos, entre en contacto con nosotros por el e-mail <strong>contato@decifrandocoracoes.com</strong>.</p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-800">7. Uso de Cookies</h2>
        <p>Utilizamos cookies para mejorar su experiencia en el sitio. Usted puede configurar su navegador para bloquear cookies, pero esto puede impactar algunas funcionalidades de la plataforma.</p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-800">8. Alteraciones en la Política de Privacidad</h2>
        <p>Podemos actualizar esta Política de Privacidad periódicamente. Cualquier alteración será comunicada en nuestro sitio.</p>

        <p className="mt-8 text-sm text-gray-600">
          Última actualización: {new Date().toLocaleDateString('pt-BR')}
        </p>
      </section>
    </div>
  );
}
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Términos de Uso - Decifrando Corações',
  description: 'Términos y condiciones de uso de la plataforma Decifrando Corações'
};

export default function TermosUsoPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-purple-900">Términos de Uso</h1>
      
      <section className="prose prose-purple max-w-none">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800">1. Introducción</h2>
        <p>¡Bienvenido a <strong>Decifrando Corações</strong>! Al acceder y utilizar nuestra plataforma, usted acepta cumplir estos Términos de Uso. Si no está de acuerdo con alguna parte de estos términos, le recomendamos que no utilice nuestros servicios.</p>
        <p>Nuestro sitio ofrece un cuestionario interactivo y análisis personalizados para ayudar en el entendimiento de las relaciones, basándose en conceptos de <strong>Linguagens do Amor e Temperamentos</strong>.</p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-800">2. Descripción de los Servicios</h2>
        <p>La plataforma ofrece:</p>
        <ul>
          <li>Un <strong>cuestionario personalizado</strong>, que recolecta informaciones sobre el usuario y su relación.</li>
          <li><strong>Análisis generados por inteligencia artificial</strong> (OpenAI o Llama) para proporcionar *insights* sobre la dinámica emocional de la pareja.</li>
          <li>Un <strong>ebook pago</strong> que enseña cómo aplicar esos conocimientos en la relación.</li>
          <li><strong>Contenidos adicionales</strong>, como materiales de apoyo, bonos y consejos exclusivos.</li>
        </ul>
        <p>Los servicios ofrecidos son <strong>digitales</strong>, y el acceso al material puede ser hecho vía <strong>plataforma Kwify</strong> u otro medio indicado en el momento de la compra.</p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-800">3. Registro y Responsabilidades del Usuario</h2>
        <p>Para acceder a algunas partes del servicio, puede ser necesario proporcionar informaciones personales, como nombre y e-mail. Al registrarse, usted concuerda que:</p>
        <ul>
          <li>Las informaciones proporcionadas son <strong>verdaderas, precisas y actualizadas</strong>.</li>
          <li>No utilizará la plataforma para fines ilegales o que violen estos Términos de Uso.</li>
          <li>Es responsable por la <strong>confidencialidad de sus datos de acceso</strong>, si aplicable.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-purple-800">4. Uso de las Informaciones Colectadas</h2>
        <p>Las informaciones colectadas son utilizadas para:</p>
        <ul>
          <li>Personalizar la experiencia del usuario y generar análisis específicos.</li>
          <li>Mejorar los servicios ofrecidos y optimizar campañas de marketing.</li>
          <li>Gestionar transacciones, caso el usuario opte por adquirir el ebook u otros contenidos pagos.</li>
        </ul>
        <p>Para más detalles sobre cómo tratamos sus datos, consulte nuestra <strong><Link href="/politica-privacidade">Política de Privacidad</Link></strong>.</p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-800">5. Derechos de Autor y Propiedad Intelectual</h2>
        <p>Todo el contenido disponible en el sitio, incluyendo textos, gráficos, análisis generados por IA y materiales pagos, <strong>está protegido por derechos de autor</strong>. El usuario <strong>no puede copiar, distribuir, modificar o revender cualquier parte del contenido sin autorización expresa</strong>.</p>
        <p>La violación de esos derechos puede resultar en <strong>suspensión del acceso</strong> y <strong>medidas legales cabibles</strong>.</p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-800">6. Pagos y Reembolsos</h2>
        <ul>
          <li>El ebook y otros contenidos pagos son adquiridos por medio de plataformas seguras, como <strong>Kwify</strong>.</li>
          <li>Ofrecemos una <strong>garantía de 7 días</strong> conforme el Código de Defensa del Consumidor.</li>
          <li>El reembolso será procesado dentro del plazo estipulado por la plataforma de pago.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-purple-800">7. Limitación de Responsabilidad</h2>
        <p>Nuestro servicio tiene carácter <strong>informativo y educacional</strong> y <strong>no sustituye asesoramiento profesional</strong>. Los análisis generados por IA son basados en las respuestas del usuario y <strong>no deben ser interpretadas como verdades absolutas o previsiones garantizadas sobre relaciones</strong>.</p>
        <p>No nos responsabilizamos por decisiones tomadas con base en los contenidos ofrecidos.</p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-800">8. Alteraciones en los Términos de Uso</h2>
        <p>Estos Términos de Uso pueden ser actualizados periódicamente. La versión más reciente estará siempre disponible en nuestro sitio.</p>

        <h2 className="text-2xl font-semibold mb-4 text-purple-800">9. Contacto</h2>
        <p>Caso tenga dudas sobre estos Términos de Uso, entre en contacto por el e-mail <strong>contato@decifrandocoracoes.com</strong>.</p>

        <p className="mt-8 text-sm text-gray-600">
          Última actualización: {new Date().toLocaleDateString('pt-BR')}
        </p>
      </section>
    </div>
  );
}
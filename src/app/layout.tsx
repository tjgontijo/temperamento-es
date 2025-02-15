import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { JsonLdScript } from "@/components/scripts/JsonLd";
import { HeadScripts } from '@/components/scripts/HeadScripts';
import UtmifyScripts from '@/components/scripts/utmfy-scripts';
import { BodyScripts } from '@/components/scripts/BodyScripts';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://decifrandocoracoes.com'),
  title: {
    default: "Descubra Como Criar uma Conexão Irresistível com Ele",
    template: `%s | ${process.env.NEXT_PUBLIC_SYSTEM_FULL_NAME || 'Decifrando Corações'}`,
  },
  description: "Aprende a entender lo que realmente conquista a un hombre y transforma tu relación. Descubre el camino más rápido para crear una conexión emocional fuerte y duradera.",
  keywords: [
    "cómo conquistar a un hombre",
    "cómo entender a un hombre",
    "cómo saber si le gusto",
    "cómo hacer que un hombre se enamore",
    "cómo lograr que un hombre se interese",
    "cómo tener una relación saludable",
    "cómo mejorar la comunicación en la relación",
    "cómo saber si él es el amor de mi vida",
    "lenguajes del amor cómo aplicar",
    "cómo usar la psicología para conquistar a alguien",
    "guía de conquista",
    "método para conquistar",
    "curso de seducción",
    "inteligencia emocional en el amor"
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://decifrandocoracoes.com',
    title: process.env.NEXT_PUBLIC_SYSTEM_FULL_NAME || 'Decifrando Corações',
    description: "Aprende a entender lo que realmente conquista a un hombre y transforma tu relación. Descubre el camino más rápido para crear una conexión emocional fuerte y duradera.",
    siteName: process.env.NEXT_PUBLIC_SYSTEM_FULL_NAME || 'Decifrando Corações',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Decifrando Corações - Descubra seu temperamento'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: process.env.NEXT_PUBLIC_SYSTEM_FULL_NAME || 'Decifrando Corações',
    description: "Aprende a entender lo que realmente conquista a un hombre y transforma tu relación. Descubre el camino más rápido para crear una conexión emocional fuerte y duradera.",
    images: ['/logo.png']
  },
  icons: {
    icon: '/logo.png',
    apple: '/apple-touch-icon.png'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    // Adicione outras verificações de sites aqui
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
      <UtmifyScripts />
        <HeadScripts />
      </head>
      <body className={inter.className}>
        <BodyScripts />
        {children}
        <Toaster />
        <JsonLdScript />
      </body>
    </html>
  );
}

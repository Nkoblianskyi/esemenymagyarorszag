import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto - Envíanos un Mensaje | EntradasEnEspaña',
  description: 'Contáctanos para cualquier pregunta sobre nuestro servicio de comparación de entradas. Estamos aquí para ayudarte a encontrar las mejores ofertas.',
  keywords: [
    'contacto',
    'soporte',
    'ayuda',
    'preguntas',
    'contactar entradasenespana',
  ],
  openGraph: {
    title: 'Contacto - EntradasEnEspaña',
    description: 'Envíanos un mensaje. Respondemos en 24-48 horas',
    type: 'website',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

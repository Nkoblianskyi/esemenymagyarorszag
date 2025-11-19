import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Buscar Eventos - Entradas en España | EntradasEnEspaña',
  description: 'Busca y compara precios de entradas para conciertos, fútbol, teatro y eventos en toda España. Encuentra las mejores ofertas de múltiples revendedores.',
  keywords: [
    'buscar entradas',
    'eventos españa',
    'conciertos españa',
    'fútbol españa',
    'teatro españa',
    'festivales españa',
    'comparar precios entradas',
    'entradas baratas',
    'entradas Madrid',
    'entradas Barcelona',
    'entradas Valencia',
    'entradas Sevilla',
  ],
  openGraph: {
    title: 'Buscar Eventos en España - EntradasEnEspaña',
    description: 'Compara precios de entradas para eventos en España de múltiples revendedores',
    type: 'website',
  },
}

export default function EventosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

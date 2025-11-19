import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CookieBanner } from '@/components/cookie-banner'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Esemény Magyarország - Jegyárak Összehasonlítása és Megtakarítás',
  description: 'Hasonlítsa össze a jegyárakat koncertekre, sportrendezvényekre, színházra és eseményekre Magyarországon. Átlátható árösszehasonlítás Jegy.hu, Interticket, Eventim HU és további partnerektől.',
  keywords: [
    'jegyek magyarország',
    'jegyek vásárlás',
    'jegyárak összehasonlítása',
    'koncert jegyek',
    'foci jegyek',
    'színház jegyek',
    'sport jegyek',
    'Jegy.hu',
    'Interticket',
    'TicketExpress',
    'Eventim HU',
    'jegy viszonteladás',
    'olcsó jegyek',
    'jegyek budapest',
    'jegy aggregátor',
    'jegy összehasonlítás',
    'ferencváros jegyek',
    'sziget fesztivál jegyek',
    'puskás aréna jegyek',
  ],
  authors: [{ name: 'Esemény Magyarország' }],
  openGraph: {
    title: 'Esemény Magyarország - Jegyárak Összehasonlítása',
    description: 'Hasonlítsa össze a jegyárakat magyarországi eseményekre. Találja meg a legjobb ajánlatokat több viszonteladótól.',
    url: 'https://esemenymagyarorszag.com',
    siteName: 'Esemény Magyarország',
    locale: 'hu_HU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Esemény Magyarország - Jegyárak Összehasonlítása',
    description: 'Hasonlítsa össze a jegyárakat magyarországi eseményekre',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon.ico',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/favicon.ico',
        type: 'image/svg+xml',
      },
    ],
    apple: '/favicon.ico',
  },
    generator: 'v0.app'
}
// </CHANGE>

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hu">
      <body className={`font-sans antialiased flex flex-col min-h-screen`}>
        <SiteHeader />
        <main className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}

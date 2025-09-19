import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'JeyLabbb - AI Engines',
  description: 'Reto 30 días / 3 proyectos — sin postureo, en tiempo real. Descubre los últimos proyectos de IA de JeyLabbb.',
  keywords: ['AI', 'Inteligencia Artificial', 'JeyLabbb', 'Proyectos', 'Innovación'],
  authors: [{ name: 'JeyLabbb' }],
  creator: 'JeyLabbb',
  publisher: 'JeyLabbb',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jeylabbb.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'JeyLabbb - AI Engines',
    description: 'Reto 30 días / 3 proyectos — sin postureo, en tiempo real.',
    url: 'https://jeylabbb.com',
    siteName: 'JeyLabbb',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'JeyLabbb - AI Engines',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JeyLabbb - AI Engines',
    description: 'Reto 30 días / 3 proyectos — sin postureo, en tiempo real.',
    images: ['/og.jpg'],
    creator: '@jeylabbb',
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
  verification: {
    google: 'google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#00ffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Grupo Erilaz — Fábrica de Software Proptech',
  description:
    'Construimos los productos digitales que el sector inmobiliario necesita. Software especializado en proptech para Colombia y Latinoamérica.',
  keywords: [
    'proptech',
    'software inmobiliario',
    'fábrica de software',
    'Colombia',
    'desarrollo de producto',
    'NidoRaiz',
    'Erilaz',
  ],
  openGraph: {
    title: 'Grupo Erilaz — Fábrica de Software Proptech',
    description:
      'Construimos productos digitales que transforman el sector inmobiliario colombiano.',
    type: 'website',
    locale: 'es_CO',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={outfit.variable}>
      <body className="font-sans antialiased bg-zinc-950 text-zinc-100 noise-layer">
        {children}
      </body>
    </html>
  )
}

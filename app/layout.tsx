import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zahra Kleermakerij - Uw Kleermaker in Delft',
  description: 'Ontdek de perfecte pasvorm en vakmanschap bij Kleermakerij Zahra. Alles voor maatkleding, reparatie, gordijnen op maat en stomerij in Delft.',
  keywords: 'kleermaker, kleermakerij, Delft, maatkleding, kledingreparatie, gordijnen op maat, stomerij, Zahra, Oosthaven',
  authors: [{ name: 'Zahra Kleermakerij' }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.svg', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    title: 'Zahra Kleermakerij - Uw Kleermaker in Delft',
    description: 'Ontdek de perfecte pasvorm en vakmanschap bij Kleermakerij Zahra.',
    type: 'website',
    locale: 'nl_NL',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

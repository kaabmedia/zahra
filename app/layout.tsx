import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zahra Kleermakerij - Uw Kleermaker in Delft',
  description: 'Ontdek de perfecte pasvorm en vakmanschap bij Kleermakerij Zahra. Alles voor maatkleding, reparatie, gordijnen op maat en stomerij in Delft.',
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

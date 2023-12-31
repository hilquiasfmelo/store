import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Header } from '@/components/ui/header'
import { Footer } from '@/components/ui/footer'
import { AuthProvider } from '@/providers/auth'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store - FSW',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-full flex-col">
          <AuthProvider>
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </AuthProvider>
        </div>
      </body>
    </html>
  )
}

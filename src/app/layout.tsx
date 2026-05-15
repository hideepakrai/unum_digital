import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/index.css'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import Providers from '@/components/Providers'
import { getJwtSecret } from '@/lib/runtime'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
getJwtSecret()

export const metadata: Metadata = {
  title: 'Unum Digital | Creative Direction & Strategy Agency',
  description: 'Unum Digital provides world-class creative direction, strategic branding, high-performance web experiences, and cinematic video production for brands that need systems and scale.',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter text-brand-text`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

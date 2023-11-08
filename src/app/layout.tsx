import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cinemepedia',
  description: 'awesome cinema app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='id'>
      <body className={montserrat.className}>
        <Navbar />
        {children}
        <hr />
        <Footer />
      </body>
    </html>
  )
}

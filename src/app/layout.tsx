import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'

import { DesignProvider } from '../context/design/DesignProvider'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata :Metadata= {
  title: 'Ropa de programador',
  description: 'Venta de ropa de programador',
  icons:{
    icon:{
      url:'/logo.png',
      type:'image/png'
    },
    shortcut:{url:'/logo.png', type:'image/png'}
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <DesignProvider>
          {children}
        </DesignProvider>
      </body>
    </html>
  )
}

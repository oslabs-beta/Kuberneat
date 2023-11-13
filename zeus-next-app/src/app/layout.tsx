import type { Metadata } from 'next'
import './globals.css'
import Providers from '../components/Providers';
import { Inter } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Zeus Next App',
  description: 'Zeus Next.js version',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
         {/*Wrapping wholle app with useSession hook to be used throughout app  */}
        <Providers>
          {children}
          </Providers>
        </body>
    </html>
  )
}
 
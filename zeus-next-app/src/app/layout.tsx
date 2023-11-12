import type { Metadata } from 'next'
import './globals.css'
import Providers from '../components/Providers';
import { Inter } from 'next/font/google'
import MainNavigation from '@/components/MainNavigation';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zeus Next App',
  description: 'Zeus Next.js version',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      {/* className={inter.className} */}
      <body>
         {/*Wrapping wholle app with useSession hook to be used throughout app  */}
        {/* <Providers> */}
          {/* <MainNavigation /> */}
          {children}
          {/* </Providers> */}
        </body>
    </html>
  )
}
 
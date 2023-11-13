/**
 * Renders the root layout of the application.
 *
 * @param {React.ReactNode} children - The children components to be rendered.
 * @return {JSX.Element} The root layout component.
 */

import type { Metadata } from 'next'
import './globals.css'
import NextAuthProviders from '../components/NextAuthProviders';
import { Inter } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Zeus Next App',
  description: 'Zeus Next.js version',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
    <NextAuthProviders>
      {children}
      </NextAuthProviders>
      </body>
    </html>
  )
}
 
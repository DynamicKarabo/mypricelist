import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: 'Karabo Oliphant | Premium Web Development',
  description: 'Premium builds. Lightning-fast delivery. Web development services by Karabo Oliphant.',
  icons: {
    icon: 'https://i.postimg.cc/DwTd41V0/output-onlinepngtools-(1).png'
  },
}

export const viewport: Viewport = {
  themeColor: '#fc4c00',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}

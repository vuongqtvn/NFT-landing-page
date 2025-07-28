import type { Metadata } from 'next'
import { Barlow_Condensed, Fira_Code } from 'next/font/google'
import './globals.css'

export const barlowCondensedSans = Barlow_Condensed({
  variable: '--font-barlow-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const firaCodeMono = Fira_Code({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-fira-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NFT Tech - Marketplace',
  description: 'Thinks to check before buying NFTS',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlowCondensedSans.variable} ${firaCodeMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}

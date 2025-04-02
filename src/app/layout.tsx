import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Poppins } from "next/font/google"
import '@/lib/fontawesome'
import "./globals.css"

// Geist Sans
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

// Geist Mono
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

// Poppins
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'], // You can customize weights
})

export const metadata: Metadata = {
  title: "DC Searchbox",
  description: "Frontend test project for DC",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}

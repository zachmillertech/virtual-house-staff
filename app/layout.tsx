import type React from "react"
import "./globals.css"
import { Comfortaa } from "next/font/google"

const comfortaa = Comfortaa({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] })

export const metadata = {
  title: "Virtual Mental Health Services - Dr. Kardong",
  description: "Dr. Kardong offers house staff psychotherapy, psychopharmacology and consultation.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={comfortaa.className}>{children}</body>
    </html>
  )
}



import './globals.css'
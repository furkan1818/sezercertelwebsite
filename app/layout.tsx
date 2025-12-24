import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Sezer Certel| Serbest Mali Müşavir",
  description: "Profesyonel muhasebe ve mali müşavirlik hizmetleri. 10 yılı aşkın tecrübe ile işletmenizin yanındayız.",
    generator: 'v0.app'
}

export const viewport = {
  themeColor: "#1a365d",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Outfit, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "Snyder Tree Removal - Professional Tree Care Services",
  description:
    "Family-owned tree removal and care services since 1995. Professional, safe, and reliable tree services including removal, pruning, stump grinding, and emergency services.",
  keywords: "tree removal, tree service, arborist, stump grinding, tree pruning, emergency tree service",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${plusJakarta.variable} font-body`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

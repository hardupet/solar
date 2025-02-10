import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import type React from "react"
import { lifeOfApple, thinkMusic, gontserratBlack, kodeMonoRegular } from './fonts'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Alpha One Solutions - Solar Energy Insights Platform",
  description: "Empower your solar investments with data-driven predictions and real-time market insights",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${lifeOfApple.variable} ${thinkMusic.variable} ${gontserratBlack.variable} ${kodeMonoRegular.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
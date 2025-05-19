import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

import { siteConfig } from "@/config/site"
import Providers from "@/components/providers"
import { ProgressbarProvider } from "@/components/providers/progressbar-provider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.name}`,
    default: siteConfig.name,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>
        <ProgressbarProvider>
          <Providers>{children}</Providers>
        </ProgressbarProvider>
      </body>
    </html>
  )
}

import type { Metadata, Viewport } from "next"
import { Fraunces, Inter } from "next/font/google"

import { AnalyticsEvents } from "@/components/analytics-events"
import { AssistantWidget } from "@/components/assistant-widget"
import { GoogleAnalytics } from "@/components/google-analytics"
import { doctor, site } from "@/content/site"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  applicationName: site.name,
  authors: [{ name: `Dr. ${doctor.fullName}` }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  verification: { google: site.googleVerification },
  formatDetection: { telephone: false },
  category: "health",
}

export const viewport: Viewport = {
  themeColor: "#010c11",
  colorScheme: "light",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <a
          href="#contenido"
          className="sr-only z-100 rounded-full bg-aqua px-5 py-3 font-semibold text-ink focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Saltar al contenido
        </a>
        {children}
        <AnalyticsEvents />
        {/* El asistente solo acepta mensajes desde el dominio publicado, así que las previews no lo cargan. */}
        {process.env.VERCEL_ENV === "production" && <AssistantWidget />}
      </body>
      {/* Solo se mide el sitio publicado: las previews y el desarrollo local no ensucian las estadísticas. */}
      {process.env.VERCEL_ENV === "production" && (
        <GoogleAnalytics id={site.googleAnalytics} />
      )}
    </html>
  )
}

import type { NextConfig } from "next"

// Origen del asistente virtual (el mismo que site.assistantApi en src/content/site.ts).
const ASSISTANT_ORIGIN = "https://c94k6z7z.us-east.insforge.app"

// Dominios a los que Google Analytics 4 manda las visitas (guía de CSP de Google para
// GA4; google.com.ar es el de Argentina). Probado: sin estos, GA deja de contar.
const GOOGLE_ANALYTICS = [
  "https://*.google-analytics.com",
  "https://*.googletagmanager.com",
  "https://*.g.doubleclick.net",
  "https://*.google.com",
  "https://*.google.com.ar",
].join(" ")

// Qué puede cargar la página: lo propio, Google Analytics, el mapa de Google y el
// asistente. Next.js mete scripts en línea al generar la página estática, por eso
// 'unsafe-inline'; igual queda bloqueado cualquier script de otro dominio.
// En `next dev` no se aplica (React necesita eval para recargar en caliente).
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' https://www.googletagmanager.com ${ASSISTANT_ORIGIN}`,
  "style-src 'self' 'unsafe-inline'",
  `img-src 'self' data: blob: ${GOOGLE_ANALYTICS}`,
  "font-src 'self'",
  `connect-src 'self' ${GOOGLE_ANALYTICS} https://analytics.google.com https://*.analytics.google.com ${ASSISTANT_ORIGIN}`,
  "frame-src https://maps.google.com https://www.google.com",
  "media-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "upgrade-insecure-requests",
].join("; ")

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // La dirección de Vercel manda todo al dominio propio, así Google indexa una sola copia.
      {
        source: "/:path*",
        has: [{ type: "host", value: "drluisghilino.vercel.app" }],
        destination: "https://drluisghilino.com.ar/:path*",
        permanent: true,
      },
      // Rutas que linkeaba el sitio anterior; las mandamos a su sección.
      { source: "/patologias", destination: "/#patologias", permanent: true },
      { source: "/sobreMi", destination: "/#sobre-mi", permanent: true },
      { source: "/contacto", destination: "/#contacto", permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          ...(process.env.NODE_ENV === "production"
            ? [{ key: "Content-Security-Policy", value: contentSecurityPolicy }]
            : []),
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
      {
        source: "/media/:file*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ]
  },
}

export default nextConfig

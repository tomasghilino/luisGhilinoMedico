import type { NextConfig } from "next"

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

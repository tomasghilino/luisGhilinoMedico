# Dr. Luis Ghilino · Médico traumatólogo

Sitio del Dr. Luis Antonio Ghilino: consultorios en San Miguel, San Isidro y Bella Vista.

En producción: https://drluisghilino.com.ar (Vercel publica cada push a `master`).

## Stack

- Next.js 16 (App Router, todo estático) con React 19 y TypeScript
- Tailwind CSS 4, con la paleta original del sitio en `src/app/globals.css`
- Fuentes Fraunces e Inter, servidas por `next/font`
- Imágenes con `next/image` y un video de fondo (WebM y MP4)

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de producción
npm run lint
npm run typecheck
```

Hace falta Node 24.

## Dónde cambiar cada cosa

Todo el contenido está en `src/content/site.ts`: datos del médico, teléfono, mail, consultorios y horarios, patologías y preguntas frecuentes. La página, los datos estructurados (JSON-LD), `/llms.txt` y la imagen para redes salen de ese archivo. Si cambiás un horario ahí, se actualiza en todos lados.

## SEO y buscadores con IA

- Título, descripción, canonical, Open Graph y Twitter en `src/app/layout.tsx`
- Imagen para redes generada en `src/app/opengraph-image.tsx`
- JSON-LD en `src/lib/jsonld.ts`: médico (`IndividualPhysician`), los tres consultorios (`PhysiciansOffice`) con dirección y horario, y las preguntas frecuentes (`FAQPage`)
- `/sitemap.xml`, `/robots.txt` y `/llms.txt`
- El formulario de contacto tiene atributos WebMCP para que los agentes de IA lo entiendan

## Dominio

El sitio vive en `drluisghilino.com.ar`, registrado en NIC Argentina y delegado a los DNS de Vercel (`ns1.vercel-dns.com` y `ns2.vercel-dns.com`), así que los registros DNS se manejan desde Vercel. `www` y `drluisghilino.vercel.app` redirigen al dominio.

La URL que usan el canonical, el sitemap, `/llms.txt` y el JSON-LD sale de `src/content/site.ts`. Se puede pisar con `NEXT_PUBLIC_SITE_URL` (ver `.env.example`).

## Formulario de contacto

No tiene servidor. Arma el mensaje y lo abre en WhatsApp o en el correo de la persona, que lo envía desde ahí. El sitio no guarda datos.

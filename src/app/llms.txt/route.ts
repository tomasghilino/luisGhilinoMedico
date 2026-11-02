import {
  contact,
  doctor,
  faqs,
  locations,
  nav,
  pathologies,
  site,
} from "@/content/site"
import { whatsappUrl } from "@/lib/links"

export const dynamic = "force-static"

const mapsSearch = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`

// Resumen en Markdown para asistentes y buscadores con IA (formato de https://llmstxt.org).
export function GET() {
  const body = `# ${doctor.displayName}

> ${doctor.specialty} en San Miguel, San Isidro y Bella Vista (Provincia de Buenos Aires, Argentina). ${doctor.experience}. ${doctor.focus}.

- Nombre completo: Dr. ${doctor.fullName}
- Matrícula Provincial: ${doctor.license}
- Formación: graduado en la ${doctor.university}
- Colegiación: ${doctor.college}
- Trayectoria: ex miembro del Servicio de Ortopedia y Traumatología del ${doctor.hospital}

## Consultorios y horarios

${locations
  .map(
    l =>
      `- [${l.city}](${mapsSearch(l.mapsQuery)}): ${l.street}. ${l.schedule}.${l.note ? ` ${l.note}.` : ""}`,
  )
  .join("\n")}

## Contacto

- [WhatsApp](${whatsappUrl()}): ${contact.phoneDisplay} (${contact.phoneE164})
- [Teléfono](${contact.phoneHref}): ${contact.phoneDisplay}
- [Correo](mailto:${contact.email}): ${contact.email}

## Patologías y tratamientos

${pathologies.map(p => `- [${p.title}](${site.url}/#patologias): ${p.text}`).join("\n")}

## Secciones del sitio

${nav.map(item => `- [${item.label}](${site.url}/${item.href})`).join("\n")}

## Preguntas frecuentes

${faqs.map(f => `### ${f.question}\n\n${f.answer}`).join("\n\n")}
`

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}

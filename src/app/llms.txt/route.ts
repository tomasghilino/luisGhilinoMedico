import {
  cityList,
  consultationFee,
  contact,
  doctor,
  faqs,
  locations,
  nav,
  pathologies,
  placeName,
  scheduleText,
  site,
} from "@/content/site"
import { whatsappUrl } from "@/lib/links"

export const dynamic = "force-static"

const mapsSearch = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`

// Resumen en Markdown para asistentes y buscadores con IA (formato de https://llmstxt.org).
export function GET() {
  const body = `# ${doctor.displayName}

> ${doctor.specialty}. ${doctor.practice} en ${cityList} (Provincia de Buenos Aires, Argentina). ${doctor.experience}. ${doctor.focus}.

- Nombre completo: Dr. ${doctor.fullName}
- Matrícula Provincial: ${doctor.license}
- Formación: graduado en la ${doctor.university}
- Colegiación: ${doctor.college}
- Trayectoria: ex integrante del ${doctor.pastServices.join(" y del ")}
- Valor de la consulta: ${consultationFee}

## Consultorios y horarios

${locations
  .map(
    l =>
      `- [${placeName(l)}](${mapsSearch(l.mapsQuery)}): ${l.street}. ${scheduleText(l)}. ${l.note}.`,
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

import { contact, type Location } from "@/content/site"

const defaultWhatsAppText = "Hola Dr. Ghilino, quisiera hacer una consulta."

export function whatsappUrl(text = defaultWhatsAppText) {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`
}

export function mailtoUrl(subject: string, body: string) {
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export function directionsUrl(location: Location) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.mapsQuery)}`
}

export function mapEmbedUrl(location: Location) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(location.mapsQuery)}&z=16&hl=es&output=embed`
}

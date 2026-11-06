"use client"

import { useEffect } from "react"

import { locations } from "@/content/site"
import { track } from "@/lib/analytics"
import { directionsUrl } from "@/lib/links"

// Un solo listener para todo el sitio: cada clic en WhatsApp, teléfono, correo o
// "Cómo llegar" llega a Google Analytics con la sección donde ocurrió.
function eventFor(href: string) {
  if (href.startsWith("https://wa.me/")) return "clic_whatsapp"
  if (href.startsWith("tel:")) return "clic_telefono"
  if (href.startsWith("mailto:")) return "clic_correo"
  if (href.startsWith("https://www.google.com/maps/dir/"))
    return "clic_como_llegar"
}

function sectionOf(link: Element) {
  if (link.closest("header")) return "encabezado"
  if (link.closest("footer")) return "pie"
  if (link.closest("aside")) return "boton_flotante"
  return link.closest("section")?.id || "inicio"
}

export function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      // Un clic que no navegó (el botón flotante que abre el asistente) no es un clic a WhatsApp.
      if (event.defaultPrevented) return
      const link = (event.target as Element | null)?.closest("a[href]")
      const href = link?.getAttribute("href")
      const name = href && eventFor(href)
      if (!link || !href || !name) return

      const office = locations.find(l => directionsUrl(l) === href)
      track(name, {
        seccion: sectionOf(link),
        ...(office ? { consultorio: office.city } : {}),
      })
    }

    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [])

  return null
}

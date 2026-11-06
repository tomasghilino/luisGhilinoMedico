"use client"

import { useEffect, useState } from "react"

import { track } from "@/lib/analytics"
import { whatsappUrl } from "@/lib/links"

import { WhatsAppIcon } from "./icons"

declare global {
  interface Window {
    // Lo publica el script del asistente virtual cuando termina de cargar.
    ghilinoAssistant?: { toggle(trigger?: HTMLElement): void }
  }
}

// El botón flotante de WhatsApp abre el asistente virtual, que contesta al momento y
// ofrece WhatsApp apenas se abre. Si el asistente no cargó (previews, script bloqueado,
// los primeros segundos), sigue siendo un enlace común a WhatsApp.
export function WhatsAppButton() {
  const [assistant, setAssistant] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const ready = () => setAssistant(Boolean(window.ghilinoAssistant))
    const toggled = (event: Event) =>
      setOpen((event as CustomEvent<{ open: boolean }>).detail.open)
    ready()
    window.addEventListener("ghilino-assistant:ready", ready)
    window.addEventListener("ghilino-assistant:toggle", toggled)
    return () => {
      window.removeEventListener("ghilino-assistant:ready", ready)
      window.removeEventListener("ghilino-assistant:toggle", toggled)
    }
  }, [])

  return (
    <aside aria-label="Contacto rápido">
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={
          assistant ? "Consultas por chat y WhatsApp" : "Escribir por WhatsApp"
        }
        aria-haspopup={assistant ? "dialog" : undefined}
        aria-expanded={assistant ? open : undefined}
        onClick={event => {
          const bot = window.ghilinoAssistant
          if (!bot) return
          event.preventDefault()
          if (!open) track("abrir_asistente", { seccion: "boton_flotante" })
          bot.toggle(event.currentTarget)
        }}
        className="fixed right-4 bottom-4 z-40 flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_12px_30px_-8px_rgb(1_12_17/0.45)] transition hover:scale-105 active:scale-95 sm:right-6 sm:bottom-6 sm:size-16"
      >
        <WhatsAppIcon className="size-7 sm:size-8" />
      </a>
    </aside>
  )
}

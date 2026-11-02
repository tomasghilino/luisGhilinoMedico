import { whatsappUrl } from "@/lib/links"

import { WhatsAppIcon } from "./icons"

export function WhatsAppButton() {
  return (
    <aside aria-label="Contacto rápido">
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp"
        className="fixed right-4 bottom-4 z-40 flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_12px_30px_-8px_rgb(1_12_17/0.45)] transition hover:scale-105 active:scale-95 sm:right-6 sm:bottom-6 sm:size-16"
      >
        <WhatsAppIcon className="size-7 sm:size-8" />
      </a>
    </aside>
  )
}

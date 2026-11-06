import Script from "next/script"

import { site } from "@/content/site"

// El chat del asistente virtual: un script de unos 18 KB que dibuja su botón dentro de
// un Shadow DOM, así no toca los estilos del sitio. Se baja cuando el navegador queda
// libre, como gtag.js, para no frenar la carga. Va abajo a la izquierda porque abajo a
// la derecha está el botón de WhatsApp.
export function AssistantWidget() {
  return (
    <Script
      src={`${site.assistantApi}?path=/widget.js`}
      data-api={`${site.assistantApi}?path=/`}
      data-position="left"
      strategy="lazyOnload"
    />
  )
}

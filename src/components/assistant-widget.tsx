import Script from "next/script"

import { site } from "@/content/site"

// El chat del asistente virtual: un script de unos 20 KB que dibuja el panel dentro de
// un Shadow DOM, así no toca los estilos del sitio. No trae botón propio
// (data-launcher="none"): lo abre el botón flotante de WhatsApp. Se baja cuando el
// navegador queda libre, como gtag.js, para no frenar la carga.
export function AssistantWidget() {
  return (
    <Script
      src={`${site.assistantApi}?path=/widget.js`}
      data-api={`${site.assistantApi}?path=/`}
      data-launcher="none"
      strategy="lazyOnload"
    />
  )
}

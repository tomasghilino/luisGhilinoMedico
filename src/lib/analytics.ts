declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

// Manda un evento a Google Analytics. Si la etiqueta no se cargó (previews, desarrollo local), no hace nada.
export function track(event: string, params: Record<string, string> = {}) {
  window.gtag?.("event", event, params)
}

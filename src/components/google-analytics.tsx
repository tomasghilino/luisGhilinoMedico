import Script from "next/script"

// La etiqueta de Google, pero gtag.js (el script pesado) se baja cuando el navegador
// queda libre, así no frena la carga. Lo que pase antes queda en dataLayer y se manda
// apenas llega.
export function GoogleAnalytics({ id }: { id: string }) {
  return (
    <>
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${id}');`}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="lazyOnload"
      />
    </>
  )
}

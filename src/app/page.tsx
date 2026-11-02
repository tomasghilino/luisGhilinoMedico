import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Faq } from "@/components/faq"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Locations } from "@/components/locations"
import { Pathologies } from "@/components/pathologies"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { buildJsonLd } from "@/lib/jsonld"

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: buildJsonLd() }}
      />
      <Header />
      <main id="contenido">
        <Hero />
        <Pathologies />
        <About />
        <Locations />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

import { Plus } from "lucide-react"

import { faqs } from "@/content/site"

import { SectionHeading } from "./section-heading"

export function Faq() {
  return (
    <section
      id="preguntas"
      aria-labelledby="preguntas-titulo"
      className="bg-paper py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[2fr_3fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="preguntas-titulo"
            eyebrow="Preguntas frecuentes"
            title="Dudas antes de la consulta"
            intro="Si tu duda no está acá, escribí por WhatsApp."
          />
        </div>
        <div className="divide-y divide-navy/10 border-y border-navy/10">
          {faqs.map(faq => (
            <details key={faq.question} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-lg font-semibold text-navy [&::-webkit-details-marker]:hidden">
                <h3>{faq.question}</h3>
                <span
                  aria-hidden="true"
                  className="flex size-9 shrink-0 items-center justify-center rounded-full border border-navy/15 transition-transform duration-300 group-open:rotate-45"
                >
                  <Plus className="size-4" />
                </span>
              </summary>
              <p className="-mt-1 pr-14 pb-6 leading-relaxed text-muted">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

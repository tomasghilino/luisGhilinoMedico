import Image from "next/image"

import { pathologies } from "@/content/site"

import { SectionHeading } from "./section-heading"

export function Pathologies() {
  return (
    <section
      id="patologias"
      aria-labelledby="patologias-titulo"
      className="bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="patologias-titulo"
            eyebrow="Patologías y tratamientos"
            title="Diagnóstico y tratamiento de huesos y articulaciones"
          />
          <p className="max-w-sm text-muted lg:pb-2">
            Patologías crónicas de huesos, articulaciones y columna que se
            tratan en el consultorio.
          </p>
        </div>

        <ol className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {pathologies.map((pathology, index) => (
            <li key={pathology.id} className="reveal group">
              <article aria-labelledby={`patologia-${pathology.id}`}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-mist">
                  <Image
                    src={pathology.image}
                    alt={pathology.alt}
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                    placeholder="blur"
                    className="object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-6 flex gap-5 border-t border-navy/10 pt-5">
                  <span
                    aria-hidden="true"
                    className="font-display text-sm font-semibold text-teal-strong tabular-nums"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3
                      id={`patologia-${pathology.id}`}
                      className="font-display text-2xl font-medium text-navy"
                    >
                      {pathology.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-muted">
                      {pathology.text}
                    </p>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

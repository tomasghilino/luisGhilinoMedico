import { ArrowRight, CalendarDays } from "lucide-react"

import { consultationFee, doctor, locations } from "@/content/site"
import { whatsappUrl } from "@/lib/links"

import { HeroVideo } from "./hero-video"
import { WhatsAppIcon } from "./icons"

export function Hero() {
  return (
    <section
      aria-labelledby="hero-titulo"
      className="relative overflow-hidden bg-linear-to-b from-paper via-paper to-mist/60"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 size-[36rem] rounded-full bg-aqua/20 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pt-10 pb-20 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pt-16 lg:pb-28">
        <div>
          <p
            className="rise inline-flex items-center gap-2 rounded-full border border-teal/30 bg-white px-4 py-1.5 text-sm font-medium text-teal-strong"
            style={{ "--i": 0 } as React.CSSProperties}
          >
            <span
              className="size-1.5 rounded-full bg-teal"
              aria-hidden="true"
            />
            {[doctor.field, ...locations.map(l => l.city)].join(" · ")}
          </p>
          <h1
            id="hero-titulo"
            className="rise mt-6 font-display text-5xl leading-[1.02] font-medium tracking-tight text-balance text-navy sm:text-6xl lg:text-7xl"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            Dr. Luis Antonio Ghilino
          </h1>
          <p
            className="rise mt-6 max-w-xl text-xl leading-relaxed text-pretty text-muted"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            {doctor.specialty} con {doctor.experience.toLowerCase()}.{" "}
            {doctor.focus}.
          </p>
          <div
            className="rise mt-9 flex flex-col gap-3 sm:flex-row"
            style={{ "--i": 3 } as React.CSSProperties}
          >
            <a
              href={whatsappUrl("Hola Dr. Ghilino, quisiera pedir un turno.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-navy px-7 py-4 font-semibold text-white shadow-[0_10px_30px_-12px_rgb(5_68_94/0.6)] transition hover:bg-ink"
            >
              <WhatsAppIcon className="size-5" />
              Pedir turno por WhatsApp
            </a>
            <a
              href="#consultorios"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-navy/20 bg-white px-7 py-4 font-semibold text-navy transition hover:border-navy/40"
            >
              Ver consultorios
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
          <dl
            className="rise mt-12 grid max-w-lg grid-cols-3 divide-x divide-navy/10 border-y border-navy/10 py-5"
            style={{ "--i": 4 } as React.CSSProperties}
          >
            {[
              { term: "Matrícula Provincial", value: doctor.license },
              { term: "Graduado en", value: "UBA" },
              { term: "Experiencia", value: "+25 años" },
            ].map(item => (
              <div key={item.term} className="px-4 first:pl-0">
                <dt className="text-xs font-medium text-muted">{item.term}</dt>
                <dd className="mt-1 font-display text-xl font-semibold whitespace-nowrap text-navy sm:text-2xl">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          className="rise relative"
          style={{ "--i": 2 } as React.CSSProperties}
        >
          <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] border border-navy/10 bg-mist lg:aspect-[4/5]">
            <HeroVideo />
          </div>
          <div className="relative mx-4 -mt-16 rounded-3xl border border-navy/10 bg-white p-6 shadow-[0_20px_50px_-24px_rgb(5_68_94/0.45)] sm:mx-8 lg:absolute lg:bottom-8 lg:-left-12 lg:mx-0 lg:mt-0 lg:w-80">
            <p className="flex items-center gap-2 text-sm font-semibold text-navy">
              <CalendarDays
                className="size-4 text-teal-strong"
                aria-hidden="true"
              />
              Días de atención
            </p>
            <ul className="mt-4 space-y-3">
              {locations.map(location => (
                <li
                  key={location.id}
                  className="flex items-start justify-between gap-4"
                >
                  <span>
                    <span className="block font-medium text-ink">
                      {location.city}
                    </span>
                    <span className="block text-sm text-muted">
                      {location.street}
                    </span>
                  </span>
                  <span className="shrink-0 space-y-1.5 text-right">
                    {location.slots.map(slot => (
                      <span key={slot.label} className="block">
                        <span className="block text-sm font-semibold text-navy">
                          {slot.shortLabel}
                        </span>
                        <span className="block text-sm text-muted">
                          {slot.hours}
                        </span>
                      </span>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 flex items-baseline justify-between gap-4 border-t border-navy/10 pt-4">
              <span className="text-sm text-muted">Valor de la consulta</span>
              <span className="font-display text-xl font-semibold text-navy tabular-nums">
                {consultationFee}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

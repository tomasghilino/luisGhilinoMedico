import Image from "next/image"
import { Award, BadgeCheck, GraduationCap, Hospital } from "lucide-react"

import radiografia from "@/assets/images/radiografia.jpg"
import { doctor } from "@/content/site"

import { SectionHeading } from "./section-heading"

const icons = {
  experiencia: Award,
  uba: GraduationCap,
  colegio: BadgeCheck,
  castex: Hospital,
  "hospital-san-isidro": Hospital,
} as const

export function About() {
  return (
    <section
      id="sobre-mi"
      aria-labelledby="sobre-mi-titulo"
      className="bg-paper py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20">
        <div className="reveal relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-navy/10">
            <Image
              src={radiografia}
              alt="Mano con guante sosteniendo una radiografía de tórax y columna"
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              placeholder="blur"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-6 rounded-2xl border border-navy/10 bg-white px-6 py-4 shadow-[0_20px_50px_-24px_rgb(5_68_94/0.45)] sm:-right-6 sm:left-auto">
            <p className="text-xs font-semibold tracking-[0.16em] text-teal-strong uppercase">
              Matrícula Provincial
            </p>
            <p className="mt-1 font-display text-3xl font-semibold text-navy tabular-nums">
              {doctor.license}
            </p>
          </div>
        </div>

        <div>
          <SectionHeading
            id="sobre-mi-titulo"
            eyebrow="Sobre mí"
            title="Experiencia y formación"
            intro={`Soy el Dr. ${doctor.fullName}, ${doctor.specialty.toLowerCase()}. Me dedico al ${doctor.focus.toLowerCase()}.`}
          />
          <ul className="mt-10 divide-y divide-navy/10 border-y border-navy/10">
            {doctor.credentials.map(credential => {
              const Icon = icons[credential.id as keyof typeof icons]
              return (
                <li key={credential.id} className="flex gap-5 py-5">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-mist text-navy">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-semibold text-ink">
                      {credential.title}
                    </span>
                    <span className="mt-0.5 block text-muted">
                      {credential.detail}
                    </span>
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

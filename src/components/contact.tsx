import { Mail, Phone } from "lucide-react"

import { contact } from "@/content/site"
import { whatsappUrl } from "@/lib/links"

import { ContactForm } from "./contact-form"
import { WhatsAppIcon } from "./icons"
import { SectionHeading } from "./section-heading"

const channels = [
  {
    label: "WhatsApp",
    value: contact.phoneDisplay,
    href: whatsappUrl(),
    icon: WhatsAppIcon,
    external: true,
  },
  {
    label: "Teléfono",
    value: contact.phoneDisplay,
    href: contact.phoneHref,
    icon: Phone,
    external: false,
  },
  {
    label: "Correo",
    value: contact.email,
    href: `mailto:${contact.email}`,
    icon: Mail,
    external: false,
  },
]

export function Contact() {
  return (
    <section
      id="contacto"
      aria-labelledby="contacto-titulo"
      className="bg-linear-to-b from-white to-mist/70 py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            id="contacto-titulo"
            eyebrow="Contacto"
            title="Pedí tu turno o hacé tu consulta"
            intro="La forma más rápida es WhatsApp. También podés llamar o escribir un correo."
          />
          <ul className="mt-10 space-y-3">
            {channels.map(channel => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  {...(channel.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-center gap-4 rounded-2xl border border-navy/10 bg-white p-4 transition-colors hover:border-teal"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-mist text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                    <channel.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-muted">
                      {channel.label}
                    </span>
                    <span className="block truncate font-semibold text-navy">
                      {channel.value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}

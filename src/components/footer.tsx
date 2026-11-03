import {
  contact,
  credits,
  doctor,
  locations,
  nav,
  placeName,
  scheduleText,
} from "@/content/site"

import { LogoMark } from "./icons"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-navy/10 bg-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <LogoMark className="size-10 shrink-0" />
            <p className="font-display text-xl font-semibold text-navy">
              Dr. {doctor.fullName}
            </p>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            {doctor.practice}. {doctor.experience}. Matrícula Provincial{" "}
            {doctor.license}.
          </p>
          <p className="mt-6 max-w-xs text-xs leading-relaxed text-muted">
            La información de este sitio no reemplaza la consulta médica. Usamos
            Google Analytics para contar las visitas.
          </p>
        </div>

        <nav aria-label="Secciones">
          <h2 className="text-sm font-semibold text-navy">Secciones</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map(item => (
              <li key={item.href}>
                <a href={item.href} className="text-muted hover:text-navy">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold text-navy">Consultorios</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {locations.map(location => (
              <li key={location.id} className="text-muted">
                <span className="block font-medium text-ink">
                  {placeName(location)}
                </span>
                {location.street} · {scheduleText(location)}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-navy">Contacto</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a
                href={contact.phoneHref}
                className="text-muted hover:text-navy"
              >
                {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="break-all text-muted hover:text-navy"
              >
                {contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {year} Dr. {doctor.fullName}. Todos los derechos reservados.
          </p>
          <a
            href={credits.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-navy"
          >
            {credits.label}
          </a>
        </div>
      </div>
    </footer>
  )
}

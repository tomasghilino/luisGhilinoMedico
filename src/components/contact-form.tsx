"use client"

import { ChevronDown, Mail } from "lucide-react"
import { useId, useState } from "react"

import { locations, scheduleDays } from "@/content/site"
import { mailtoUrl, whatsappUrl } from "@/lib/links"

import { WhatsAppIcon } from "./icons"

type Errors = Partial<Record<"nombre" | "motivo", string>>

function validate(nombre: string, motivo: string): Errors {
  const errors: Errors = {}
  if (nombre.trim().length < 2) errors.nombre = "Escribí tu nombre."
  if (motivo.trim().length < 10)
    errors.motivo = "Contanos el motivo en al menos 10 caracteres."
  return errors
}

// Atributos declarativos de WebMCP: describen el formulario a los agentes de IA.
// https://developer.chrome.com/docs/ai/webmcp
const webMcpForm = {
  toolname: "escribir_consulta",
  tooldescription:
    "Prepara una consulta para el Dr. Luis Ghilino y la abre en WhatsApp o en el correo para que la persona la envíe.",
} as Record<string, string>

// No hay servidor: el formulario arma el mensaje y lo abre en WhatsApp o en el correo.
export function ContactForm() {
  const id = useId()
  const [errors, setErrors] = useState<Errors>({})

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const nombre = String(data.get("nombre") ?? "")
    const consultorio = String(data.get("consultorio") ?? "")
    const motivo = String(data.get("motivo") ?? "")
    const via = (event.nativeEvent as SubmitEvent).submitter?.getAttribute(
      "value",
    )

    const found = validate(nombre, motivo)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      const first = found.nombre ? "nombre" : "motivo"
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus()
      return
    }

    const lines = [
      `Hola Dr. Ghilino, soy ${nombre.trim()}.`,
      consultorio ? `Consultorio: ${consultorio}.` : "",
      `Motivo de la consulta: ${motivo.trim()}`,
    ].filter(Boolean)

    if (via === "email") {
      window.location.href = mailtoUrl(
        `Consulta de ${nombre.trim()}`,
        lines.join("\n\n"),
      )
    } else {
      window.open(whatsappUrl(lines.join("\n")), "_blank", "noopener")
    }
  }

  const field =
    "mt-2 block w-full rounded-xl border border-navy/15 bg-white px-4 py-3.5 text-ink placeholder:text-muted/70 transition-colors focus:border-teal focus:ring-2 focus:ring-teal/25 focus:outline-none aria-invalid:border-red-600"

  return (
    <form
      {...webMcpForm}
      noValidate
      onSubmit={onSubmit}
      aria-labelledby={`${id}-titulo`}
      className="rounded-[2rem] border border-navy/10 bg-white p-6 shadow-[0_30px_60px_-30px_rgb(5_68_94/0.35)] sm:p-10"
    >
      <h3
        id={`${id}-titulo`}
        className="font-display text-2xl font-medium text-navy"
      >
        Escribí tu consulta
      </h3>
      <p className="mt-2 text-sm text-muted">
        Se abre WhatsApp o tu correo con el mensaje listo para enviar. Este
        sitio no guarda tus datos.
      </p>

      <div className="mt-8 space-y-5">
        <div>
          <label htmlFor={`${id}-nombre`} className="font-medium text-ink">
            Nombre y apellido
          </label>
          <input
            id={`${id}-nombre`}
            name="nombre"
            type="text"
            autoComplete="name"
            required
            aria-invalid={Boolean(errors.nombre)}
            aria-describedby={errors.nombre ? `${id}-nombre-error` : undefined}
            className={field}
          />
          {errors.nombre && (
            <p
              id={`${id}-nombre-error`}
              className="mt-2 text-sm font-medium text-red-700"
            >
              {errors.nombre}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={`${id}-consultorio`} className="font-medium text-ink">
            Consultorio{" "}
            <span className="font-normal text-muted">(opcional)</span>
          </label>
          <div className="relative">
            <select
              id={`${id}-consultorio`}
              name="consultorio"
              defaultValue=""
              className={`${field} appearance-none pr-12`}
            >
              <option value="">Todavía no sé</option>
              {locations.map(location => (
                <option key={location.id} value={location.city}>
                  {location.city} · {scheduleDays(location)}
                </option>
              ))}
            </select>
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 right-4 mt-1 size-5 -translate-y-1/2 text-navy"
            />
          </div>
        </div>

        <div>
          <label htmlFor={`${id}-motivo`} className="font-medium text-ink">
            Motivo de la consulta
          </label>
          <textarea
            id={`${id}-motivo`}
            name="motivo"
            rows={5}
            required
            aria-invalid={Boolean(errors.motivo)}
            aria-describedby={errors.motivo ? `${id}-motivo-error` : undefined}
            className={`${field} resize-y`}
          />
          {errors.motivo && (
            <p
              id={`${id}-motivo-error`}
              className="mt-2 text-sm font-medium text-red-700"
            >
              {errors.motivo}
            </p>
          )}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          value="whatsapp"
          className="inline-flex flex-1 items-center justify-center gap-2.5 rounded-full bg-navy px-6 py-4 font-semibold text-white transition hover:bg-ink"
        >
          <WhatsAppIcon className="size-5" />
          Enviar por WhatsApp
        </button>
        <button
          type="submit"
          value="email"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/20 px-6 py-4 font-semibold text-navy transition hover:border-navy/40"
        >
          <Mail className="size-4" aria-hidden="true" />
          Por correo
        </button>
      </div>
    </form>
  )
}

"use client"

import { Clock, MapPin, Navigation } from "lucide-react"
import { useState } from "react"

import { locations, placeName, scheduleDays } from "@/content/site"
import { directionsUrl, mapEmbedUrl, whatsappUrl } from "@/lib/links"

import { WhatsAppIcon } from "./icons"

export function LocationsPicker() {
  const [selectedId, setSelectedId] = useState(locations[0].id)
  const selected =
    locations.find(location => location.id === selectedId) ?? locations[0]

  return (
    <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
      <ul className="flex flex-col gap-4">
        {locations.map(location => {
          const active = location.id === selected.id
          return (
            <li key={location.id}>
              <article
                aria-labelledby={`consultorio-${location.id}`}
                className={`rounded-3xl border p-6 transition-colors ${
                  active
                    ? "border-teal bg-mist/50"
                    : "border-navy/10 bg-white hover:border-navy/25"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3
                    id={`consultorio-${location.id}`}
                    className="font-display text-2xl font-medium text-navy"
                  >
                    {location.city}
                  </h3>
                  <span className="mt-1 rounded-full bg-navy px-3 py-1 text-right text-xs font-semibold text-white">
                    {scheduleDays(location)}
                  </span>
                </div>
                <address className="mt-4 space-y-2 not-italic">
                  <p className="flex items-center gap-2.5 text-ink">
                    <MapPin
                      className="size-4 shrink-0 text-teal-strong"
                      aria-hidden="true"
                    />
                    {location.street}, {placeName(location)}
                  </p>
                  <div className="flex items-start gap-2.5 text-ink">
                    <Clock
                      className="mt-1 size-4 shrink-0 text-teal-strong"
                      aria-hidden="true"
                    />
                    <ul>
                      {location.slots.map(slot => (
                        <li key={slot.label}>
                          {slot.label} {slot.hours}
                        </li>
                      ))}
                    </ul>
                  </div>
                </address>
                <p className="mt-3 text-sm font-medium text-teal-strong">
                  {location.note}.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedId(location.id)}
                    aria-pressed={active}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                      active
                        ? "bg-navy text-white"
                        : "border border-navy/20 text-navy hover:border-navy/40"
                    }`}
                  >
                    {active ? "En el mapa" : "Ver en el mapa"}
                  </button>
                  <a
                    href={directionsUrl(location)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-teal-strong hover:bg-mist"
                  >
                    <Navigation className="size-4" aria-hidden="true" />
                    Cómo llegar
                    <span className="sr-only">
                      {" "}
                      a {location.city} (abre Google Maps)
                    </span>
                  </a>
                  {location.confirmByWhatsApp && (
                    <a
                      href={whatsappUrl(
                        `Hola Dr. Ghilino, quisiera confirmar una consulta en ${location.city}.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-teal-strong hover:bg-mist"
                    >
                      <WhatsAppIcon className="size-4" />
                      Confirmar por WhatsApp
                      <span className="sr-only"> (abre WhatsApp)</span>
                    </a>
                  )}
                </div>
              </article>
            </li>
          )
        })}
      </ul>

      <div className="relative min-h-96 overflow-hidden rounded-3xl border border-navy/10 bg-mist lg:min-h-full">
        <iframe
          key={selected.id}
          title={`Mapa del consultorio de ${selected.city}`}
          src={mapEmbedUrl(selected)}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 size-full border-0"
        />
      </div>
    </div>
  )
}

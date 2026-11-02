import { cityList, doctor } from "@/content/site"

import { SectionHeading } from "./section-heading"
import { LocationsPicker } from "./locations-picker"

export function Locations() {
  return (
    <section
      id="consultorios"
      aria-labelledby="consultorios-titulo"
      className="bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="consultorios-titulo"
          eyebrow="Consultorios"
          title="Dónde y cuándo atiende"
          intro={`${doctor.practice} en ${cityList}. En San Miguel se atiende sin turno, por orden de llegada; en Boulogne, confirmá la consulta por WhatsApp antes de ir.`}
        />
        <LocationsPicker />
      </div>
    </section>
  )
}

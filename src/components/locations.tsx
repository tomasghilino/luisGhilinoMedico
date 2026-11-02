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
          title="Tres consultorios, días y horarios"
          intro="Elegí el consultorio que te quede más cerca. En San Miguel se atiende por orden de llegada."
        />
        <LocationsPicker />
      </div>
    </section>
  )
}

import type {
  FAQPage,
  Graph,
  IndividualPhysician,
  Person,
  PhysiciansOffice,
  WebPage,
  WebSite,
} from "schema-dts"

import {
  contact,
  doctor,
  faqs,
  locations,
  pathologies,
  site,
} from "@/content/site"

const ids = {
  website: `${site.url}/#sitio`,
  page: `${site.url}/#pagina`,
  physician: `${site.url}/#medico`,
  person: `${site.url}/#persona`,
  faq: `${site.url}/#preguntas`,
  office: (id: string) => `${site.url}/#consultorio-${id}`,
}

const sanMiguelGeo = { latitude: -34.5427766, longitude: -58.7101823 }

const credential = {
  "@type": "EducationalOccupationalCredential",
  name: `Matrícula Provincial ${doctor.license}`,
  credentialCategory: "Matrícula profesional",
  recognizedBy: {
    "@type": "Organization",
    name: "Colegio de Médicos de la Provincia de Buenos Aires",
  },
} as const

export function buildJsonLd() {
  const offices: PhysiciansOffice[] = locations.map(location => ({
    "@type": "PhysiciansOffice",
    "@id": ids.office(location.id),
    name: `Consultorio ${location.city} · ${doctor.displayName}`,
    description: [location.schedule, location.note].filter(Boolean).join(". "),
    url: `${site.url}/#consultorios`,
    telephone: contact.phoneE164,
    email: contact.email,
    medicalSpecialty: "Musculoskeletal",
    address: {
      "@type": "PostalAddress",
      streetAddress: location.street,
      addressLocality: location.city,
      addressRegion: "Buenos Aires",
      postalCode: location.postalCode,
      addressCountry: "AR",
    },
    ...(location.id === "san-miguel"
      ? { geo: { "@type": "GeoCoordinates", ...sanMiguelGeo } }
      : {}),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${location.dayOfWeek}`,
      opens: location.opens,
      ...(location.closes ? { closes: location.closes } : {}),
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.mapsQuery)}`,
  }))

  const physician: IndividualPhysician = {
    "@type": "IndividualPhysician",
    "@id": ids.physician,
    name: `Dr. ${doctor.fullName}`,
    alternateName: [doctor.displayName, "Dr. Ghilino Luis Antonio"],
    description: `${doctor.specialty}. ${doctor.experience}. ${doctor.focus}. Graduado en la ${doctor.university}. Matrícula Provincial ${doctor.license}.`,
    url: site.url,
    image: `${site.url}/opengraph-image`,
    telephone: contact.phoneE164,
    email: contact.email,
    medicalSpecialty: "Musculoskeletal",
    practicesAt: locations.map(l => ({ "@id": ids.office(l.id) })),
    areaServed: locations.map(l => ({ "@type": "City", name: l.city })),
    knowsAbout: pathologies.map(p => p.title),
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Infiltración de rodilla con ácido hialurónico",
      },
      {
        "@type": "MedicalProcedure",
        name: "Inmovilización de articulaciones con yeso",
      },
      {
        "@type": "MedicalTherapy",
        name: "Plantillas para corrección del pie plano",
      },
    ],
    hasCredential: credential,
    employee: { "@id": ids.person },
  }

  const person: Person = {
    "@type": "Person",
    "@id": ids.person,
    name: doctor.fullName,
    givenName: doctor.givenName,
    familyName: doctor.familyName,
    honorificPrefix: "Dr.",
    jobTitle: doctor.specialty,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universidad de Buenos Aires",
    },
    memberOf: { "@type": "Organization", name: doctor.college },
    hasCredential: credential,
    worksFor: { "@id": ids.physician },
    knowsLanguage: "es",
  }

  const faqPage: FAQPage = {
    "@type": "FAQPage",
    "@id": ids.faq,
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }

  const website: WebSite = {
    "@type": "WebSite",
    "@id": ids.website,
    url: site.url,
    name: site.name,
    inLanguage: "es-AR",
  }

  const page: WebPage = {
    "@type": "WebPage",
    "@id": ids.page,
    url: site.url,
    name: site.title,
    description: site.description,
    inLanguage: "es-AR",
    isPartOf: { "@id": ids.website },
    about: { "@id": ids.physician },
    mainEntity: { "@id": ids.physician },
    hasPart: { "@id": ids.faq },
  }

  const graph: Graph = {
    "@context": "https://schema.org",
    "@graph": [website, page, physician, person, ...offices, faqPage],
  }

  // Escapa "<" para que el JSON no pueda cerrar el <script>.
  return JSON.stringify(graph).replace(/</g, "\\u003c")
}

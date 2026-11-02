import type { StaticImageData } from "next/image"

import artrosis from "@/assets/images/artrosis.jpg"
import columna from "@/assets/images/columna.jpg"
import infiltraciones from "@/assets/images/infiltraciones.jpg"
import piePlano from "@/assets/images/pie-plano.jpg"
import reuma from "@/assets/images/reuma.jpg"
import yeso from "@/assets/images/yeso-inmovilizacion.jpg"

// Toda la información del sitio vive acá: la usan la página, el JSON-LD y /llms.txt.

export const site = {
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://drluisghilino.com.ar"
  ).replace(/\/$/, ""),
  name: "Dr. Luis Ghilino",
  locale: "es_AR",
  title:
    "Dr. Luis Ghilino | Médico traumatólogo en San Miguel, San Isidro y Bella Vista",
  description:
    "Traumatólogo con más de 25 años de experiencia: artrosis, columna, reuma, infiltraciones de rodilla, yesos y pie plano. Atiende en San Miguel, San Isidro y Bella Vista.",
  googleVerification: "63h5ERvL-w0Y9THg94TsVF5DfpBOfmnbL7NWbPTqQtQ",
}

export const doctor = {
  givenName: "Luis Antonio",
  familyName: "Ghilino",
  fullName: "Luis Antonio Ghilino",
  displayName: "Dr. Luis Ghilino",
  specialty: "Médico traumatólogo",
  experience: "Más de 25 años de experiencia",
  focus: "Diagnóstico y tratamiento de patologías crónicas",
  license: "445565",
  university: "Universidad de Buenos Aires (UBA)",
  college: "Colegio de Médicos de la Provincia de Buenos Aires, Distrito IV",
  hospital: "Hospital Castex, San Martín",
  credentials: [
    {
      id: "experiencia",
      title: "Más de 25 años de experiencia",
      detail: "Médico traumatólogo dedicado a patologías crónicas.",
    },
    {
      id: "uba",
      title: "Graduado en la Universidad de Buenos Aires",
      detail: "Facultad de Medicina, UBA.",
    },
    {
      id: "colegio",
      title: "Colegiado en el Distrito IV",
      detail: "Colegio de Médicos de la Provincia de Buenos Aires.",
    },
    {
      id: "castex",
      title: "Ex miembro del Servicio de Ortopedia y Traumatología",
      detail: "Hospital Castex, San Martín.",
    },
  ],
}

export const contact = {
  email: "doctorghilino@gmail.com",
  phoneDisplay: "011 4033-6567",
  phoneHref: "tel:+5491140336567",
  phoneE164: "+54 9 11 4033-6567",
  whatsapp: "5491140336567",
}

export type Location = {
  id: string
  city: string
  street: string
  postalCode?: string
  schedule: string
  note?: string
  dayOfWeek: "Monday" | "Tuesday"
  dayLabel: string
  opens: string
  closes?: string
  mapsQuery: string
}

export const locations: Location[] = [
  {
    id: "san-miguel",
    city: "San Miguel",
    street: "D'Elía 1367",
    postalCode: "B1663GOE",
    schedule: "Martes de 10 a 11:30 h",
    note: "Atención por orden de llegada",
    dayOfWeek: "Tuesday",
    dayLabel: "Martes",
    opens: "10:00",
    closes: "11:30",
    mapsQuery: "Maestro Ángel D'Elía 1367, San Miguel, Buenos Aires",
  },
  {
    id: "san-isidro",
    city: "San Isidro",
    street: "Avellaneda 144",
    schedule: "Lunes de 17 a 20 h",
    dayOfWeek: "Monday",
    dayLabel: "Lunes",
    opens: "17:00",
    closes: "20:00",
    mapsQuery: "Avellaneda 144, San Isidro, Buenos Aires",
  },
  {
    id: "bella-vista",
    city: "Bella Vista",
    street: "Av. Ricchieri 428",
    schedule: "Martes desde las 18 h",
    dayOfWeek: "Tuesday",
    dayLabel: "Martes",
    opens: "18:00",
    mapsQuery: "Av. Ricchieri 428, Bella Vista, Buenos Aires",
  },
]

export type Pathology = {
  id: string
  title: string
  text: string
  image: StaticImageData
  alt: string
}

export const pathologies: Pathology[] = [
  {
    id: "artrosis",
    title: "Artrosis",
    text: "Tipo de artritis que se produce cuando el tejido flexible en los extremos de los huesos se desgasta.",
    image: artrosis,
    alt: "Hombre sosteniéndose la rodilla por dolor de artrosis",
  },
  {
    id: "reuma",
    title: "Reuma",
    text: "Diversas condiciones médicas que afectan a las articulaciones, los huesos, cartílagos, ligamentos y tendones.",
    image: reuma,
    alt: "Muñeca con la zona de dolor reumático resaltada",
  },
  {
    id: "columna",
    title: "Columna",
    text: "Tratamiento del dolor de espalda y de columna.",
    image: columna,
    alt: "Mujer sentada con dolor en la zona lumbar",
  },
  {
    id: "infiltraciones",
    title: "Infiltraciones",
    text: "Infiltraciones de rodilla con ácido hialurónico.",
    image: infiltraciones,
    alt: "Infiltración de rodilla con jeringa",
  },
  {
    id: "yesos",
    title: "Inmovilizaciones con yeso",
    text: "Inmovilización de articulaciones con yeso.",
    image: yeso,
    alt: "Pie inmovilizado con yeso",
  },
  {
    id: "pie-plano",
    title: "Plantillas y pie plano",
    text: "Corrección del arco del pie.",
    image: piePlano,
    alt: "Pies con zapatillas apoyados en alto",
  },
]

const locationList = locations
  .map(l => `${l.city} (${l.street}): ${l.schedule.toLowerCase()}`)
  .join("; ")

export const faqs = [
  {
    question: "¿Dónde atiende el Dr. Luis Ghilino?",
    answer: `Atiende en tres consultorios de la Provincia de Buenos Aires: San Miguel (${locations[0].street}), San Isidro (${locations[1].street}) y Bella Vista (${locations[2].street}).`,
  },
  {
    question: "¿Qué días y en qué horario atiende?",
    answer: `${locationList}.`,
  },
  {
    question: "¿Hace falta turno en San Miguel?",
    answer:
      "No: en San Miguel se atiende por orden de llegada, los martes de 10 a 11:30 h. Para San Isidro y Bella Vista, consultá por WhatsApp o por teléfono cómo es la atención.",
  },
  {
    question: "¿Cómo pido un turno o hago una consulta?",
    answer: `Por WhatsApp al ${contact.phoneDisplay}, por teléfono al mismo número o por correo a ${contact.email}. También podés usar el formulario de contacto de esta página.`,
  },
  {
    question: "¿Qué patologías trata?",
    answer:
      "Artrosis, reuma y dolor de espalda y columna. También realiza infiltraciones de rodilla con ácido hialurónico, inmovilizaciones con yeso y corrección del arco del pie con plantillas.",
  },
  {
    question: "¿Realiza infiltraciones de rodilla?",
    answer: "Sí, realiza infiltraciones de rodilla con ácido hialurónico.",
  },
  {
    question: "¿Cuál es su formación y matrícula?",
    answer: `Es médico traumatólogo graduado en la Universidad de Buenos Aires, con más de 25 años de experiencia. Fue miembro del Servicio de Ortopedia y Traumatología del ${doctor.hospital}. Matrícula Provincial ${doctor.license}, colegiado en el Distrito IV.`,
  },
]

export const nav = [
  { href: "#patologias", label: "Patologías" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#consultorios", label: "Consultorios" },
  { href: "#preguntas", label: "Preguntas" },
  { href: "#contacto", label: "Contacto" },
]

export const credits = {
  label: "Desarrolladores",
  href: "https://pastebin.com/CDvqnEDP",
}

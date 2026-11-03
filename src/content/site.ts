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
  title: "Dr. Luis Ghilino | Médico traumatólogo en San Miguel y Boulogne",
  description:
    "Consultorio de Ortopedia y Traumatología con más de 25 años de experiencia: artrosis, columna, reuma, infiltraciones de rodilla, yesos y pie plano. Atiende en San Miguel y Boulogne.",
  googleVerification: "63h5ERvL-w0Y9THg94TsVF5DfpBOfmnbL7NWbPTqQtQ",
  googleAnalytics: "G-CP422LDH6D",
}

export const doctor = {
  givenName: "Luis Antonio",
  familyName: "Ghilino",
  fullName: "Luis Antonio Ghilino",
  displayName: "Dr. Luis Ghilino",
  specialty: "Médico traumatólogo",
  field: "Ortopedia y Traumatología",
  practice: "Consultorio privado de Ortopedia y Traumatología",
  experience: "Más de 25 años de experiencia",
  focus: "Diagnóstico y tratamiento de patologías crónicas",
  license: "445565",
  university: "Universidad de Buenos Aires (UBA)",
  college: "Colegio de Médicos de la Provincia de Buenos Aires, Distrito IV",
  pastServices: [
    "Servicio de Ortopedia y Traumatología del Hospital Castex (San Martín)",
    "Servicio de Traumatología del Hospital Central de San Isidro",
  ],
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
      title: "Ex integrante del Servicio de Ortopedia y Traumatología",
      detail: "Hospital Castex, San Martín.",
    },
    {
      id: "hospital-san-isidro",
      title: "Ex integrante del Servicio de Traumatología",
      detail: "Hospital Central de San Isidro.",
    },
  ],
}

export const consultationFee = "$50.000"

export const contact = {
  email: "doctorghilino@gmail.com",
  phoneDisplay: "011 4033-6567",
  phoneHref: "tel:+5491140336567",
  phoneE164: "+54 9 11 4033-6567",
  whatsapp: "5491140336567",
}

type DayOfWeek =
  "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday"

// Un tramo de horario: "Lunes, martes y viernes" + "desde las 18 h".
export type ScheduleSlot = {
  days: DayOfWeek[]
  label: string
  shortLabel: string
  hours: string
  opens: string
  closes?: string
}

export type Location = {
  id: string
  city: string
  district?: string
  street: string
  postalCode?: string
  geo: { latitude: number; longitude: number }
  slots: ScheduleSlot[]
  note: string
  confirmByWhatsApp: boolean
  mapsQuery: string
}

export const locations: Location[] = [
  {
    id: "san-miguel",
    city: "San Miguel",
    street: "D'Elía 1367",
    postalCode: "B1663GOE",
    geo: { latitude: -34.5427766, longitude: -58.7101823 },
    slots: [
      {
        days: ["Thursday"],
        label: "Jueves",
        shortLabel: "Jueves",
        hours: "desde las 17\u00a0h",
        opens: "17:00",
      },
    ],
    note: "Sin turno previo: se atiende por orden de llegada",
    confirmByWhatsApp: false,
    mapsQuery: "Maestro Ángel D'Elía 1367, San Miguel, Buenos Aires",
  },
  {
    id: "boulogne",
    city: "Boulogne",
    district: "San Isidro",
    street: "Virrey Vértiz 117",
    postalCode: "B1609BOC",
    geo: { latitude: -34.5075326, longitude: -58.5639689 },
    slots: [
      {
        days: ["Monday", "Tuesday", "Friday"],
        label: "Lunes, martes y viernes",
        shortLabel: "Lun, mar y vie",
        hours: "desde las 18\u00a0h",
        opens: "18:00",
      },
      {
        days: ["Saturday"],
        label: "Sábados",
        shortLabel: "Sábados",
        hours: "de 10 a 12\u00a0h",
        opens: "10:00",
        closes: "12:00",
      },
    ],
    note: "Confirmá la consulta por WhatsApp antes de ir",
    confirmByWhatsApp: true,
    mapsQuery: "Virrey Vértiz 117, Boulogne, Buenos Aires",
  },
]

// "Lunes, martes y viernes desde las 18 h y sábados de 10 a 12 h"
export function scheduleText(location: Location) {
  return location.slots
    .map(
      (slot, i) => `${i ? slot.label.toLowerCase() : slot.label} ${slot.hours}`,
    )
    .join(" y ")
}

// "Lun, mar y vie · Sábados"
export function scheduleDays(location: Location) {
  return location.slots.map(slot => slot.shortLabel).join(" · ")
}

// "Boulogne (San Isidro)"
export function placeName(location: Location) {
  return location.district
    ? `${location.city} (${location.district})`
    : location.city
}

const listFormat = new Intl.ListFormat("es", { type: "conjunction" })

// "San Miguel y Boulogne"
export const cityList = listFormat.format(locations.map(l => l.city))

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

const addresses = listFormat.format(
  locations.map(
    l =>
      `${l.city} (${l.street}${l.district ? `, partido de ${l.district}` : ""})`,
  ),
)

export const faqs = [
  {
    question: "¿Dónde atiende el Dr. Luis Ghilino?",
    answer: `Atiende en su consultorio privado de ${doctor.field} en ${addresses}, Provincia de Buenos Aires.`,
  },
  {
    question: "¿Qué días y en qué horario atiende?",
    answer: locations
      .map(l => `En ${l.city}: ${scheduleText(l).toLowerCase()}.`)
      .join(" "),
  },
  {
    question: "¿Hace falta sacar turno?",
    answer: locations
      .map(l =>
        l.confirmByWhatsApp
          ? `En ${l.city} hay que confirmar la consulta antes por WhatsApp al ${contact.phoneDisplay}.`
          : `En ${l.city} no hace falta: se atiende sin turno previo, por orden de llegada.`,
      )
      .join(" "),
  },
  {
    question: "¿Cuánto cuesta la consulta?",
    answer: `El valor de la consulta es de ${consultationFee}.`,
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
    answer: `Es médico traumatólogo graduado en la Universidad de Buenos Aires, con más de 25 años de experiencia. Fue integrante del ${doctor.pastServices.join(" y del ")}. Matrícula Provincial ${doctor.license}, colegiado en el Distrito IV.`,
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

import React from "react"
import Card from "../Card"

import { ServiciosTitle, ServiciosContainer } from "./ServiciosElements"
import Animation from "../ui/Animation"
import useGetImageById from "../../hooks/useGetImageById"

const Servicios = () => {
  return (
    <div id="patologias">
      <ServiciosTitle>Patologías</ServiciosTitle>

      <Animation>
        <ServiciosContainer>
          <Card
            title={"Artrosis"}
            image={useGetImageById("ba940de2-4f67-5401-bd17-87b6865ee4ba")}
            alt={"artrosis rodilla"}
            text={
              "Tipo de artritis que se produce cuando el tejido flexible en los extremos de los huesos se desgasta."
            }
          />
          <Card
            title={"Reuma"}
            image={useGetImageById("87ee100b-fdd4-5008-9826-6d29f5d2453d")}
            alt={"reuma dolor"}
            text={
              "Reuma, o reumatismo, es un término no específico que se refiere a diversas condiciones médicas que afectan a las articulaciones, los huesos, cartílagos , ligamentos, tendones y el tejido conectivo."
            }
          />
          <Card
            title={"Columna"}
            image={useGetImageById("e79f6c06-1a9c-5e3e-8176-6d197e262798")}
            alt={"columna dolor"}
            text={"Tratamiento de dolor de espalda y/o columna."}
          />
          <Card
            title={"Infiltraciones"}
            image={useGetImageById("c76a97fe-52b3-5082-936b-67824407c18d")}
            alt={"infiltracion rodilla"}
            text={"Todo tipo de infiltraciones."}
          />
          <Card
            title={"Inmovilizaciones con yeso"}
            image={useGetImageById("3539cfd2-7ee3-5169-af3f-ebe80fa87a11")}
            alt={"yeso inmovilizacion"}
            text={"Inmovilizaciones de articulaciones con yeso."}
          />
          <Card
            title={"Confección de plantillas para buena marcha"}
            image={useGetImageById("f45a60d1-4127-5eb6-a5a2-3c5c28d4bf97")}
            alt={"plantilla zuela"}
            text={
              "Confecciono plantillas de pie para que usted pueda corregir su pisada, y caminar mejor."
            }
          />
        </ServiciosContainer>
      </Animation>
    </div>
  )
}

export default Servicios

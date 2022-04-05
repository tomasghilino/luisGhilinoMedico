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
            image={useGetImageById("85bb90a7-f3e2-58ea-b55b-350e5ecfdd93")}
            alt={"infiltracion rodilla"}
            text={"Infiltraciones de rodilla con ácido hialurónico."}
          />
          <Card
            title={"Inmovilizaciones con yeso"}
            image={useGetImageById("3539cfd2-7ee3-5169-af3f-ebe80fa87a11")}
            alt={"yeso inmovilizacion"}
            text={"Inmovilizaciones de articulaciones con yeso."}
          />
          <Card
            title={"Plantilla / Pie Plano"}
            image={useGetImageById("f45a60d1-4127-5eb6-a5a2-3c5c28d4bf97")}
            alt={"plantilla zuela"}
            text={"Corrección del arco de pies."}
          />
        </ServiciosContainer>
      </Animation>
    </div>
  )
}

export default Servicios

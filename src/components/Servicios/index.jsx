import React from "react"
import Card from "../Card";

import { ServiciosTitle, ServiciosContainer } from "./ServiciosElements"
import Animation from "../ui/Animation"

const Servicios = () => {
  return (
    <div id="patologias">
      <ServiciosTitle>Patologías</ServiciosTitle>

      <Animation>
        <ServiciosContainer>
          <Card
            title={"Artrosis"}
            image={'/images/kneePain.jpeg'}
            alt={"artrosis rodilla"}
            text={
              "Tipo de artritis que se produce cuando el tejido flexible en los extremos de los huesos se desgasta."
            }
          />
          <Card
            title={"Reuma"}
            image={'/images/wristPain.jpg'}
            alt={"reuma dolor"}
            text={
              "Diversas condiciones médicas que afectan a las articulaciones, los huesos, cartílagos , ligamentos y tendones."
            }
          />
          <Card
            title={"Columna"}
            image={'/images/backPain.jpg'}
            alt={"columna dolor"}
            text={"Tratamiento de dolor de espalda y/o columna."}
          />
          <Card
            title={"Infiltraciones"}
            image={'/images/infiltracionRodilla.png'}
            alt={"infiltracion rodilla"}
            text={"Infiltraciones de rodilla con ácido hialurónico."}
          />
          <Card
            title={"Inmovilizaciones con yeso"}
            image={'/images/yeso.jpg'}
            alt={"yeso inmovilizacion"}
            text={"Inmovilizaciones de articulaciones con yeso."}
          />
          <Card
            title={"Plantilla / Pie Plano"}
            image={'/images/zuela.jpeg'}
            alt={"plantilla zuela"}
            text={"Corrección del arco de pies."}
          />
        </ServiciosContainer>
      </Animation>
    </div>
  )
}

export default Servicios

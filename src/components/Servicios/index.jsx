import React from "react"
import Card from "../Card"

import { ServiciosTitle, ServiciosContainer } from "./ServiciosElements"

const Servicios = () => {
  return (
    <>
      <ServiciosTitle>Servicios</ServiciosTitle>
      <ServiciosContainer>
        <Card
          title={"Artrosis"}
          src={"/media/kneePain.jpeg"}
          alt={"artrosis rodilla"}
          text={
            "Tipo de artritis que se produce cuando el tejido flexible en los extremos de los huesos se desgasta."
          }
        />
        <Card
          title={"Reuma"}
          src={"/media/wristPain.jpg"}
          alt={"reuma dolor"}
          text={
            "Reuma, o reumatismo, es un término no específico que se refiere a diversas condiciones médicas que afectan a las articulaciones, los huesos, cartílagos , ligamentos, tendones y el tejido conectivo."
          }
        />
        <Card
          title={"Columna"}
          src={"/media/backpain.jpg"}
          alt={"columna dolor"}
          text={"Tratamiento de dolor de espalda y/o columna."}
        />
        <Card
          title={"Artrosis"}
          src={"/media/kneePain.jpeg"}
          alt={"artrosis rodilla"}
          text={
            "Tipo de artritis que se produce cuando el tejido flexible en los extremos de los huesos se desgasta."
          }
        />
      </ServiciosContainer>
    </>
  )
}

export default Servicios

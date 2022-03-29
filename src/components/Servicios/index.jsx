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
          src={"/kneePain.jpeg"}
          alt={"artrosis rodilla"}
          text={
            "Tipo de artritis que se produce cuando el tejido flexible en los extremos de los huesos se desgasta."
          }
        />
        <Card
          title={"Reuma"}
          src={"/wristPain.jpg"}
          alt={"reuma dolor"}
          text={
            "Reuma, o reumatismo, es un término no específico que se refiere a diversas condiciones médicas que afectan a las articulaciones, los huesos, cartílagos , ligamentos, tendones y el tejido conectivo."
          }
        />
        <Card
          title={"Columna"}
          src={"/backpain.jpg"}
          alt={"columna dolor"}
          text={"Tratamiento de dolor de espalda y/o columna."}
        />
        <Card
          title={"Infiltraciones"}
          src={"/infiltracionRodilla.jpg"}
          alt={"infiltracion rodilla"}
          text={"Todo tipo de infiltraciones."}
        />
        <Card
          title={"Inmovilizaciones con yeso"}
          src={"/yeso.jpg"}
          alt={"yeso inmovilizacion"}
          text={"Inmovilizaciones de articulaciones con yeso."}
        />
        <Card
          title={"Confección de plantillas para buena marcha"}
          src={"/zuela.jpeg"}
          alt={"plantilla zuela"}
          text={
            "Confecciono plantillas de pie para que usted pueda corregir su pisada, y caminar mejor."
          }
        />
      </ServiciosContainer>
      <ServiciosTitle>Y mucho mas... No dude en consultar.</ServiciosTitle>
    </>
  )
}

export default Servicios

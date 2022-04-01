import React from "react"
import Map from "../ui/Map"
import Formulario from "../ui/Form"

//styles
import {
  ContactoContainer,
  ContactoFormContainer,
  ContactoMapContainer,
} from "./ContactoElements"

import Animation from "../ui/Animation"

const Contacto = () => {
  return (
    <Animation>
      <ContactoContainer id="contacto">
        <ContactoFormContainer>
          <Formulario />
        </ContactoFormContainer>
        <ContactoMapContainer>
          <Map />
        </ContactoMapContainer>
      </ContactoContainer>
    </Animation>
  )
}

export default Contacto

import React from "react"

import {
  InfoTitle,
  InfoContainer,
  InfoItems,
  InfoImgContainer,
  InfoImg,
  InfoText,
  InfoTextContainer,
} from "./SobreMiElements"

const SobreMi = () => {
  return (
    <InfoContainer id="sobreMi">
      <InfoTitle>Sobre mi</InfoTitle>
      <InfoItems>
        <InfoImgContainer>
          <InfoImg src="/radiografia.jpg" alt="radiografia foto" />
        </InfoImgContainer>

        <InfoTextContainer>
          <InfoTitle>Dr. Ghilino Luis Antonio</InfoTitle>
          <InfoText>
            - Médico Traumatólogo con más de 25 Años de experiencia.
          </InfoText>
          <InfoText>- Graduado en la Universidad de Buenos Aires.</InfoText>
          <InfoText>- Colegiado Distrito IV del Colegio de Médicos.</InfoText>
          <InfoText>
            - Ex-Miembro del Servicio de Ortopedia y Trumatología del hospital
            Castex, San Martin.
          </InfoText>
          <InfoText>- Matrícula Provincial: 445565</InfoText>
        </InfoTextContainer>
      </InfoItems>
    </InfoContainer>
  )
}

export default SobreMi

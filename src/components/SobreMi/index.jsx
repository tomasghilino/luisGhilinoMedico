import React from "react"
import { css } from "styled-components"
import Image from "next/image"

import {
  InfoTitle,
  InfoContainer,
  InfoItems,
  InfoImgContainer,
  InfoText,
  InfoTextContainer,
} from "./SobreMiElements"

import Animation from "../ui/Animation"

const SobreMi = () => {
  return (
    <InfoContainer id="sobreMi">
      <InfoTitle>Sobre mi</InfoTitle>
      <Animation direction="left">
        <InfoItems>
          <InfoImgContainer>
            <Image
              src={"/images/radiografia.jpg"}
              layout="responsive"
              width={600}
              height={600}
              objectFit="cover"
              alt="radiografia foto"
            />
          </InfoImgContainer>

          <InfoTextContainer>
            <InfoTitle>Dr. Ghilino Luis A. </InfoTitle>
            <div>
              <InfoText>
                Médico Traumatólogo con más de 25 Años de experiencia
              </InfoText>
              <InfoText>Graduado en la Universidad de Buenos Aires</InfoText>
              <InfoText>Colegiado Distrito IV del Colegio de Médicos</InfoText>
              <InfoText>
                Ex-Miembro del Servicio de Ortopedia y Trumatología del hospital
                Castex, San Martin
              </InfoText>
            </div>
            <InfoText
              css={css`
                text-align: center;
                color: var(--primary);
              `}
            >
              Matrícula Provincial: 445565
            </InfoText>
          </InfoTextContainer>
        </InfoItems>
      </Animation>
    </InfoContainer>
  )
}

export default SobreMi

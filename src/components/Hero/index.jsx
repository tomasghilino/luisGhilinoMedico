import React from "react"

//styles
import {
  HeroContainer,
  BackgroundVideo,
  HeroContent,
  HeroContentTitulo,
  HeroContentIcons,
} from "./HeroElements"
import videoHero from "../../../static/videoHero.webm"

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroContentTitulo>
          <h1>Dr. Ghilino Luis Antonio</h1>
          <p>Médico Traumatólogo - 20 años de experiencia</p>
          <p>Diagnóstico y tratamiento de patologías crónicas</p>
        </HeroContentTitulo>
      </HeroContent>

      <BackgroundVideo muted loop autoPlay>
        <source src={videoHero} type="video/webm"></source>
      </BackgroundVideo>
    </HeroContainer>
  )
}

export default Hero

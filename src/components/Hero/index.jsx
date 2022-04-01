import React from "react"

//styles
import {
  HeroContainer,
  BackgroundVideo,
  HeroContent,
  HeroContentTitulo,
} from "./HeroElements"
import videoHero from "../../../static/videoHero.webm"

import Animation from "../ui/Animation"

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <Animation direction="left">
          <HeroContentTitulo>
            <h1>Dr. Ghilino Luis Antonio</h1>
            <p>Médico Traumatólogo - 25 años de experiencia</p>
            <p>Diagnóstico y tratamiento de patologías crónicas</p>
          </HeroContentTitulo>
        </Animation>
      </HeroContent>

      <BackgroundVideo muted loop autoPlay>
        <source src={videoHero} type="video/webm"></source>
      </BackgroundVideo>
    </HeroContainer>
  )
}

export default Hero

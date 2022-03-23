import React from "react"

//styles
import {HeroContainer, BackgroundVideo, HeroContent, HeroContentTitulo, HeroContentIcons} from './HeroElements'; 
import videoHero from '../../media/videoHero.webm';
import kneeIcon from '../../media/kneePainIcon.png';

const Hero = () => {
  return (
    <HeroContainer>

      <HeroContent>
        <HeroContentTitulo>
          <h1>Luis Ghilino</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam qui cupiditate adipisci provident inventore vero quibusdam ex, quaerat voluptatum dolore!</p>
        </HeroContentTitulo>

        <HeroContentIcons>
          <img src={kneeIcon} alt="" />
        </HeroContentIcons>
      </HeroContent>

      <BackgroundVideo muted loop autoPlay>                           
        <source src={videoHero} type="video/webm"></source>
      </BackgroundVideo>

    </HeroContainer>  
  )
}

export default Hero;

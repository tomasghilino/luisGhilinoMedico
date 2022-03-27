import React from "react"

import {
  CardContainer,
  CardTitle,
  CardImageContainer,
  CardImage,
  CardDescription,
  CardText,
} from "./CardElements"
const Card = ({ title, src, alt, text }) => {
  return (
    <CardContainer>
      <CardImageContainer>
        <CardImage src={src} alt={alt} />
      </CardImageContainer>

      <CardDescription>
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
      </CardDescription>
    </CardContainer>
  )
}

export default Card

import React from "react"

import ExportedImage from "next-image-export-optimizer"

import {
  CardContainer,
  CardTitle,
  CardImageContainer,
  CardDescription,
  CardText,
} from "./CardElements"

const Card = ({ title, image, alt, text }) => {
  return (
    <CardContainer>
      <CardImageContainer>
        <ExportedImage
          src={image}
          alt={alt}
          width={200}
          height={200}
          layout="responsive"
          objectFit="cover"
        />
      </CardImageContainer>

      <CardDescription>
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
      </CardDescription>
    </CardContainer>
  )
}

export default Card

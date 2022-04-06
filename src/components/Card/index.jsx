import React from "react";

import Image from 'next/image';

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
        <Image src={image} alt={alt} width={200} height={200} layout='responsive' objectFit="cover"/>
      </CardImageContainer>

      <CardDescription>
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
      </CardDescription>
    </CardContainer>
  )
}

export default Card

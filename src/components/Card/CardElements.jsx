import styled from "styled-components"

import { GatsbyImage } from "gatsby-plugin-image"

export const CardContainer = styled.div`
  display: flex;
  background-color: var(--darker);
  padding: 1rem;
  margin: 2rem;
  width: 100%;
  max-width: 40rem;
  border-radius: 1rem;

  //shadow
  box-shadow: 11px 9px 11px -8px rgba(0, 0, 0, 0.39);
  -webkit-box-shadow: 11px 9px 11px -8px rgba(0, 0, 0, 0.39);
  -moz-box-shadow: 11px 9px 11px -8px rgba(0, 0, 0, 0.39);

  @media (max-width: 575px) {
    font-size: 0.9rem;
    flex-direction: column;
  }
`

export const CardTitle = styled.h1`
  margin-left: 1.5rem;

  &::after {
    display: block;
    content: "";
    height: 2px;
    width: 75%;
    background-color: var(--primary);
  }
  color: var(--brighter);

  @media (max-width: 575px) {
    font-size: 1.2rem;
    margin: 1rem 0.5rem 0 0;
  }
`
export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
`
export const CardText = styled.p`
  color: white;
  margin-left: 1.5rem;
  margin-top: 0.2rem;
  line-height: 1.5;

  @media (max-width: 575px) {
    margin-left: 0.5rem;
    margin-top: 0.2rem;
  }
`

export const CardImageContainer = styled.div`
  flex-shrink: 0;
  flex-basis: 50%;
`
export const CardImage = styled(GatsbyImage)`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
`

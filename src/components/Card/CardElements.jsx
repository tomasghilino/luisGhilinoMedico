import styled from "styled-components"

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
  }
`

export const CardTitle = styled.h1`
  margin-left: 1.5rem;
  margin: 0;
  padding: 1rem;
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
  }
`
export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
`
export const CardText = styled.p`
  color: white;
  margin-left: 1rem;
  margin-top: 0.2rem;
  line-height: 1.5;
`

export const CardImageContainer = styled.div`
  flex-shrink: 0;
  flex-basis: 40%;
`
export const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
`

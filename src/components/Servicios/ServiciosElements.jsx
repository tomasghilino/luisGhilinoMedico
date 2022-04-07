import styled from "styled-components"

export const ServiciosTitle = styled.h1`
  color: #0f6a7d;
  font-size: 3rem;
  text-align: center;
  margin-top: 3rem;
`

export const ServiciosContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 2rem 4rem;

  @media (max-width: 1380px) {
    padding: 2rem 1rem;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 100%;
  }
`

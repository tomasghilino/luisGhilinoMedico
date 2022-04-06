import styled from "styled-components"

export const CardContainer = styled.div`
  display: flex;
  margin: 1rem;
  padding: 2rem;
  border-radius: .8rem;
  background-color: var(--darker);

  @media (max-width: 520px){
    display: block;
  }
  
  //shadow
  box-shadow: 11px 9px 11px -8px rgba(0, 0, 0, 0.39);
  -webkit-box-shadow: 11px 9px 11px -8px rgba(0, 0, 0, 0.39);
  -moz-box-shadow: 11px 9px 11px -8px rgba(0, 0, 0, 0.39);

`

export const CardTitle = styled.h1`
  margin: 0;
  &::after {
    display: block;
    content: "";
    height: 2px;
    width: 75%;
    margin-top: .5rem;
    background-color: var(--primary);
  }
  color: var(--brighter);
`
export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 1rem;
`
export const CardText = styled.p`
  color: white;
  margin-top: 1rem;
  line-height: 1.5;
`

export const CardImageContainer = styled.div`
  position: relative;
  flex: 1;
  max-height: 256px;
  max-width: 256px;
  margin: 0 auto;
  
  img {
    border-radius: .5rem;
  }
`

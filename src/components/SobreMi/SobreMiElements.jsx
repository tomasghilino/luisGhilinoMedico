import styled from "styled-components"

export const InfoContainer = styled.div`
  background-color: var(--black);
  padding: 5rem;
  border-radius: 50px 50px 0 0;

  box-shadow: 1px -9px 27px 0px rgba(0,0,0,0.75);
  -webkit-box-shadow: 1px -9px 27px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 1px -9px 27px 0px rgba(0,0,0,0.75);

  @media (max-width: 564px) {
    flex-direction: column;
    font-size: 1.2rem;
    padding: 1rem;
  }
`

export const InfoTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: var(--primary);
  margin: 2rem;
`

export const InfoItems = styled.div`
  padding: 2rem;
  display: flex;
  gap: 2rem;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 900px) {
    flex-direction: column;
    font-size: 1.2rem;
  }
`

export const InfoImgContainer = styled.div`
  flex: 1;
  position: relative;

  img{
    border-radius: 1rem;
  }
`

export const InfoTextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const InfoText = styled.p`
  margin: 1.5rem;
  font-size: 1.5rem;
  color: var(--brighter);
  text-align: center;
`

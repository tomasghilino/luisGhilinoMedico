import styled from "styled-components"

export const InfoContainer = styled.div`
  background-color: var(--black);
  padding: 5rem;
  border-radius: 50px 50px 0 0;
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
`
export const InfoImg = styled.img`
  max-height: 500px;
  object-fit: cover;
  width: 100%;
  border-radius: 1rem;
  opacity: 0.9;
`

export const InfoTextContainer = styled.div`
  flex: 1;
`
export const InfoText = styled.p`
  margin-top: 1rem;
  font-size: 1.5rem;
  color: #dedada;
  text-align: center;
`

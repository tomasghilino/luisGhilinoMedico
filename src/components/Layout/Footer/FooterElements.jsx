import styled from "styled-components"

export const FooterContainer = styled.div`
  background-color: var(--black);
  color: #e7e7e7;
  padding: 3rem;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  h1 {
    margin: 0;
  }
`

export const FooterTitle = styled.h1`
  display: inline-block;
  line-height: 1.4; // acomoda el border bottom
  border-bottom: 2px solid var(--primary);
`

export const FooterDescription = styled.div`
  margin-top: 2rem;
`

export const FooterItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 2.2rem;
  }
`

export const FooterItemText = styled.p`
  margin-left: 0.5rem;
`
export const FooterItemLink = styled.a`
  margin-left: 0.5rem;

  &:hover {
    cursor: pointer;
  }
`

import styled from "styled-components"

export const WhatsappButton = styled.a`
  font-size: 2.5rem;
  background-color: #25d366;
  z-index: 99;

  border-radius: 50%;
  padding: 1rem;
  color: white;
  position: fixed;
  text-decoration: none;

  right: 40px;
  bottom: 40px;

  @media (max-width: 768px) {
    right: 10px;
    bottom: 20px;
  }

  //shadow
  box-shadow: 11px 9px 11px -8px rgba(0, 0, 0, 0.39);
  -webkit-box-shadow: 11px 9px 11px -8px rgba(0, 0, 0, 0.39);
  -moz-box-shadow: 11px 9px 11px -8px rgba(0, 0, 0, 0.39);

  transition: all 0.4s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: var(--black);
  }

  &:active {
    transform: scale(0.9);
  }
`

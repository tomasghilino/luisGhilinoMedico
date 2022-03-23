import styled from "styled-components"

import { GiHealthNormal } from "react-icons/gi"

export const Nav = styled.nav`
  font-size: 1.1rem;
  position: sticky;
  top: 0;
  z-index: 999;
  height: 80px;
  background-color: ${props =>
    props.navbarChange ? "var(--primary)" : "transparent"};
  box-shadow: ${props =>
    props.navbarChange ? "0px 2px 10px rgba(0, 0, 0, 0.15)" : "transparent"};
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  transition: background-color 0.2s ease-in;
`

export const Logo = styled.h1`
  color: white;

  &:hover {
    cursor: pointer;
  }
`

export const Icon = styled(GiHealthNormal)`
  color: #07dd00;
  margin-right: 1rem;
  font-size: 2rem;
`

export const NavContainer = styled.ul`
  list-style: none;
  display: flex;
`

export const NavOption = styled.li`
  margin-right: 2rem;
  padding: 1rem;
  border-radius: 1.9rem;
  background-color: #ffffff;

  a {
    text-decoration: none;
    color: black;
    font-weight: 700;
  }

  transition: all 0.1s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #0fd30f;

    a {
      // Texto
      color: white;
    }
  }
`

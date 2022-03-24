import styled from "styled-components"

import { GiHealthNormal } from "react-icons/gi"
import { FaBars } from "react-icons/fa"

export const Nav = styled.nav`
  font-size: 1.1rem;
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 80px;
  background-color: ${props =>
    props.navbarChange ? "var(--primary)" : "transparent"};
  box-shadow: ${props =>
    props.navbarChange ? "0px 2px 10px rgba(0, 0, 0, 0.15)" : "transparent"};
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  transition: background-color 0.2s ease-in;

  @media (max-width: 768px) {
    flex-direction: column;
    background-color: var(--primary);
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  }
`
export const LogoContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`
export const Logo = styled.h1`
  color: white;
  margin: 0 0 0 2rem;
  align-self: center;
  &:hover {
    cursor: pointer;
  }
`

export const CruzIcon = styled(GiHealthNormal)`
  color: #07dd00;
  margin-right: 1rem;
  font-size: 2rem;
`
export const BarsIcon = styled(FaBars)`
  color: white;
  font-size: 3rem;
  align-self: center;
  display: none;
  margin-right: 2rem;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: block;
  }
`

export const NavContainer = styled.ul`
  list-style: none;
  display: flex;

  margin: 0;
  padding: 0;
  left: 0;

  transition: all 0.2s ease-in;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    display: ${props =>
      props.showNav ? "flex" : "none"}; //show navbar on click
  }
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

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100vw;
    border-radius: 0;
    text-align: center;
  }

  &:hover {
    cursor: pointer;
    background-color: #0fd30f;

    a {
      // Texto
      color: white;
    }
  }
`

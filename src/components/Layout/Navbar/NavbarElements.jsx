import styled from "styled-components"

import { GiHealthNormal } from "react-icons/gi"
import { FaBars } from "react-icons/fa"

import { Link } from "react-scroll"

export const Nav = styled.nav`
  font-size: 1.1rem;
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 80px;
  background-color: ${props =>
    props.navbarChange ? "var(--black)" : "transparent"};
  box-shadow: ${props =>
    props.navbarChange ? "0px 2px 10px rgba(0, 0, 0, 0.15)" : "transparent"};
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  transition: background-color 0.2s ease-in;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    flex-direction: column;
    background-color: var(--black);
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
    font-size: 1.9rem;
  }
`

export const NavContainer = styled.div`
  list-style: none;
  display: flex;
  align-items: center;

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

export const NavOption = styled.p`
  margin-right: 2rem;
  padding: 1rem;
  border-radius: 1.9rem;
  background-color: #ffffff;
  width: max-content;

  color: black;
  font-weight: 700;

  transition: all 0.1s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100vw;
    border-radius: 0;
    text-align: center;
    font-size: 1.5rem;
    border-bottom: 1px solid #0000003a;
  }

  &:hover {
    cursor: pointer;
    background-color: #0fd30f;

    // Texto
    color: white;
  }
`

export const NavLink = styled(Link)`
  text-decoration: none;

  &::visited {
    text-decoration: none;
  }
`

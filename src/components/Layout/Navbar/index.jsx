import React, { useState, useEffect } from "react"

import {
  Nav,
  NavContainer,
  NavOption,
  LogoContainer,
  Logo,
  CruzIcon,
  BarsIcon,
  NavLink,
} from "./NavbarElements"

import { animateScroll as scroll } from "react-scroll"

const Navbar = () => {
  const [navbarColorChange, setNavbarChange] = useState(false)
  const [showNav, setShowNav] = useState(false)
  //navbar scroll changeBackground function
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbarChange(true)
    } else {
      setNavbarChange(false)
    }
  }

  const navToggle = () => {
    setShowNav(!showNav)
  }

  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  }, [])

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return (
    <Nav navbarChange={navbarColorChange}>
      <LogoContainer>
        <Logo onClick={() => scrollToTop()}>
          <CruzIcon />
          Luis Ghilino
        </Logo>

        <BarsIcon onClick={() => navToggle()} />
      </LogoContainer>

      <div>
        <NavContainer showNav={showNav}>
          <NavLink
            onClick={() => navToggle()}
            to="patologias"
            smooth={true}
            duration={1000}
            spy={true}
            offset={-100}
            href="/patologias"
          >
            <NavOption>Patologías</NavOption>
          </NavLink>

          <NavLink
            onClick={() => navToggle()}
            to="sobreMi"
            smooth={true}
            duration={1000}
            spy={true}
            offset={-70}
            href="/sobreMi"
          >
            <NavOption>Sobre Mi</NavOption>
          </NavLink>

          <NavLink
            onClick={() => navToggle()}
            to="contacto"
            smooth={true}
            duration={1000}
            spy={true}
            offset={-70}
            href="/contacto"
          >
            <NavOption>Contacto</NavOption>
          </NavLink>
        </NavContainer>
      </div>
    </Nav>
  )
}

export default Navbar

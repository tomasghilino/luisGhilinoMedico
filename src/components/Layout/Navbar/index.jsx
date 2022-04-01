import React, { useState, useEffect } from "react"

import {
  Nav,
  NavContainer,
  NavOption,
  LogoContainer,
  Logo,
  CruzIcon,
  BarsIcon,
} from "./NavbarElements"

import { Link, animateScroll as scroll } from "react-scroll"

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
          <Link
            onClick={() => navToggle()}
            to="patologias"
            smooth={true}
            duration={1000}
            spy={true}
            offset={-100}
          >
            <NavOption>Patologías</NavOption>
          </Link>

          <Link
            onClick={() => navToggle()}
            to="sobreMi"
            smooth={true}
            duration={1000}
            spy={true}
            offset={-70}
          >
            <NavOption>Sobre Mi</NavOption>
          </Link>

          <Link
            onClick={() => navToggle()}
            to="contacto"
            smooth={true}
            duration={1000}
            spy={true}
            offset={-70}
          >
            <NavOption>Contacto</NavOption>
          </Link>
        </NavContainer>
      </div>
    </Nav>
  )
}

export default Navbar

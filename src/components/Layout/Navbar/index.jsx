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

  return (
    <Nav navbarChange={navbarColorChange}>
      <LogoContainer>
        <Logo>
          <CruzIcon />
          Luis Ghilino
        </Logo>

        <BarsIcon onClick={() => navToggle()} />
      </LogoContainer>

      <div>
        <NavContainer showNav={showNav} onClick={() => navToggle()}>
          <NavOption>
            <a href="#">Servicios</a>
          </NavOption>
          <NavOption>
            <a href="#"> Operaciones</a>
          </NavOption>
          <NavOption>
            <a href="#"> Precios </a>
          </NavOption>
          <NavOption>
            <a href="#"> Contacto</a>
          </NavOption>
        </NavContainer>
      </div>
    </Nav>
  )
}

export default Navbar

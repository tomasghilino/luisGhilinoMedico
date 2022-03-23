import React, { useState, useEffect } from "react"

import { Nav, NavContainer, NavOption, Logo, Icon } from "./NavbarElements"

const Navbar = () => {
  const [navbarChange, setNavbarChange] = useState(false)
  //navbar scroll changeBackground function
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbarChange(true)
    } else {
      setNavbarChange(false)
    }
  }

  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  }, [])

  return (
    <Nav navbarChange={navbarChange}>
      <Logo>
        <Icon />
        Luis Ghilino
      </Logo>
      <NavContainer>
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
    </Nav>
  )
}

export default Navbar

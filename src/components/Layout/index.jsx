import React from "react"

import { GlobalStyle } from "./LayoutElements"
import Navbar from "./Navbar"

const Layout = props => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      {props.children}
    </>
  )
}

export default Layout

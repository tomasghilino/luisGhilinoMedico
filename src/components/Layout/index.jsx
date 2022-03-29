import React from "react"
import Footer from "./Footer"

import { GlobalStyle } from "./LayoutElements"
import Navbar from "./Navbar"

const Layout = props => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout

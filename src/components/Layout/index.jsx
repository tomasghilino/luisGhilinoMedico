import React from "react"
import Footer from "./Footer"

import { GlobalStyle } from "./LayoutElements"
import Navbar from "./Navbar"
import WhatsApp from "./WhatsApp"

const Layout = props => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <WhatsApp />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout

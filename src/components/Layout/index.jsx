import React from "react"

import { GlobalStyle } from "./LayoutElements"

const Layout = props => {
  return (
    <>
      <GlobalStyle />
      {props.children}
    </>
  )
}

export default Layout

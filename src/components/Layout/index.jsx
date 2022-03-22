import React from "react"

import { GlobalStyle } from "./LayoutElements"

const Layout = props => {
  return (
    <>
      <GlobalStyle />
      <h1>Layout</h1>
      {props.children}
    </>
  )
}

export default Layout

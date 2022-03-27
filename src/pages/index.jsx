import * as React from "react"
import "normalize.css"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Servicios from "../components/Servicios"
import Contacto from "../components/Contacto"
const App = () => {
  return (
    <Layout>
      <Hero />
      <Servicios />
      <Contacto />
    </Layout>
  )
}

export default App

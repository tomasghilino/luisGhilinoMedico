import React from "react"
import "normalize.css"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Servicios from "../components/Servicios"
import Contacto from "../components/Contacto"
import SobreMi from "../components/SobreMi"

export default function Home() {
  return (
    <Layout id="inicio">
      <Hero />
      <Servicios />
      <SobreMi />
      <Contacto />
    </Layout>
  )
}
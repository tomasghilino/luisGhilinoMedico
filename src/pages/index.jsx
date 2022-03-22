import * as React from "react"
import "normalize.css"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Patologias from "../components/Patologias"
const App = () => {
  return (
    <Layout>
      <Hero />
      <Patologias />
    </Layout>
  )
}

export default App

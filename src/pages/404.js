import React from "react"
import Layout from "../components/Layout/index"
import Seo from "../components/Seo.js"

const NotFound = () => {
  return (
    <>
      <Seo />
      <Layout>
        <h1>Error: Page not found</h1>
      </Layout>
    </>
  )
}

export default NotFound

import React from "react"

import { Helmet } from "react-helmet"

import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ title, description }) => {
  const { site } = useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          title
          description
          author
          defaultTitle: title

          defaultDescription: description
        }
      }
    }
  `)
  const { defaultTitle, defaultDescription } = site.siteMetadata
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
  }
  return (
    <Helmet title={seo.title}>
      <meta name="description" content={seo.description} />
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      <meta
        name="keywords"
        content="doctor, luis ghilino, medico traumatologo, traumatologo san miguel, san miguel medico, traumatologo bella vista, medicina, dolor de huesos"
      />
    </Helmet>
  )
}
export default Seo

import React from "react"

import { Helmet } from "react-helmet"

import { useStaticQuery, graphql } from "gatsby"
const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)
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
    </Helmet>
  )
}
export default SEO

const query = graphql`
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
`

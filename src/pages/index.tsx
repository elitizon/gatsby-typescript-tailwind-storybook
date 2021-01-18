import React from 'react'
import Helmet from 'react-helmet'
import { Hero } from '../components/Hero'

import { graphql, useStaticQuery } from 'gatsby'

import '../styles/global.css'

const query = graphql`
  query SiteMetadata {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const IndexPage: React.FC<{}> = () => {
  const data = useStaticQuery(query)
  return (
    <>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
      </Helmet>
      <Hero title={data.site.siteMetadata.title} />
    </>
  )
}

export default IndexPage

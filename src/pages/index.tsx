import React from "react"
import Helmet from "react-helmet"

import { graphql, useStaticQuery } from "gatsby"

import "../styles/global.css"

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
      <div className="h-screen w-full bg-pink-200 mx-auto flex-row justify-center">
        <span className="text-3xl text-gray-600">Hello Gatsby !</span>
      </div>
    </>
  )
}

export default IndexPage

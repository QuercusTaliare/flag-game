import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Nav from "../components/Nav"



const IndexPage = () => {
  
  const data = useStaticQuery(graphql`
    query SiteDescQuery {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)

  return (
    <Layout>
      <Seo title="Home" />
      <Nav />
      <p>{data.site.siteMetadata?.description || `Need Description`}</p>
      
      {/* <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      /> */}
      {/* <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p> */}
    </Layout>
  )
}

export default IndexPage

import * as React from "react"

import { graphql } from "gatsby";
import Layout from "../components/layout";
import Nav from "../components/Nav";


const FlagsPage = () => {



  return (
    <Layout>
      <h2>Flags</h2>
      <Nav />
      <ul></ul>
    </Layout>
  )

}

export const query = graphql`
  query FlagsPageQuery {
    allCountry {
      nodes {
        name
        flag
      }
    }
  }
`;

export default FlagsPage;
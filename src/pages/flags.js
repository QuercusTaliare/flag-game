import * as React from "react"

import { graphql } from "gatsby";
import Layout from "../components/layout";
import Nav from "../components/Nav";
import "./flags.modules.css";


const FlagsPage = ({data}) => {

  return (
    <Layout>
      <Nav />
      <div class="flag-page">
        <h2>Flags</h2>
        <ul class="countries-list">
          {data.allCountry.nodes.map(country => {
            return (
              <li>
                <span>{country.name}</span>
                <img src={country.flag} alt={country.name} />
              </li>
              )
            })}
        </ul>
      </div>
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
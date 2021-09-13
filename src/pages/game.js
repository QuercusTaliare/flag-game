import { graphql, Link } from "gatsby"
import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import Nav from "../components/Nav"
import useRandomCountries from "../hooks/useRandomCountries"

const GamePage = ({ data }) => {

  const [answerOptions, setAnswerOptions] = useState([]);

  useRandomCountries({ data });

  // Create hook to select four random countries
  // Select a single country to be the correct answer
  // Display country name
  // Randomize the order of the four countries
  // Display four flags (three random, one which matches the country)

  return (
    <Layout>
      <Nav />
      <h2>Game</h2>
      
      <p>Choose the correct flag</p>
    </Layout>
  )
}

export const query = graphql`
  query GamePageQuery {
    allCountry {
      nodes {
        name
        flag
      }
    }
  }
`;

export default GamePage
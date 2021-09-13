import { graphql, Link } from "gatsby"
import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import Nav from "../components/Nav"
import useRandomCountries from "../hooks/useRandomCountries"
import "./game.modules.css";

const GamePage = ({ data }) => {

  const [answerOptions, setAnswerOptions] = useState([]);

  const [answer, setAnswer] = useState({});

  useRandomCountries({ data, setAnswerOptions, setAnswer });

  // Create logic for user to click button
    // Should this be a form? 

  console.log(answerOptions);

  return (
    <Layout>
      <Nav />
      <div className="game-page">
        <h2>Game</h2>
        
        <p>Choose the correct flag</p>
        <p>{answer?.name}</p>
        <ul className="options-list">
          {
            answerOptions?.map(option => {
              return (
                <li key={option.numericCode}>
                  <button>
                    <img src={option.flag} alt="" />
                    
                  </button>
                </li>
              )
            })
          }
        </ul>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GamePageQuery {
    allCountry {
      nodes {
        name
        flag
        numericCode
      }
    }
  }
`;

export default GamePage
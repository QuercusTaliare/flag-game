import { graphql, Link } from "gatsby"
import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import Nav from "../components/Nav"
import useForm from "../hooks/useForm"
import useRandomCountries from "../hooks/useRandomCountries"
import "./game.modules.css";

const GamePage = ({ data }) => {

  const [answerOptions, setAnswerOptions] = useState([]);

  const [answer, setAnswer] = useState({});

  useRandomCountries({ data, setAnswerOptions, setAnswer });

  const { values, updateValue } = useForm({
    option: ''
  })

  // Create submit button function/hook
    // useSubmitAnswer
    // compare selected answer with actual answer (answer)

  // Abstract function into separate util library
  function determineOptionLetter(index) {

    const letters = ["A", "B", "C", "D"];

    const letter = letters[index];

    return `option${letter}`

  }
  
  return (
    <Layout>
      <Nav />
      <div className="game-page">
        
        <pre>{JSON.stringify(values, null, 2)}</pre>
        
        <h2>Game</h2>
        
        <p>Choose the correct flag</p>
        <p>{answer?.name}</p>
        <form>
          <ul className="options-list">
            {
              answerOptions?.map((option, index) => {
                const optionLetter = determineOptionLetter(index)

                return (
                  <li key={option.numericCode}>
                    <img src={option.flag} alt={optionLetter} />
                    <div>
                      <label htmlFor={optionLetter}>
                        <input 
                          type="radio" 
                          id={optionLetter}
                          name="option" 
                          value={optionLetter}
                          checked={values.option === optionLetter} 
                          onChange={updateValue}
                        />
                      </label>
                    </div>
                  </li>
                )
              })
            }
          </ul>
          <button type="submit">Choose</button>
        </form>

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
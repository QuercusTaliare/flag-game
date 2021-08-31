import { Link } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"

const GamePage = () => {

  return (
    <Layout>
      <h2>Game</h2>
      <Link to="/">Home</Link>
      <p>Choose the correct flag</p>
    </Layout>
  )
}

export default GamePage
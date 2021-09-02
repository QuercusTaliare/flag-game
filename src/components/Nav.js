import * as React from "react"
import { Link } from "gatsby";

const Nav = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/game/">Play</Link>
      </li>
      <li>
        <Link to="/flags/">Flags</Link>
      </li>
    </ul>
  )
}

export default Nav;
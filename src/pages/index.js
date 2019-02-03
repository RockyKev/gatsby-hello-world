import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `purple`}}>
  <Link to="/contact/">Contact</Link>
  <Link to="/about-css-modules/">CSS Modules</Link>
  <Header headerText="Helly Gatsby!" />
  <p>What a worldeo!</p>
  <img src="https://source.unsplash.com/random/400x200" alt="" /> 

  {/* <PrimaryButton>Click Me</PrimaryButton> */}

  </div>
)

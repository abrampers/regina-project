import React from "react"
import PropTypes from "prop-types"

import mainImage from "../images/main.webp"
import Paper from "../components/paper"

const Header = ({ siteTitle }) => (
  <Paper>
    <h1 style={{ textAlign: "center" }}>Landing Page Starter</h1>
    <p style={{ textAlign: "center" }}>
      This landing page looks great on all devices and is minimal in design. Add
      what you want and deploy.
    </p>
    <div style={{ textAlign: "center" }}>
      <button>Call to action</button>
    </div>
    <div style={{ margin: 60, position: "relative" }}>
      <img src={mainImage} alt="Some content" />
    </div>
  </Paper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

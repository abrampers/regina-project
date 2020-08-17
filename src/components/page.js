import React from "react"
import PropTypes from "prop-types"

import Footer from "./footer"
import Paper from "./paper"

const Page = props => (
  <Paper>
    <h1 style={{ textAlign: "center" }}>{props.title}</h1>
    <p style={{ textAlign: "center" }}>{props.paragraph}</p>
    {props.content}
    <Footer prev={props.prev} next={props.next} />
  </Paper>
)

Page.propTypes = {
  siteTitle: PropTypes.string,
}

Page.defaultProps = {
  siteTitle: ``,
}

export default Page

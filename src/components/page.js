import React from "react"
import PropTypes from "prop-types"

import Footer from "./footer"
import Paper from "./paper"

const Page = props => (
  <Paper>
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {props.children}
    </div>
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

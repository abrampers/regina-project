/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import headerImage from "../images/background-floral-1.jpg"

import "../../node_modules/papercss/dist/paper.min.css"
import "../styles/link.css"

const Layout = props => (
  <div
    style={{
      position: "fixed",
      padding: "0 1rem",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: "1rem 1rem 0rem 1rem",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -5,
          height: "100vh",
          width: "100vw",
          opacity: 0.5,
          backgroundImage: `url(${headerImage})`,
        }}
      />
      <main>{props.children}</main>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

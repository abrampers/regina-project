/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import headerImage from "../images/header.png"

import Footer from "./footer"
import "../../node_modules/papercss/dist/paper.min.css"
import "../styles/link.css"

const Layout = props => (
  <div
    style={{
      padding: "0 1rem",
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: "1rem 1rem",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${headerImage})`,
          position: "absolute",
          top: 0,
          zIndex: -5,
          height: "100vh",
          width: "100vw",
          opacity: 0.5,
        }}
      />
      <main>{props.children}</main>
    </div>
    <Footer prev={props.prev} next={props.next} />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

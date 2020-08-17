import React from "react"
import PropTypes from "prop-types"
import nextImage from "../images/next.png"
import prevImage from "../images/prev.png"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Footer = props => {
  let nextButton = null
  if (!!props.next) {
    nextButton = (
      <AniLink swipe direction="left" to={props.next} duration="0.5">
        <img
          src={nextImage}
          style={{
            height: "55px",
            padding: "5px",
          }}
        />
      </AniLink>
    )
  }

  let prevButton = null
  if (!!props.prev) {
    prevButton = (
      <AniLink swipe direction="right" to={props.prev} duration="0.5">
        <img
          src={prevImage}
          style={{
            height: "55px",
            padding: "5px",
          }}
        />
      </AniLink>
    )
  }

  return (
    <footer>
      <div
        style={{
          display: "grid",
          alignItems: "center",
          justifyContent: "space-between",
          gridTemplateColumns: "repeat(auto-fit, minmax(50px, 50px))",
          padding: "2rem 0rem 0rem 0rem",
          fontSize: ".85rem",
        }}
      >
        {!!prevButton ? prevButton : <div />}
        {!!nextButton ? nextButton : <div />}
      </div>
    </footer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer

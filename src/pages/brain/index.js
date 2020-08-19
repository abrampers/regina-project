import React, { useState } from "react"
import Layout from "../../components/layout"
import Page from "../../components/page"
import mainImage from "../../images/main.webp"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import brainImage from "../../images/brain.png"
import { zoomLink } from "../../../config"

const BrainRow = props => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gridColumn: props.column,
        gridRow: props.row,
      }}
    >
      <AniLink paintDrip to={props.to} hex="#ededed" onClick={props.onClick}>
        {props.children}
      </AniLink>
    </div>
  )
}

const BrainPage = () => {
  const [familyVisited, setFamilyVisited] = useState(false)
  const [abramVisited, setAbramVisited] = useState(false)
  const [schoolVisited, setSchoolVisited] = useState(false)
  const [friendsVisited, setFriendsVisited] = useState(false)

  let content = (
    <>
      <div style={{ textAlign: "center" }}>
        <button>Call to action</button>
      </div>
      <div style={{ margin: 60, position: "relative" }}>
        <img src={mainImage} alt="Some content" />
      </div>
    </>
  )

  let content1 = (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src={brainImage}
        style={{
          height: "512px",
          width: "512px",
          padding: "32px",
          opacity: 0.5,
          borderColor: "rgba(0, 0, 0, 0)",
        }}
      />
      <div
        style={{
          display: "grid",
          position: "absolute",
          left: "0px",
          top: "0px",
          height: "512px",
          width: "512px",
        }}
      >
        <BrainRow
          row="1"
          column="1"
          to="/brain/family"
          onClick={() => {
            setFamilyVisited(true)
          }}
        >
          <h3>Family</h3>
        </BrainRow>
        <BrainRow
          row="1"
          column="2"
          to="/brain/abram"
          onClick={() => {
            setAbramVisited(true)
          }}
        >
          <h3>abram</h3>
        </BrainRow>
        <BrainRow
          row="2"
          column="1"
          to="/brain/school"
          onClick={() => {
            setSchoolVisited(true)
          }}
        >
          <h3>school</h3>
        </BrainRow>
        <BrainRow
          row="2"
          column="2"
          to="/brain/friends"
          onClick={() => {
            setFriendsVisited(true)
          }}
        >
          <h3>friends</h3>
        </BrainRow>
      </div>
      <p>After visiting all the pages:</p>
      <form>
        <button formAction={zoomLink}>
          Click here for the ultimate prize!
        </button>
      </form>
    </div>
  )

  return (
    <Layout>
      <Page>
        <h1>Your Brain</h1>
        <p>HAHA</p>
        {content1}
      </Page>
    </Layout>
  )
}

export default BrainPage

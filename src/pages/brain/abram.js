import React from "react"
import Layout from "../../components/layout"
import Page from "../../components/page"
import { abram } from "../../../config"

const AbramPage = () => {
  let pages = (
    <Page>
      <h1>From: {abram.name}</h1>
      {abram.messages.map((message, _) => {
        return <p style={{ textAlign: "center" }}>{message}</p>
      })}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {abram.images.map((image, _) => {
          return (
            <div style={{ padding: "10px" }}>
              <img src={image} style={{ maxHeight: "600px", width: "auto" }} />
            </div>
          )
        })}
      </div>
    </Page>
  )
  return <Layout>{pages}</Layout>
}

export default AbramPage

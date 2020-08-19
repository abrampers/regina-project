import React from "react"
import Layout from "../../components/layout"
import Page from "../../components/page"
import { abram } from "../../../config"

const AbramPage = () => {
  let pages = (
    <Page prev="/brain">
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
        {abram.videos.map((video, _) => {
          return (
            <div style={{ padding: "10px" }}>
              <video
                controls
                src={video}
                class="video"
                style={{ maxHeight: "450px" }}
              />
            </div>
          )
        })}
        {abram.images.map((image, _) => {
          return (
            <div style={{ padding: "10px" }}>
              <img
                src={image}
                style={{ maxHeight: "450px", maxWidth: "auto" }}
              />
            </div>
          )
        })}
      </div>
    </Page>
  )
  return <Layout>{pages}</Layout>
}

export default AbramPage

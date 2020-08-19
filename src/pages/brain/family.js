import React from "react"
import Layout from "../../components/layout"
import Page from "../../components/page"
import { families } from "../../../config"

const FamilyPage = () => {
  let pages = families.map((family, _) => {
    return (
      <Page prev="/brain">
        <h1>From: {family.name}</h1>
        {family.messages.map((message, _) => {
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
          {family.videos.map((video, _) => {
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
          {family.images.map((image, _) => {
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
  })
  return <Layout>{pages}</Layout>
}

export default FamilyPage

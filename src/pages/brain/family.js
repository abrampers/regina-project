import React from "react"
import Layout from "../../components/layout"
import Page from "../../components/page"
import { families } from "../../../config"

const FamilyPage = () => {
  let pages = families.map((family, _) => {
    return (
      <Page>
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
          {family.images.map((image, _) => {
            return (
              <div style={{ padding: "10px" }}>
                <img
                  src={image}
                  style={{ maxHeight: "600px", width: "auto" }}
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

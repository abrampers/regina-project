import React from "react"
import Layout from "../../components/layout"
import Page from "../../components/page"
import { friends } from "../../../config"

const FriendsPage = () => {
  let pages = friends.map((friend, _) => {
    return (
      <Page prev="/brain">
        <h1>From: {friend.name}</h1>
        {friend.messages.map((message, _) => {
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
          {friend.images.map((image, _) => {
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

export default FriendsPage

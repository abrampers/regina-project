import React from "react"
import Layout from "../../components/layout"
import Page from "../../components/page"
import { friends } from "../../../config"

function wrap(oneLineMessage) {
  return <p style={{ textAlign: "center" }}>{oneLineMessage}</p>
}

const FriendsPage = () => {
  let pages = friends.map((friend, _) => {
    return (
      <Page>
        <h1>{friend.name}</h1>
        {friend.messages.map((message, _) => {
          return wrap(message)
        })}
      </Page>
    )
  })
  return <Layout>{pages}</Layout>
}

export default FriendsPage

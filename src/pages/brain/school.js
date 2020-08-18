import React from "react"
import Layout from "../../components/layout"
import Page from "../../components/page"
import AniLink from "gatsby-plugin-transition-link"

const SchoolPage = () => {
  return (
    <Layout>
      <Page prev="/brain">
        <h1>School (FK ya bukan SMA)</h1>
        <p>
          Seharusnya ini berisi seluruh perjalanan FK kamu, cuma seperti kamu
          bisa tebak, aku gasempet buatnya hehehe. Jadi langsung pergi ke
          <AniLink swipe direction="left" to="/brain/friends" duration="0.5">
            {" sini "}
          </AniLink>
          aja okeh. Kalau bingung, klik{" "}
          <AniLink swipe direction="left" to="/brain/friends" duration="0.5">
            {" sini "}
          </AniLink>
          nya yang tadi itu okeh?
        </p>
      </Page>
    </Layout>
  )
}

export default SchoolPage

import React from "react"

import Layout from "../components/layout"
import Page from "../components/page"
import mainImage from "../images/main.webp"

const Image = props => {}

const PageThree = () => {
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

  return (
    <Layout>
      <Page prev="/2">
        <h1>Page 3</h1>
        <p>Ini page 3. Kartunya ikut ukuran kontennya.</p>
      </Page>
      <Page>
        <h1>Landing Page Starter</h1>
        <p>
          This landing page looks great on all devices and is minimal in design.
          Add what you want and deploy.
        </p>
        {content}
      </Page>
    </Layout>
  )
}

export default PageThree

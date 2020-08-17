import React from "react"

import Layout from "../components/layout"
import Page from "../components/page"
import mainImage from "../images/main.webp"

const PageTwo = () => {
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
      <Page
        title="Page 2"
        paragraph="Ini page 2. Kartunya ikut ukuran kontennya."
        prev="/1"
        next="/3"
      />
      <Page prev="/1" next="/3">
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

export default PageTwo

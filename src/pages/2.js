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
      <Page
        title="Page 2 B"
        paragraph="This landing page looks great on all devices and is minimal in design. Add what you want and deploy."
        content={content}
      />
    </Layout>
  )
}

export default PageTwo

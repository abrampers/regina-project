import React from "react"

import Layout from "../components/layout"
import Page from "../components/page"
import mainImage from "../images/main.webp"

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
      <Page
        title="Page 3"
        paragraph="Ini page 3. Kartunya ikut ukuran kontennya."
        prev="/2"
      />
      <Page
        title="Page 3 B"
        paragraph="This landing page looks great on all devices and is minimal in design. Add what you want and deploy."
        content={content}
      />
    </Layout>
  )
}

export default PageThree

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Page from "../components/page"
import Content from "../components/content"
import CallToAction from "../components/cta"
import mainImage from "../images/main.webp"

const TemplatePage = () => {
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
      <SEO />
      <Page
        title="Landing Page Starter"
        paragraph="This landing page looks great on all devices and is minimal in design. Add what you want and deploy."
        content={content}
      />
      <Content />
      <CallToAction />
    </Layout>
  )
}

export default TemplatePage

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Page from "../components/page"
import Content from "../components/content"
import CallToAction from "../components/cta"

const PageOne = () => (
  <Layout>
    <SEO />
    <Page />
    <Content />
    <CallToAction />
  </Layout>
)

export default PageOne

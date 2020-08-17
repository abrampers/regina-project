import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"

const PageOne = () => (
  <Layout next="/page-two">
    <Hero />
  </Layout>
)

export default PageOne

import React from "react"
import Layout from "../../components/layout"
import Page from "../../components/page"

const AbramPage = () => {
  return (
    <Layout>
      <Layout>
        <Page
          title="Abram Page"
          paragraph="Ini page 1. Kartunya ikut ukuran kontennya."
          //   content={content1}
          next="/2"
        />
        <Page
          title="Page 1 b"
          paragraph="This landing page looks great on all devices and is minimal in design. Add what you want and deploy."
          //   content={content}
        />
      </Layout>
    </Layout>
  )
}

export default AbramPage

import React, { useState } from "react"
import Lightbox from "react-image-lightbox"
import Layout from "../components/layout"
import Page from "../components/page"
import mainImage from "../images/main.webp"
import ReactPlayer from "react-player"

import reginaKecil1 from "../images/regina-kecil-1.jpeg"

const PageOne = () => {
  const [isOpen, setIsOpen] = useState(true)

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

  let content1 = (
    <div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=KEnL93sCbww"
        class="video"
      />
      <img src={reginaKecil1} />
    </div>
  )

  return (
    <Layout>
      <Page
        title="Page 1"
        paragraph="Ini page 1. Kartunya ikut ukuran kontennya."
        content={content1}
        next="/2"
      />
      <Page
        title="Page 1 b"
        paragraph="This landing page looks great on all devices and is minimal in design. Add what you want and deploy."
        content={content}
      />
    </Layout>
  )
}

export default PageOne

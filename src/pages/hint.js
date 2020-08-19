import React from "react"
import Layout from "../components/layout"
import Page from "../components/page"
import { hints } from "../../config"
import ReactCardFlip from "react-card-flip"

class FlippableImage extends React.Component {
  constructor() {
    super()
    this.state = {
      isFlipped: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    this.setState({
      isFlipped: !this.state.isFlipped,
    })
  }

  render() {
    return (
      <div style={{ padding: "10px" }}>
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipDirection="horizontal"
          containerStyle={{ display: "inline-block" }}
        >
          <img
            src={this.props.src}
            style={{ height: "300px", maxWidth: "auto", flex: "1" }}
            onClick={this.handleClick}
          />

          <div
            onClick={this.handleClick}
            class="video"
            style={{
              height: "300px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "226px",
            }}
          >
            <div>{this.props.text}</div>
          </div>
        </ReactCardFlip>
      </div>
    )
  }
}

const HintsPage = () => {
  return (
    <Layout>
      <Page prev="/">
        <h1>Its somewhere in this page</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {hints.map((hint, _) => {
            return <FlippableImage src={hint.image} text={hint.text} />
          })}
        </div>
      </Page>
    </Layout>
  )
}

export default HintsPage

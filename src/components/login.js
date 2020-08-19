import React from "react"
import PropTypes from "prop-types"
import Paper from "./paper"
import Welcome from "./welcome"
import headerImage from "../images/header.png"
import AniLink from "gatsby-plugin-transition-link/AniLink"

class PasswordForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: "" }
    this.onSubmit = this.onSubmit.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.state = {
      password: "",
      tries: 0,
      showHintButton: false,
    }
  }

  onSubmit(e) {
    e.preventDefault()
    e.stopPropagation()
    console.log(this.props.password)
    if (this.state.password === this.props.password) {
      this.props.onSuccess()
    }
    this.setState({ tries: this.state.tries + 1 })
    if (this.state.tries > 3) {
      this.setState({ showHintButton: true })
    }
    this.setState({ message: `Incorrect password! ${this.state.tries} tries` })
    setTimeout(() => {
      this.setState({ message: "" })
    }, 3000)
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value })
  }

  render() {
    const { message } = this.state
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <form
          id="signup-form"
          onSubmit={this.onSubmit}
          method="post"
          action="#"
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            style={{
              marginRight: "10px",
            }}
          />
          <input type="submit" value="Go!" />
        </form>
        {this.state.showHintButton && (
          <AniLink paintDrip to="/hint" hex="#ededed">
            <button>Need any hint?</button>
          </AniLink>
        )}
        <span className={`${message ? "visible success" : ""} message`}>
          {message}
        </span>
      </div>
    )
  }
}

const Login = props => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "4rem 1rem",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: 0,
        zIndex: -5,
        height: "100vh",
        width: "100vw",
        opacity: 0.5,
        backgroundImage: `url(${headerImage})`,
      }}
    />
    <Paper>
      <Welcome />
      <PasswordForm password={props.password} onSuccess={props.onSuccess} />
    </Paper>
  </div>
)

Login.propTypes = {
  siteTitle: PropTypes.string,
}

Login.defaultProps = {
  siteTitle: ``,
}

export default Login

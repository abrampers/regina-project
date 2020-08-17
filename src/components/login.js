import React from "react"
import PropTypes from "prop-types"
import Paper from "./paper"
import Welcome from "./welcome"
import headerImage from "../images/header.png"

class PasswordForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: "" }
    this.onSubmit = this.onSubmit.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.state = {
      password: "",
    }
  }

  onSubmit(e) {
    e.preventDefault()
    e.stopPropagation()
    this.setState({ message: "Thank you!" })
    if (this.state.password === "regina") {
      this.props.onSuccess()
    }
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
        <span className={`${message ? "visible success" : ""} message`}>
          {message}
        </span>
      </form>
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
        backgroundImage: `url(${headerImage})`,
        position: "absolute",
        top: 0,
        zIndex: -5,
        height: "100vh",
        width: "100vw",
        opacity: 0.5,
      }}
    />
    <Paper>
      <Welcome />
      <PasswordForm onSuccess={props.onSuccess} />
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

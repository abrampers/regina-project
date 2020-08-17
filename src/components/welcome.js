import React from "react"
import reginaKecilProfile from "../images/regina-kecil-1.jpeg"

export default function Footer() {
  return (
    <header
      id="header"
      style={{
        textAlign: "center",
      }}
    >
      <h1>Welcome Regina Elaine Hutagalung!</h1>
      <p>Is today is your birthday?</p>
      <img
        src={reginaKecilProfile}
        style={{
          height: "100px",
          display: "block",
          margin: "0 auto",
          marginBottom: "20px",
        }}
      />
    </header>
  )
}

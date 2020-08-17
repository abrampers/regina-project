import React from "react"
import Layout from "../components/layout"
import Login from "../components/login"
import { navigate } from "gatsby"

const LoginPage = () => {
  return (
    <Layout>
      <Login
        onSuccess={() => {
          navigate("/brain")
        }}
      />
    </Layout>
  )
}

export default LoginPage

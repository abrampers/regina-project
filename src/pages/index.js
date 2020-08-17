import React from 'react';
import Layout from '../components/layout'
import Login from '../components/login'
import { navigate } from 'gatsby'

const LoginPage = () => {
  const go = () => {
    navigate('/page-one')
  }

  return (
    <Layout>
      <Login onSuccess={go}/>
    </Layout>
  )
}

export default LoginPage;
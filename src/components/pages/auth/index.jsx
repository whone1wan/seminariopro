import React, { useState } from 'react'
import { Login } from './components/Login'
import { Register } from './components/Register'

const Auth = () => {
  const [first, setfirst] = useState(true)

  const nosexd = () => {
    setfirst(!first)
  }

  if (first) return <Login nosexd={nosexd} />

  return <Register nosexd={nosexd} />
}

export default Auth

import { useAuth } from 'cyton-react'
import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'



function Login() {
  const {auth, login} = useAuth()
  const loggedIn = auth.user && auth.token

  useEffect(() => {
    if (!loggedIn) {
      login()
    }
    return () => {}
  }, [login, loggedIn])

  return <Redirect to="/app" /> 
}

export default Login

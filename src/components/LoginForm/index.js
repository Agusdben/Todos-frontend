import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import useUser from '../../hooks/useUser'

export const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login, isLogged, isLoginLoading, hasLoginError } = useUser()
  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = (e) => {
    e.preventDefault()
    login({ username, password })
  }

  return (
    <>
      {isLoginLoading && <strong>Checking credentials...</strong>}
      {!isLoginLoading &&
        <form onSubmit={handleLogin}>
          <input type='text' value={username} onChange={handleUsername} />
          <input type='password' value={password} onChange={handlePassword} />
          <button>LOGIN</button>
          {hasLoginError && <strong>Username or password invialid</strong>}
        </form>}
      {isLogged && <Navigate to='/' replace />}
    </>
  )
}

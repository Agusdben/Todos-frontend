import React, { useState } from 'react'
import useUser from '../../hooks/useUser'

export const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useUser()

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
    <form onSubmit={handleLogin}>
      <input type='text' value={username} onChange={handleUsername} />
      <input type='password' value={password} onChange={handlePassword} />
      <button>LOGIN</button>
    </form>
  )
}

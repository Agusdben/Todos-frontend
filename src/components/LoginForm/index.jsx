import React, { useState } from 'react'
import useUser from '../../hooks/useUser'

import './LoginForm.css'

export const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login, hasLoginError } = useUser()
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
    <form className='login-form' onSubmit={handleLogin}>
      <input
        className='login-form__input'
        type='text' value={username}
        onChange={handleUsername}
        placeholder='Username'
      />
      <input
        className='login-form__input'
        type='password' value={password}
        onChange={handlePassword}
        placeholder='Password'
      />
      {hasLoginError && <strong className='login-form__error'>Username or password invialid</strong>}
      <button>LOGIN</button>
    </form>
  )
}

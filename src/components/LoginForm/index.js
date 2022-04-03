import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useUser from '../../hooks/useUser'

export const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login, isLogged, isLoginLoading, hasLoginError } = useUser()
  const navigate = useNavigate()
  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = (e) => {
    e.preventDefault()
    login({ username, password })
    if (isLogged) navigate('/')
  }

  return (
    <>
      {isLoginLoading && <strong>Comprobando credenciales...</strong>}
      {!isLoginLoading &&
        <form onSubmit={handleLogin}>
          <input type='text' value={username} onChange={handleUsername} />
          <input type='password' value={password} onChange={handlePassword} />
          <button>LOGIN</button>
          {hasLoginError && <strong>Nombre de usuario o contraseña invalida</strong>}
        </form>}
    </>
  )
}

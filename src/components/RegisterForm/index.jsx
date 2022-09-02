import React, { useState } from 'react'
import userServices from '../../services/user'

import './RegisterForm.css'

export const RegisterForm = ({ setSuccess }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const handleUsername = ({ target }) => {
    setUsername(target.value)
  }
  const handlePassword = ({ target }) => {
    setPassword(target.value)
  }
  const handleConfirmPassword = ({ target }) => {
    setConfirmPassword(target.value)
  }

  const handleSubmitRegister = async (e) => {
    e.preventDefault()
    try {
      const user = {
        username,
        password,
        confirmPassword
      }
      await userServices.signin(user)
      setSuccess(true)
    } catch (e) {
      setSuccess(false)
      setError(e.response.data.error)
    }
  }
  return (
    <form className='register-form' onSubmit={handleSubmitRegister}>
      <input
        required
        type='text'
        className='register-form__input'
        onChange={handleUsername}
        value={username}
        placeholder='Username'
      />
      <input
        required
        type='password'
        className='register-form__input'
        onChange={handlePassword}
        value={password}
        placeholder='Password'
      />
      <input
        required
        type='password'
        className='register-form__input'
        onChange={handleConfirmPassword}
        value={confirmPassword}
        placeholder='Confirm password'
      />
      <button>Register</button>
      {error && <strong style={{ textAlign: 'center' }}>{error}</strong>}
    </form>
  )
}

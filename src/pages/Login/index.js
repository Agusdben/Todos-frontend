import React from 'react'
import { LoginForm } from '../../components/LoginForm'
import { Link, Navigate } from 'react-router-dom'
import useUser from '../../hooks/useUser'
import './Login.css'
export const Login = () => {
  const { isLogged, isLoginLoading } = useUser()

  return (
    <section className='login grid-center' style={{ minHeight: `calc(${window.innerHeight}px - var(--header-height)`, display: 'grid', placeContent: 'center' }}>
      <h2 className='login__title'>Login</h2>
      {isLoginLoading && <strong className='login__checking'>Checking credentials...</strong>}
      {!isLoginLoading && <LoginForm />}
      <Link className='login__link' to='/register'>Don't have an account yet?</Link>
      {isLogged && <Navigate to='/' replace />}
    </section>
  )
}

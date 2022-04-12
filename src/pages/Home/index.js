import React from 'react'
import { Navigate } from 'react-router-dom'
import { Todos } from '../../components/Todos'
import useUser from '../../hooks/useUser'

export const Home = () => {
  const { isLogged } = useUser()

  return (
    <section style={{ minHeight: `calc(${window.innerHeight}px - var(--header-height) - var(--addTodo-height))` }}>
      {isLogged && <Todos />}
      {!isLogged && <Navigate to='/login' replace />}
    </section>
  )
}

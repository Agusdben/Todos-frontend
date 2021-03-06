import React from 'react'
import { Navigate } from 'react-router-dom'
import { Todos } from '../../components/Todos'
import useUser from '../../hooks/useUser'

export const Home = () => {
  const { isLogged } = useUser()

  return (
    <section>
      {isLogged && <Todos />}
      {!isLogged && <Navigate to='/login' replace />}
    </section>
  )
}

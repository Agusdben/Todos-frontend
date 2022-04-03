import React from 'react'
import { Navigate } from 'react-router-dom'
import { Todos } from '../../components/Todos'
import useUser from '../../hooks/useUser'

export const Home = () => {
  const { isLogged, logout } = useUser()

  return (
    <>
      {isLogged &&
        <>
          <Todos />
          <button onClick={logout}>logout</button>
        </>}
      {!isLogged && <Navigate to='/login' replace />}
    </>
  )
}

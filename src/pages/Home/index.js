import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Todos } from '../../components/Todos'
import useUser from '../../hooks/useUser'

export const Home = () => {
  const { isLogged, logout } = useUser()
  const navigate = useNavigate()

  return (
    <>
      {isLogged &&
        <>
          <Todos />
          <button onClick={logout}>logout</button>
        </>}
      {!isLogged && navigate('/login')}
    </>
  )
}

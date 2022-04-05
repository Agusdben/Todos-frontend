import React from 'react'
import useUser from '../../hooks/useUser'

import './Header.css'

export const Header = () => {
  const { isLogged, logout } = useUser()

  return (
    <header className='header'>
      <div className=''>What to do</div>
      {isLogged && <button onClick={logout}>logout</button>}

    </header>
  )
}

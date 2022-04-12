import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import useUser from '../../hooks/useUser'

import './Header.css'
import { UserControlls } from '../UserControlls'

export const Header = () => {
  const { isLogged } = useUser()
  return (
    <header className='header'>
      <h1 className='header__title'>What to do</h1>
      {isLogged && <UserControlls />}
      {!isLogged && <Link to='login'><span>Login</span><FontAwesomeIcon className='header__icon' icon={faArrowRightToBracket} /></Link>}
    </header>
  )
}

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faSun, faMoon, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import useUser from '../../hooks/useUser'

import './UserControlls.css'

export const UserControlls = () => {
  const { user, darkMode, setDarkMode, logout } = useUser()
  const [checked, setCheked] = useState(darkMode)
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleToggleMenu = (e) => {
    e.preventDefault()
    setToggleMenu(!toggleMenu)
  }

  const handleCheckced = () => {
    setCheked(!checked)
    setDarkMode(!checked)
    window.localStorage.setItem('isDarkMode', String(!checked))
  }
  return (
    <nav className='user-controlls'>
      <p className='user-controlls__text' onClick={handleToggleMenu}>
        <span>{user.username}</span>
        <FontAwesomeIcon
          icon={faChevronRight}
          style={
            {
              transform: toggleMenu ? 'rotate(90deg)' : 'rotate(0deg)',
              transition: 'transform 200ms linear'
            }
          }
        />
      </p>
      <ul className='user-controlls__list' style={{ top: toggleMenu ? '100%' : '-150%' }}>
        <li className='user-controlls__item'>
          <button className={darkMode ? ' user-controlls__btn user-controlls__btn--dark' : 'user-controlls__btn user-controlls__btn--light'} onClick={handleCheckced}>
            {darkMode && <FontAwesomeIcon icon={faSun} />}
            {!darkMode && <FontAwesomeIcon icon={faMoon} />}
          </button>
          {/* <input id='darkmode' className='user-controlls__checkbox' type='checkbox' checked={checked} onChange={handleCheckced} /> */}
        </li>
        <li className='user-controlls__item'><button className='user-controlls__logout' onClick={logout}><span>Logout</span><FontAwesomeIcon icon={faArrowRightFromBracket} /></button></li>
      </ul>
    </nav>
  )
}

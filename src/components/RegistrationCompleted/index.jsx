import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import './RegistrationCompleted.css'
export const RegistrationCompleted = () => {
  return (
    <section className='registration-completed'>
      <FontAwesomeIcon className='registration-completed__icon' icon={faCheck} />
      <h2 className='registration-completed__title'>Registration completed successfully</h2>
      <Link className='registration-completed__link' to='/login'>Go to login</Link>
    </section>
  )
}

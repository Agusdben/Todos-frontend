import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Modal.css'

export const Modal = ({ children, modalClose, icon }) => {
  const handleCloseModal = () => {
    modalClose()
  }
  return (
    <div className='modal'>
      <div className='modal__close' onClick={handleCloseModal} />
      <section className='modal__container'>
        <header className='modal__header'>
          <div className='modal__icon'>
            <FontAwesomeIcon icon={icon} />
          </div>
        </header>
        {children}
      </section>
    </div>
  )
}

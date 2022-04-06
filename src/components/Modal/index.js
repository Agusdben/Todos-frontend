import React from 'react'
import './Modal.css'

export const Modal = ({ children, modalClose }) => {
  const handleCloseModal = () => {
    modalClose()
  }
  return (
    <div className='modal'>
      <div className='modal__close' onClick={handleCloseModal} />
      <section className='modal__container'>
        {children}
      </section>
    </div>
  )
}

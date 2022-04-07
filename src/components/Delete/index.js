import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import './Delete.css'

export const Delete = ({ todo, handleConfirm, handleCancel }) => {
  return (
    <section className='delete'>
      <header className='delete__header'>
        <div className='delete__icon'>
          <FontAwesomeIcon icon={faTrashCan} />
        </div>
      </header>
      <article className='delete__container'>
        <h4 className='delete__title'>You are about to delete a todo</h4>
        <p className='delete__description'>"{todo.description}"</p>
      </article>
      <footer className='delete__footer'>
        <button onClick={handleCancel}>Cancel</button>
        <button className='delete__delete' onClick={handleConfirm}>Delete</button>
      </footer>
    </section>
  )
}

import React from 'react'
import { Loading } from '../Loading'

import './Delete.css'

export const TodoDelete = ({ todo, loading, handleConfirm, handleCancel }) => {
  return (
    <section className='delete'>
      <article className='delete__container'>
        <h4 className='delete__title'>You are about to delete a todo</h4>
        <p className='delete__description'>"{todo.description}"</p>
      </article>
      <footer className='delete__footer'>
        <button onClick={handleCancel}>Cancel</button>
        <button className='delete__delete' onClick={handleConfirm}>
          {loading && <Loading />}
          {!loading && <span>Delete</span>}
        </button>
      </footer>
    </section>
  )
}

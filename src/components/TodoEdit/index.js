import React from 'react'
import { TodoForm } from '../TodoForm'

import './TodoEdit.css'

export const TodoEdit = ({ handleCancel, todo, setThisTodo }) => {
  return (
    <section className='edit'>

      <article className='edit__container'>
        <TodoForm method='put' handleCancel={handleCancel} todo={todo} setThisTodo={setThisTodo} />
      </article>
    </section>
  )
}

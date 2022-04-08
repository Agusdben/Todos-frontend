import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import './AddTodo.css'
import { Modal } from '../Modal'
import { TodoForm } from '../TodoForm'

export const AddTodo = () => {
  const [addingTodo, setAddingTodo] = useState(false)

  const handleAddingTodo = () => {
    setAddingTodo(!addingTodo)
  }

  return (
    <section className='add-todo'>
      <button className='add-todo__add' onClick={handleAddingTodo}><FontAwesomeIcon icon={faPlus} /></button>
      {addingTodo &&
        <Modal modalClose={setAddingTodo} icon={faPlus}>
          <TodoForm method='post' handleCancel={handleAddingTodo} />
        </Modal>}
    </section>
  )
}

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import useUser from '../../hooks/useUser'
import todosServices from '../../services/todo'

import './MoreOptions.css'
import { Modal } from '../Modal'

export const MoreOptions = ({ todo }) => {
  const { todos, setTodos, token } = useUser()
  const [isDeleting, setIsDeleting] = useState(false)
  const handleIsDelete = () => {
    setIsDeleting(!isDeleting)
  }
  const handleDelete = async () => {
    try {
      await todosServices.deleteTodo(todo.id, token)
      const newTodos = todos.filter(eachTodo => eachTodo.id !== todo.id)
      setTodos(newTodos)
      setIsDeleting(!isDeleting)
      window.localStorage.setItem('storedTodos', JSON.stringify(newTodos))
    } catch (e) { console.log(e) }
  }
  return (
    <>
      <div className='more-options'>
        <button className='more-options__button' onClick={handleIsDelete}><FontAwesomeIcon icon={faTrash} /></button>
        <button className='more-options__button'><FontAwesomeIcon icon={faPenToSquare} /></button>
        {isDeleting &&
          <Modal modalClose={setIsDeleting}>
            <p>Delete {todo.description}?</p>
            <div>
              <button onClick={handleIsDelete}>No</button>
              <button onClick={handleDelete}>Yes</button>
            </div>
          </Modal>}
      </div>
    </>
  )
}

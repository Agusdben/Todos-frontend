import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import useUser from '../../hooks/useUser'
import todosServices from '../../services/todo'

import { Modal } from '../Modal'
import { TodoDelete } from '../TodoDelete'
import { TodoEdit } from '../TodoEdit'

import './MoreOptions.css'

export const MoreOptions = ({ todo, setThisTodo }) => {
  const { todos, setTodos, token } = useUser()
  const [isDeleting, setIsDeleting] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  const handleIsDeleting = () => {
    setIsDeleting(!isDeleting)
  }

  const handleIsEditing = () => {
    setIsEditing(!isEditing)
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
    <div className='more-options'>
      <button className='more-options__button' onClick={handleIsDeleting}><FontAwesomeIcon icon={faTrash} /></button>
      <button className='more-options__button' onClick={handleIsEditing}><FontAwesomeIcon icon={faPenToSquare} /></button>
      {isDeleting &&
        <Modal modalClose={setIsDeleting} icon={faTrash}>
          <TodoDelete
            todo={todo}
            handleConfirm={handleDelete}
            handleCancel={handleIsDeleting}
          />
        </Modal>}
      {isEditing &&
        <Modal modalClose={setIsEditing} icon={faPenToSquare}>
          <TodoEdit
            todo={todo}
            handleCancel={handleIsEditing}
            setThisTodo={setThisTodo}
          />
        </Modal>}
    </div>
  )
}

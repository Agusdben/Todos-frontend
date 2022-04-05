import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import useUser from '../../hooks/useUser'
import todosServices from '../../services/todo'

import './Todo.css'

export const Todo = ({ todo }) => {
  const { todos, setTodos, token } = useUser()
  const [checked, setChecked] = useState(todo.done)
  const [isDeleting, setIsDeleting] = useState(false)

  const handleCheck = async () => {
    try {
      const updatedTodo = {
        ...todo,
        done: !checked,
        todoID: todo.id
      }

      await todosServices.updateTodo(updatedTodo, token)
      setChecked(!checked)

      // find todo updated and put the updatedTodo, keep the order
      const updatedTodoIndex = todos.indexOf(todo)
      todos[updatedTodoIndex] = updatedTodo

      window.localStorage.setItem('storedTodos', JSON.stringify(todos))
      setTodos(todos)
    } catch (e) { console.log(e) }
  }

  const handleDelete = async () => {
    try {
      await todosServices.deleteTodo(todo.id, token)
      const newTodos = todos.filter(eachTodo => eachTodo.id !== todo.id)
      setTodos(newTodos)
      window.localStorage.setItem('storedTodos', JSON.stringify(newTodos))
    } catch (e) { console.log(e) }
  }
  const handleIsDelete = () => {
    setIsDeleting(!isDeleting)
  }
  return (
    <article className={checked ? 'todo todo--checked' : 'todo'}>
      <div className='todo__controlls'>
        <button className='todo__button' onClick={handleIsDelete}><FontAwesomeIcon icon={faTrash} /></button>
      </div>
      <p className='todo__description'>{todo.description}</p>
      <form className='todo__form'>
        <input className='todo__done' type='checkbox' checked={checked} onChange={handleCheck} />
      </form>
      <dialog className='todo__modal' open={isDeleting}>
        <p>Delete {todo.description}?</p>
        <div>
          <button onClick={handleIsDelete}>No</button>
          <button onClick={handleDelete}>Yes</button>
        </div>
      </dialog>
    </article>
  )
}

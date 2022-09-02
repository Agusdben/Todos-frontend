import React, { useState } from 'react'
import useUser from '../../hooks/useUser'
import todosServices from '../../services/todo'
import { Loading } from '../Loading'

import './TodoForm.css'

export const TodoForm = ({ method, handleCancel, todo = null, setThisTodo = null }) => {
  const { user, setTodos, todos, token, logout } = useUser()
  const [description, setDescription] = useState(todo ? todo.description : '')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const handleDescription = ({ target }) => {
    setDescription(target.value)
  }

  const submitTodoForm = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      if (method === 'post') {
        const newTodo = {
          description,
          username: user.username
        }
        const addedTodo = await todosServices.postTodo(newTodo, token)
        setTodos(todos.concat(addedTodo))
        window.localStorage.setItem('storedTodos', JSON.stringify(todos.concat(addedTodo)))
      }

      if (method === 'put') {
        const newTodo = {
          todoID: todo.id,
          description,
          done: todo.done
        }
        const updatedTodo = await todosServices.updateTodo(newTodo, token)
        const updatedTodoIndex = todos.indexOf(todo)
        todos[updatedTodoIndex] = updatedTodo
        window.localStorage.setItem('storedTodos', JSON.stringify(todos))
        setTodos(todos)
        setThisTodo(updatedTodo)
      }

      // close modal
      handleCancel()
    } catch (e) {
      if (e.response.status === 401) { // token expired
        logout()
      }
      if (e.response.status === 400) {
        setMessage('Please type a todo')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className='todo-form' onSubmit={submitTodoForm}>
      <input
        autoFocus
        className='todo-form__input'
        type='text' value={description}
        onChange={handleDescription}
        placeholder={todo ? todo.description : 'Buy milk...'}
      />
      {message && <strong style={{ textAlign: 'center', width: '100%' }}>{message}</strong>}
      <div className='todo-form__controlls'>
        <button className='todo-form__confirm'>
          {loading && <Loading />}
          {!loading && <span>Confirm</span>}
        </button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </form>
  )
}

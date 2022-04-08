import React, { useState } from 'react'
import useUser from '../../hooks/useUser'
import todosServices from '../../services/todo'

import './TodoForm.css'

export const TodoForm = ({ method, handleCancel, todo = null, setThisTodo = null }) => {
  const { user, setTodos, todos } = useUser()
  const [description, setDescription] = useState('')
  const [important, setImportant] = useState(false)

  const handleDescription = ({ target }) => {
    setDescription(target.value)
  }

  const handleImportant = () => {
    setImportant(!important)
  }

  const submitTodoForm = async (e) => {
    e.preventDefault()
    try {
      if (!description) return

      if (method === 'post') {
        const newTodo = {
          description,
          important,
          username: user.username
        }
        const addedTodo = await todosServices.postTodo(newTodo, user.token)
        setTodos(todos.concat(addedTodo))
        window.localStorage.setItem('storedTodos', JSON.stringify(todos.concat(addedTodo)))
      }

      if (method === 'put') {
        const newTodo = {
          todoID: todo.id,
          description,
          important,
          done: todo.done
        }
        const updatedTodo = await todosServices.updateTodo(newTodo, user.token)
        const updatedTodoIndex = todos.indexOf(todo)
        todos[updatedTodoIndex] = updatedTodo
        window.localStorage.setItem('storedTodos', JSON.stringify(todos))
        setTodos(todos)
        setThisTodo(updatedTodo)
      }

      // close modal
      handleCancel()
    } catch (e) { console.log(e) }
  }

  return (
    <form className='todo-form' onSubmit={submitTodoForm}>
      <input
        className='todo-form__input'
        type='text' value={description}
        onChange={handleDescription}
        placeholder={todo ? todo.description : 'Buy milk...'}
      />
      <div className='form__group'>
        <label className='form__label' htmlFor='important'>Important</label>
        <input
          className='todo-form__input'
          id='important'
          type='checkbox' checked={important}
          onChange={handleImportant}
        />
      </div>
      <div className='todo-form__controlls'>
        <button onClick={handleCancel}>Cancel</button>
        <button className='todo-form__confirm'>Confirm</button>
      </div>
    </form>
  )
}

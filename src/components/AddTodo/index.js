import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import useUser from '../../hooks/useUser'
import todosServices from '../../services/todo'
export const AddTodo = () => {
  const [todo, setTodo] = useState('')
  const [important, setImportant] = useState(false)
  const { user, todos, setTodos } = useUser()

  const handleTodo = ({ target }) => {
    setTodo(target.value)
  }

  const handleCheck = () => {
    setImportant(!important)
  }

  const handleSubmitTodo = async (e) => {
    e.preventDefault()
    try {
      const newTodo = {
        description: todo,
        important,
        username: user.username
      }
      const addedTodo = await todosServices.postTodo(newTodo, user.token)
      setTodos(todos.concat(addedTodo))
      window.localStorage.setItem('storedTodos', JSON.stringify(todos.concat(addedTodo)))
      setTodo('')
    } catch (e) { console.log(e) }
  }

  return (
    <section>
      <form onSubmit={handleSubmitTodo}>
        <input type='text' value={todo} onChange={handleTodo} placeholder='Something to do...' />
        <div>
          <label htmlFor='important'>Important</label>
          <input type='checkbox' checked={important} onChange={handleCheck} id='important' />
        </div>
        <button><FontAwesomeIcon icon={faPlus} /></button>
      </form>
    </section>
  )
}

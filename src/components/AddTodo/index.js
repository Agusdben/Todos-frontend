import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faClose } from '@fortawesome/free-solid-svg-icons'
import useUser from '../../hooks/useUser'
import todosServices from '../../services/todo'

import './AddTodo.css'

export const AddTodo = () => {
  const [todo, setTodo] = useState('')
  const [important, setImportant] = useState(false)
  const [addingTodo, setAddingTodo] = useState(false)
  const { user, todos, setTodos } = useUser()

  const handleTodo = ({ target }) => {
    setTodo(target.value)
  }

  const handleCheck = () => {
    setImportant(!important)
  }

  const handleAddingTodo = () => {
    setAddingTodo(!addingTodo)
  }

  const handleSubmitTodo = async (e) => {
    e.preventDefault()
    try {
      if (!todo) return
      const newTodo = {
        description: todo,
        important,
        username: user.username
      }
      const addedTodo = await todosServices.postTodo(newTodo, user.token)
      setTodos(todos.concat(addedTodo))
      window.localStorage.setItem('storedTodos', JSON.stringify(todos.concat(addedTodo)))
      setTodo('')
      handleAddingTodo()
    } catch (e) { console.log(e) }
  }

  return (
    <section className='add-todo'>
      <button className='add-todo__add' onClick={handleAddingTodo}><FontAwesomeIcon icon={faPlus} /></button>
      <div className={addingTodo ? 'add-todo__modal add-todo__modal--open' : 'add-todo__modal'} style={{ height: `${window.innerHeight}px` }}>
        <form className='add-todo__form' onSubmit={handleSubmitTodo}>
          <input className='add-todo__input' type='text' value={todo} onChange={handleTodo} placeholder='Something to do...' />
          <div className='add-todo__group'>
            <label htmlFor='important'>Important</label>
            <input type='checkbox' checked={important} onChange={handleCheck} id='important' />
          </div>
          <button className='add-todo__button add-todo__close' onClick={handleAddingTodo}><FontAwesomeIcon icon={faClose} /></button>
          <button className='add-todo__button'>ADD!</button>
        </form>
      </div>
    </section>
  )
}

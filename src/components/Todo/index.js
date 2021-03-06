import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faClose } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import useUser from '../../hooks/useUser'
import todosServices from '../../services/todo'
import { MoreOptions } from '../MoreOptions'

import './Todo.css'

export const Todo = ({ todo }) => {
  const { todos, setTodos, token } = useUser()
  const [thisTodo, setThisTodo] = useState(todo)
  const [checked, setChecked] = useState(todo.done)
  const [moreOptions, setMoreOptions] = useState(false)

  const handleCheck = async () => {
    try {
      const updatedTodo = {
        ...thisTodo,
        done: !checked,
        todoID: thisTodo.id
      }

      setChecked(!checked)
      await todosServices.updateTodo(updatedTodo, token)

      // find todo updated and put the updatedTodo, keep the order
      const updatedTodoIndex = todos.indexOf(thisTodo)
      todos[updatedTodoIndex] = updatedTodo

      window.localStorage.setItem('storedTodos', JSON.stringify(todos))
      setTodos(todos)
      setThisTodo(updatedTodo)
    } catch (e) { console.log(e); setChecked(!checked) }
  }

  const handleMoreOptions = () => {
    setMoreOptions(!moreOptions)
  }

  return (
    <article className={checked ? 'todo todo--checked' : 'todo'}>
      <form className='todo__form'>
        <input className='todo__done' type='checkbox' checked={checked} onChange={handleCheck} />
      </form>
      <p className='todo__description'>{thisTodo.description}</p>
      <div className={moreOptions ? 'todo__controlls todo__controlls--open' : 'todo__controlls'}>
        <button onClick={handleMoreOptions}><FontAwesomeIcon icon={!moreOptions ? faEllipsisVertical : faClose} /></button>
        <MoreOptions todo={thisTodo} setThisTodo={setThisTodo} />
        {/* {moreOptions && <MoreOptions todo={thisTodo} setThisTodo={setThisTodo} />} */}
      </div>
    </article>
  )
}

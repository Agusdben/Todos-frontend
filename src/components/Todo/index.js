import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faClose } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import useUser from '../../hooks/useUser'
import todosServices from '../../services/todo'
import { MoreOptions } from '../MoreOptions'

import './Todo.css'

export const Todo = ({ todo }) => {
  const { todos, setTodos, token } = useUser()
  const [checked, setChecked] = useState(todo.done)
  const [moreOptions, setMoreOptions] = useState(false)

  const handleCheck = async () => {
    try {
      const updatedTodo = {
        ...todo,
        done: !checked,
        todoID: todo.id
      }

      setChecked(!checked)
      await todosServices.updateTodo(updatedTodo, token)

      // find todo updated and put the updatedTodo, keep the order
      const updatedTodoIndex = todos.indexOf(todo)
      todos[updatedTodoIndex] = updatedTodo

      window.localStorage.setItem('storedTodos', JSON.stringify(todos))
      setTodos(todos)
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
      <p className='todo__description'>{todo.description}</p>
      <div className='todo__controlls'>
        <button onClick={handleMoreOptions}><FontAwesomeIcon icon={!moreOptions ? faEllipsisVertical : faClose} /></button>
        {moreOptions && <MoreOptions todo={todo} />}
      </div>
    </article>
  )
}

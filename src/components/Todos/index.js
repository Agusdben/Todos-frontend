import React from 'react'
import useUser from '../../hooks/useUser'
import { Todo } from '../Todo'

import './Todos.css'
export const Todos = () => {
  const { todos } = useUser()
  return (
    <>
      {todos &&
        <section
          className='todos'
          style={
            {
              height: `calc(${window.innerHeight}px - var(--addTodo-height) - var(--header-height))`
            }
          }
        >
          {
            todos.map(todo =>
              <Todo key={todo.id} todo={todo} />
            )
          }
        </section>}
    </>
  )
}

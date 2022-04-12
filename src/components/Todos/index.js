import React from 'react'
import useUser from '../../hooks/useUser'
import { Todo } from '../Todo'

import './Todos.css'
export const Todos = () => {
  const { todos } = useUser()
  return (
    <>
      {todos &&
        <section className='todos'>
          {
            todos.map(todo =>
              <Todo key={todo.id} todo={todo} />
            )
          }
        </section>}
      {!todos &&
        <section>
          <h2>No todos yet</h2>
        </section>}
    </>
  )
}

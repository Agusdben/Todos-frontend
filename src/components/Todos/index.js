import React from 'react'
import useUser from '../../hooks/useUser'
import { Todo } from '../Todo'

export const Todos = () => {
  const { todos } = useUser()
  return (
    <>
      {todos &&
        <section>
          {todos.map(todo =>
            <Todo key={todo.id} todo={todo} />
          )}
        </section>}
    </>
  )
}

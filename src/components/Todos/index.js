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
            <article key={todo.id}>
              <Todo todo={todo} />
            </article>
          )}
        </section>}
    </>
  )
}

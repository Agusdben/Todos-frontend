import React from 'react'
import useUser from '../../hooks/useUser'
import { Loading } from '../Loading'
import { Todo } from '../Todo'

import './Todos.css'
export const Todos = () => {
  const { todos, loading } = useUser()
  return (
    <section className='todos' style={{ minHeight: `calc(${window.innerHeight}px - var(--header-height) - var(--addTodo-height))` }}>
      {todos &&
        <>
          {
            todos.map(todo =>
              <Todo key={todo.id} todo={todo} />
            )
          }
        </>}
      {!loading &&
        <>
          {todos.length === 0 &&
            <h2 className='todos__notodos grid-center'>No todos yet</h2>}
        </>}
      {loading &&
        <Loading />}
    </section>
  )
}

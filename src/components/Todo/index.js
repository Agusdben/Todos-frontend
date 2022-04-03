import React, { useState } from 'react'

export const Todo = ({ todo }) => {
  const [checked, setChecked] = useState(todo.done)
  const handleCheck = () => {
    console.log('change')
  }
  console.log(todo)
  return (
    <>
      <input type='checkbox' checked={checked} onChange={handleCheck} />
      <p>{todo.description}</p>
      <div className='todo__controlls'>
        <button>❌</button>
        <button>E</button>
      </div>
    </>
  )
}

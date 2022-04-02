import React, { createContext, useState, useEffect } from 'react'
import todosServices from '../services/todo'

const userContext = createContext(null)

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => JSON.parse(window.localStorage.getItem('storedUser')))
  const [todos, setTodos] = useState(null)
  const [token, setToken] = useState(null)

  useEffect(() => {
    const getTodos = async () => {
      const todos = await todosServices.getTodosXuser(user._id, user.token)
      window.localStorage.setItem('storedTodos', JSON.stringify(todos))
      setTodos(todos)
    }

    if (user) {
      getTodos()
      setToken(user.token)
    }
  }, [user])

  return (
    <userContext.Provider value={{
      user,
      todos,
      token,
      setUser,
      setTodos,
      setToken
    }}
    >
      {children}
    </userContext.Provider>
  )
}

export default userContext

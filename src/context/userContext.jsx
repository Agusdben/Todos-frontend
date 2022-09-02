import React, { createContext, useState, useEffect } from 'react'
import todosServices from '../services/todo'
import { themes, setTheme } from '../helpers/theme'
const userContext = createContext(null)

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => JSON.parse(window.localStorage.getItem('storedUser')))
  const [darkMode, setDarkMode] = useState(() => Boolean(JSON.parse(window.localStorage.getItem('isDarkMode'))))
  const [todos, setTodos] = useState(null)
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getTodos = async () => {
      try {
        const todos = await todosServices.getTodosXuser(user.id, user.token)
        window.localStorage.setItem('storedTodos', JSON.stringify(todos))
        setTodos(todos)
        setLoading(false)
      } catch (e) {
        if (e.response.status === 401) {
          setUser(null)
          setTodos(null)
          setToken(null)
          window.localStorage.removeItem('storedTodos')
          window.localStorage.removeItem('storedUser')
        }
      }
    }

    if (user) {
      setLoading(true)
      getTodos()
      setToken(user.token)
    }
  }, [user])

  useEffect(() => {
    if (darkMode) { setTheme(themes.dark) }
    if (!darkMode) {
      setTheme(themes.white)
      window.localStorage.setItem('isDarkMode', String(darkMode))
    }
  }, [darkMode])

  return (
    <userContext.Provider value={{
      user,
      darkMode,
      todos,
      token,
      loading,
      setUser,
      setDarkMode,
      setTodos,
      setToken
    }}
    >
      {children}
    </userContext.Provider>
  )
}

export default userContext

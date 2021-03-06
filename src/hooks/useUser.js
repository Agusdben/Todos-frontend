import { useCallback, useContext, useState } from 'react'
import userContext from '../context/userContext'
import userServices from '../services/user'

const useUser = () => {
  const {
    user,
    darkMode,
    todos,
    token,
    loading,
    setUser,
    setDarkMode,
    setTodos,
    setToken
  } = useContext(userContext)

  const [state, setState] = useState({ loading: false, error: false })

  const login = useCallback(({ username, password }) => {
    const loginService = async () => {
      try {
        const user = await userServices.login({ username, password })
        window.localStorage.setItem('storedUser', JSON.stringify(user))
        setUser(user)
        setState({ loading: false, error: false })
      } catch (e) {
        setState({ loading: false, error: true })
        window.localStorage.removeItem('storedUser') // fijarse si esta linea de verdad necesita existir
        console.log(e)
      }
    }
    setState({ loading: true, error: false })
    loginService()
  }, [setUser])

  const logout = useCallback(() => {
    window.localStorage.removeItem('storedUser')
    window.localStorage.removeItem('storedTodos')
    setUser(null)
    setTodos(null)
    setToken(null)
  }, [setUser, setTodos, setToken])

  return {
    user,
    darkMode,
    todos,
    token,
    loading,
    setUser,
    setDarkMode,
    setTodos,
    isLogged: Boolean(user),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    login,
    logout
  }
}

export default useUser

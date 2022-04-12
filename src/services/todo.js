import axios from 'axios'
import { API_URL } from '../helpers/api'

const getTodosXuser = async (userID, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const { data } = await axios.get(`${API_URL}/todos/${userID}`, config)
  return data
}

const postTodo = async (todo, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const { data } = await axios.post(`${API_URL}/todos`, todo, config)
  return data
}

const updateTodo = async (todo, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const { data } = await axios.put(`${API_URL}/todos`, todo, config)
  return data
}

const deleteTodo = async (todoID, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const { data } = await axios.delete(`${API_URL}/todos/${todoID}`, config)
  return data
}
const exports = { getTodosXuser, postTodo, updateTodo, deleteTodo }

export default exports

import axios from 'axios'
import { API_URL } from '../helpers/api'

const login = async (credentials) => {
  const { data } = await axios.post(`${API_URL}/login`, credentials)
  return data
}

const signin = async (user) => {
  const { data } = await axios.post(`${API_URL}/signin`, user)
  return data
}
const exports = { login, signin }

export default exports

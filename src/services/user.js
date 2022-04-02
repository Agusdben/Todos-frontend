import axios from 'axios'
import { API_URL } from '../helpers/api'

const login = async (credentials) => {
  const { data } = await axios.post(`${API_URL}/login`, credentials)
  console.log({ credentials, data })
  return data
}

const exports = { login }

export default exports

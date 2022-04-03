import axios from 'axios'
import { API_URL } from '../helpers/api'

const getTodosXuser = async (userID, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  console.log({ config })
  const { data } = await axios.get(`${API_URL}/todos/${userID}`, config)
  return data
}

const exports = { getTodosXuser }

export default exports

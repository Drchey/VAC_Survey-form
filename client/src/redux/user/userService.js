import axios from 'axios'

const API_URL = '/api/users/'

/** Register Users */
const createUser = async (userData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.post(API_URL, userData, config)
  return response.data
}

const deleteUser = async (userId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.delete(API_URL + userId, config)
  return response.data
}

const resetPassword = async (userId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.put(API_URL + 'reset/' + userId, config)
  return response.data
}

const changeRole = async (userId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.put(API_URL + userId, config)
  return response.data
}
/** Fetch Users */
const fetchUsers = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL, config)
  return response.data
}

const userService = {
  createUser,
  fetchUsers,
  changeRole,
  deleteUser,
  resetPassword,
}

export default userService

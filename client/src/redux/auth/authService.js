import axios from 'axios'

const API_URL = '/api/auth/'

/** Login Users */
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

/** Change Password */

const changePassword = async (userData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.post(
    'http://localhost:1337/api/auth/password_secure',
    userData,
    config,
  )
  return response.data
}

/** Register Users */
const createUser = async (userData) => {
  const response = await axios.post('http://localhost:1337/api/user/', userData)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

/** Logout User Data */
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  logout,
  login,
  createUser,
  changePassword,
}

export default authService

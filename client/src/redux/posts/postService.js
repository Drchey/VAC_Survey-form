import axios from 'axios'

const API_URL = '/api/posts/'

// Create Goal
const createPost = async (postData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.post(API_URL, postData, config)
  return response.data
}

// get user Goals
const getPosts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL, config)
  return response.data
}

// delete user goals
const getPost = async (postId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL + postId, config)
  return response.data
}

// delete user goals
const deletePost = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.delete(API_URL + goalId, config)
  return response.data
}
const postService = {
  createPost,
  getPosts,
  getPost,
  deletePost,
}

export default postService

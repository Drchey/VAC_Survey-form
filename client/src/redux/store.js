import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../redux/auth/authSlice'
import userReducer from '../redux/user/userSlice'
import postReducer from '../redux/posts/postSlice'

export default configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
    posts: postReducer,
  },
})

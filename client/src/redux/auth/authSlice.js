import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'

const user = JSON.parse(localStorage.getItem('user'))
const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  message: '',
}

/** Register User */

/** Login User */

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    return await authService.login(user)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const changePassword = createAsyncThunk(
  'auth/change_password',
  async (userData, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token
    await authService.changePassword(userData, token)
  },
)

export const createUser = createAsyncThunk('auth/create_users', async () => {
  await authService.createUser()
})

export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout()
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false
      state.message = ''
      state.isSuccess = false
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.isLoading = true
        state.message = action.payload
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.isError = true
        state.user = null
        state.message = action.payload
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.isSuccess = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null
      })
      .addCase(logout.rejected, (state, action) => {
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = authSlice.actions
export default authSlice.reducer

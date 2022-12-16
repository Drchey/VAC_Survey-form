import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userService from './userService'

const initialState = {
  users: [],
  isError: false,
  isSuccess: false,
  message: '',
}

export const createUser = createAsyncThunk(
  'user/create_users',
  async (userData, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token
    await userService.createUser(userData, token)
  },
)

export const fetchUsers = createAsyncThunk(
  'user/fetch_users',
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token
    return await userService.fetchUsers(token)
  },
)

export const resetPassword = createAsyncThunk(
  'user/reset_password',
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token
    return await userService.resetPassword(token)
  },
)

export const deleteUser = createAsyncThunk(
  'user/delete_user',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await userService.deleteUser(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const changeRole = createAsyncThunk(
  'user/change_roles',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await userService.changeRole(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false
      state.isSuccess = false
      state.message = ''
      state.users = []
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.fulfilled, (state, action) => {
        state.isSuccess = true
        state.users.push(action.payload)
      })
      .addCase(createUser.rejected, (state, action) => {
        state.message = action.payload
        state.isError = true
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload
        state.isError = false
        state.isSuccess = true
      })
      .addCase(fetchUsers.pending, (state, action) => {
        state.users = action.payload
        state.isError = false
        state.isSuccess = true
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.users = null
        state.isError = true
        state.message = action.payload
      })
      .addCase(changeRole.rejected, (state, action) => {
        state.isError = true
        state.message = action.payload
      })
      .addCase(changeRole.fulfilled, (state, action) => {
        state.isError = true
        state.users = action.payload
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isSuccess = true
        state.users = state.users.filter(
          (user) => user._id !== action.payload.id,
        )
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isError = true
        state.message = action.payload
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.isSuccess = true
        state.users = action.payload
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = userSlice.actions
export default userSlice.reducer

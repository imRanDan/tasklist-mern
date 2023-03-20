import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
  tasks: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: ''
}

// Creates new task

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    reset: (state) => initialState
  }
})

export const {reset} = taskSlice.actions
export default taskSlice.reducer
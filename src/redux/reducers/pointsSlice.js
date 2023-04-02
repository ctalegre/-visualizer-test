import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import firebaseApi from '../../firebase/firestore'

const initialState = {
  isLoading: false,
  error: null,
  pointList: [],
}

export const getPointsFromApi = createAsyncThunk('getPointsFromApi', async (arg1, thunkAPI) => {
  const pointList = await firebaseApi.points.getAll()
  return pointList
})

export const pointsSlice = createSlice({
  name: 'pointList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPointsFromApi.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(getPointsFromApi.fulfilled, (state, action) => {
        state.isLoading = false
        state.pointList = action.payload
      })
      .addCase(getPointsFromApi.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
  },
})

export default pointsSlice.reducer

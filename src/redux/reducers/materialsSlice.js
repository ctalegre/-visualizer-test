import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import firebaseApi from '../../firebase/firestore'

const initialState = {
  isLoading: false,
  error: null,
  materialList: [],
  materialAppliedMap: {},
}

export const getMaterialsFromApi = createAsyncThunk('getMaterialsFromApi', async (pointId, thunkAPI) => {
  const currentMaterialList = await firebaseApi.materials.getByPointId(pointId)
  return currentMaterialList
})

export const materialsSlice = createSlice({
  name: 'materialList',
  initialState,
  reducers: {
    applyMaterialByPointId: (state, action) => {
      const { pointId, ...material } = action.payload

      if (pointId) state.materialAppliedMap[pointId] = material
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMaterialsFromApi.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(getMaterialsFromApi.fulfilled, (state, action) => {
        state.isLoading = false
        state.materialList = action.payload
      })
      .addCase(getMaterialsFromApi.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
  },
})

export const { applyMaterialByPointId } = materialsSlice.actions

export default materialsSlice.reducer

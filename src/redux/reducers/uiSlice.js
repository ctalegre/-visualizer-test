import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showingInView: 'Points'
}

export const uiSlice = createSlice({
  name: 'pointList',
  initialState,
  reducers: {
    setActiveShowPoints: (state, action) => {
      state.showingInView = 'Points'
    },
    setActiveShowMaterials: (state, action) => {
      state.showingInView = 'Materials'
    },
    setActiveShowBackdrop: (state, action) => {
      state.showingInView = 'Loading'
    }
  },
})

export const { setActiveShowPoints, setActiveShowMaterials, setActiveShowBackdrop } = uiSlice.actions

export default uiSlice.reducer

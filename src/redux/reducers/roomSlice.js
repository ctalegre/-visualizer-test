import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  backgroundImage: 'https://firebasestorage.googleapis.com/v0/b/visualizer-new-devs-test.appspot.com/o/base.jpeg?alt=media&token=358ccdea-3cf9-4751-ae48-4631e4700554',
  roomType: 'kitchen',
  description: 'Kitchen'
}

export const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    setBackgroundImage: (state, action) => {
      state.backgroundImage = action.payload
    },
    setRoom: (state, action) => {
      const { backgroundImage, roomType, description } = action.payload
      state.backgroundImage = backgroundImage
      state.roomType = roomType
      state.description = description
    },
  },
})

export const { setChangeBackgroundImage, setRoom } = roomSlice.actions

export default roomSlice.reducer

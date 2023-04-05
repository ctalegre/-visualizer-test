import { createContext, useReducer } from 'react'

const initialState = {
  backgroundImage:
    'https://firebasestorage.googleapis.com/v0/b/visualizer-new-devs-test.appspot.com/o/base.jpeg?alt=media&token=358ccdea-3cf9-4751-ae48-4631e4700554',
  roomType: 'kitchen',
  description: 'Kitchen',
}

const RoomContext = createContext()

const roomReducer = (state, action) => {
  switch (action.type) {
    case 'SET_BACKGROUND_IMAGE':
      return { ...state, backgroundImage: action.payload }
    case 'SET_ROOM':
      return {
        ...state,
        backgroundImage: action.payload.backgroundImage,
        roomType: action.payload.roomType,
        description: action.payload.description,
      }
    default:
      return state
  }
}

export const RoomProvider = ({ children }) => {
  const [state, dispatch] = useReducer(roomReducer, initialState)

  return (
    <RoomContext.Provider value={{ ...state, dispatch }}>
      {children}
    </RoomContext.Provider>
  )
}

export default RoomContext

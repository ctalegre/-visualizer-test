import { createContext, useReducer } from 'react'
import firebaseApi from '../firebase/firestore'

const initialState = {
  isLoading: false,
  error: null,
  pointList: [],
}

const pointsReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_POINTS_PENDING':
      return { ...state, isLoading: true, error: null }
    case 'FETCH_POINTS_SUCCESS':
      return { ...state, isLoading: false, pointList: action.payload }
    case 'FETCH_POINTS_ERROR':
      return { ...state, isLoading: false, error: action.payload }
    default:
      return state
  }
}

const PointsContext = createContext()

export const PointsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pointsReducer, initialState)

  const getPointsFromApi = async () => {
    try {
      dispatch({ type: 'FETCH_POINTS_PENDING' })
      const pointList = await firebaseApi.points.getAll()
      dispatch({ type: 'FETCH_POINTS_SUCCESS', payload: pointList })
    } catch (error) {
      dispatch({ type: 'FETCH_POINTS_ERROR', payload: error.message })
    }
  }

  return (
    <PointsContext.Provider value={{ ...state, getPointsFromApi }}>
      {children}
    </PointsContext.Provider>
  )
}

export default PointsContext

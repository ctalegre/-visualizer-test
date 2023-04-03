import { combineReducers } from '@reduxjs/toolkit'

import pointsSlice from './pointsSlice'
import materialsSlice from './materialsSlice'
import uiSlice from './uiSlice'
import roomSlice from './roomSlice'

const rootReducer = combineReducers({
  pointsSlice,
  materialsSlice,
  uiSlice,
  roomSlice
})

export default rootReducer

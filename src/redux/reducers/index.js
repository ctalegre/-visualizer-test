import { combineReducers } from '@reduxjs/toolkit'

import pointsSlice from './pointsSlice'
import materialsSlice from './materialsSlice'
import uiSlice from './uiSlice'

const rootReducer = combineReducers({
  pointsSlice,
  materialsSlice,
  uiSlice
})

export default rootReducer

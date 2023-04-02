import { combineReducers } from '@reduxjs/toolkit'

import pointsSlice from './pointsSlice'
import materialsSlice from './materialsSlice'

const rootReducer = combineReducers({
  pointsSlice,
  materialsSlice
})

export default rootReducer

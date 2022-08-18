import { configureStore } from '@reduxjs/toolkit'
import collectionReducer from './collectionSlice'
import photosReducer from './photosSlice'

export default configureStore({
  reducer: {
    collection: collectionReducer,
    photos: photosReducer
  },
})
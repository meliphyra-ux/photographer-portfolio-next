import { configureStore } from '@reduxjs/toolkit'
import collectionReducer from './collectionSlice'
import photosReducer from './photosSlice'

// Importing 2 reducers to manipulate data across my app

export default configureStore({
  reducer: {
    collection: collectionReducer,
    photos: photosReducer
  },
})
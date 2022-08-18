import { createSlice } from "@reduxjs/toolkit";
import { DeletePhoto } from "../../firebase/Firestore";

export const photosSlice = createSlice({
    name: "photos",
    initialState: {
        photos: []
    },
    reducers: {
        updatePhotos: (state, action) => {
            state.photos.push({
                collection: action.payload.data().collection,
                description: action.payload.data().description,
                src: action.payload.data().src,
                id: action.payload.id
            })
            console.log(state.photos[0])
        },
        removePhoto: (state, action) => {
              const photosArray = state.photos
              const deletedPhoto = state.photos.indexOf(action.payload)
              photosArray.splice(deletedPhoto, 1) 
              state.value = photosArray
        }
    }
}) 
export const { updatePhotos } = photosSlice.actions
export default photosSlice.reducer
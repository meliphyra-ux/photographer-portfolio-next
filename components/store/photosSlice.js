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
        },
        removePhoto: (state, action) => {
              const photosArray = state.photos
              const deletedPhoto = state.photos.indexOf(action.payload)
              photosArray.splice(deletedPhoto, 1) 
              state.value = photosArray
              DeletePhoto(action.payload.id, action.payload.collection);
        }
    }
}) 
export const { updatePhotos, removePhoto } = photosSlice.actions
export default photosSlice.reducer
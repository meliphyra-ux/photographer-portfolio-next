import { createSlice, current } from "@reduxjs/toolkit";
import { DeletePhoto } from "../../firebase/Firestore";

// Creating slice in redux for photos
export const photosSlice = createSlice({
  name: "photos",
  initialState: {
    photos: [],
  },
  reducers: {
    //Reducer for adding Photos
    addPhotos: (state, action) => {
      state.photos.push({
        collection: action.payload.data.collection,
        description: action.payload.data.description,
        src: action.payload.data.src,
        id: action.payload.id,
      });
    },
    removePhoto: (state, action) => {
      const deletedPhoto = state.photos.indexOf(action.payload);
      state.photos.splice(deletedPhoto, 1);
      DeletePhoto(action.payload.id, action.payload.collection);
    },
  },
});
export const { addPhotos, removePhoto } = photosSlice.actions;
export default photosSlice.reducer;

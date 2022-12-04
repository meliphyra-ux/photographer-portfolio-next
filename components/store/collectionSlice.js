import { createSlice, current } from "@reduxjs/toolkit";
import { DeleteCollection, DeletePhoto } from "../../firebase/Firestore";

//Creating slice for collections

export const collectionSlice = createSlice({
  name: "collections",
  initialState: {
    //Initialized 2 array: 1 for collection details, 1 for names only
    value: [],
    collectionsList: [],
  },
  reducers: {
    updateCollection: (state, action) => {
      state.value.push(action.payload);
      state.collectionsList.push(action.payload.collectionName);
    },
    removeCollection: (state, action) => {
      const deletedCollectionIndex = state.value.indexOf(action.payload);
      const deletedCollection = state.value.splice(deletedCollectionIndex, 1);
      deletedCollection[0].photoArray.forEach((item) => {
        DeletePhoto(item, deletedCollection[0].collectionName);
      });
      DeleteCollection(action.payload.collectionName);
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateCollection, removeCollection } = collectionSlice.actions;

export default collectionSlice.reducer;

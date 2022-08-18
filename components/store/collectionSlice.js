import { createSlice } from "@reduxjs/toolkit";
import { DeleteCollection, DeletePhoto } from "../../firebase/Firestore";

export const collectionSlice = createSlice({
  name: "collections",
  initialState: {
    value: [],
    collectionsList: [],
  },
  reducers: {
    updateCollection: (state, action) => {
      state.value.push(action.payload);
      state.collectionsList.push(action.payload.collectionName)
    },
    removeCollection: (state, action) => {
      const collectionArray = state.value;
      console.log(collectionArray)
      const deletedCollectionIndex = state.value.indexOf(action.payload);
      let deletedCollection = collectionArray.splice(deletedCollectionIndex, 1);
      deletedCollection[0].photoArray.forEach(item =>{
        DeletePhoto(item)
      })
      state.value = collectionArray;
      DeleteCollection(action.payload.collectionName)
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateCollection, removeCollection } = collectionSlice.actions;

export default collectionSlice.reducer;

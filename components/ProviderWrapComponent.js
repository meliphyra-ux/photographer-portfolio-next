import React, { useEffect } from "react";
// Redux imports
import { addPhoto } from "./store/photosSlice";
import { updateCollection } from "./store/collectionSlice";
import { useDispatch } from "react-redux";
// Firebase imports
import { getCollections, getPhotos } from "../firebase/Firestore";

const ProviderWrapComponent = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getCollections()
      .then((docs) => {
        docs.forEach((doc) => {
          dispatch(updateCollection(doc.data()));
        });
      })
      .catch((e) => {
        console.log(e);
      });
    getPhotos()
      .then((docs) => {
        docs.forEach((doc) => {
          dispatch(addPhoto({ data: doc.data(), id: doc.id }));
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, [dispatch]);
  return <div>{children}</div>;
};

export default ProviderWrapComponent;

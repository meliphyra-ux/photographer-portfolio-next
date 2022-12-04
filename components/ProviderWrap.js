import React, { useEffect } from "react";

import { addPhotos } from "../components/store/photosSlice";
import { updateCollection } from "../components/store/collectionSlice";
import { useDispatch } from "react-redux";

import { GetCollections, GetPhoto } from "../firebase/Firestore";

const ProviderWrap = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetching data
    GetCollections()
      .then((docs) => {
        docs.forEach((doc) => {
          dispatch(updateCollection(doc.data()));
        });
      })
      .catch((e) => {
        console.log(e);
      });
    GetPhoto()
      .then((docs) => {
        docs.forEach((doc) => {
          dispatch(addPhotos({data: doc.data(), id: doc.id}));
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, [dispatch]);
  return <div>{children}</div>;
};

export default ProviderWrap;

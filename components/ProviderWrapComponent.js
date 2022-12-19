import React, { useEffect } from "react";
// Redux imports
import { addPhoto } from "./store/photosSlice";
import { updateCollection } from "./store/collectionSlice";
import { useDispatch } from "react-redux";
// Firebase imports
import { getCollections, getPhotos } from "../firebase/Firestore";

const ProviderWrapComponent = ({ children, response }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(response)
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
  }, [dispatch,response]);
  return <div>{children}</div>;
};

export async function getStaticProps(){
  const response = await getPhotos();
  for(let doc in response){
    console.log(doc)
  }
  
  return {
    props:{
      response
    }
  };
}

export default ProviderWrapComponent;

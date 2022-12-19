import React, { useState } from "react";
// Redux imports
import { useSelector } from "react-redux";
// Firebase imports
import {
  setCollection,
  setPhoto,
  updateCollectionArray,
} from "../../firebase/Firestore";
//Styles imports
import styles from "./AddPhotoComponent.module.scss";

const AddPhotoComponent = () => {
  const collections = useSelector((state) => state.collection.collectionsList);
  const [collectionName, setCollectionName] = useState("");
  const [photoSrc, setPhotoSrc] = useState("");
  const [description, setDescription] = useState("");
  const [collectionImage, setCollectionImage] = useState("");

  return (
    <div className={styles.adminAddphoto}>
      <h2 className="text-3xl font-bold">Add Photo</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setPhoto(collectionName, description, photoSrc)
            .then((photoID) => {
              collections.includes(collectionName)
                ? updateCollectionArray(
                    collectionName,
                    photoID,
                    collectionImage
                  )
                : setCollection(collectionName, photoID, collectionImage);
            })
            .catch((e) => {
              console.log(e);
            });
          setCollectionName("");
          setPhotoSrc("");
          setDescription("");
          setCollectionImage("");
        }}
      >
        <label>Photo Src</label>
        <input
          type="url"
          placeholder="Photo src"
          value={photoSrc}
          onChange={(e) => setPhotoSrc(e.target.value)}
          required
        />
        <label>Description</label>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <label>Collection</label>
        <input
          type="text"
          placeholder="Collection"
          value={collectionName}
          onChange={(e) => setCollectionName(e.target.value)}
          required
        />
        <label>Collection Image</label>
        <input
          type="url"
          placeholder="Collection image"
          value={collectionImage}
          onChange={(e) => setCollectionImage(e.target.value)}
        />
        <button>Add Photo</button>
      </form>
    </div>
  );
};
export default AddPhotoComponent;

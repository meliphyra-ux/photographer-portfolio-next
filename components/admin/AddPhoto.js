import React, { useState } from "react";
import { useSelector } from "react-redux";

import {
  setCollections,
  setPhoto,
  UpdateCollectionArray,
} from "../../firebase/Firestore";

import styles from "./AddPhoto.module.scss";

const AddPhoto = () => {
  const collections = useSelector((state) => state.collection.collectionsList);
  const [collection, setCollection] = useState("");
  const [photoSrc, setPhotoSrc] = useState("");
  const [description, setDescription] = useState("");
  const [collectionImage, setCollectionImage] = useState("")

  return (
    <div className={styles.adminAddphoto}>
      <h2 className="text-3xl font-bold">Add Photo</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setPhoto(collection, description, photoSrc)
            .then((photoID) => {
              collections.includes(collection)
                ? UpdateCollectionArray(collection, photoID, collectionImage)
                : setCollections(collection, photoID, collectionImage);
            })
            .catch((e) => {
              console.log(e);
            });
          setCollection("");
          setPhotoSrc("");
          setDescription("");
          setCollectionImage("")
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
          value={collection}
          onChange={(e) => setCollection(e.target.value)}
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
export default AddPhoto;

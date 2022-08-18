import React, { useState } from "react";
import {
  setCollections,
  setPhoto,
  UpdateCollectionArray,
} from "../../firebase/Firestore";
import styles from "./AddPhoto.module.scss";
import { useSelector, useDispatch } from "react-redux";

export default function AddPhoto() {
  const collections = useSelector((state) => state.collection.collectionsList);
  const dispatch = useDispatch();
  const [collection, setCollection] = useState("");
  const [photoSrc, setPhotoSrc] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className={styles.adminAddphoto}>
      <h2>Add Photo</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setPhoto(collection, description, photoSrc)
            .then((photoID) => {
              collections.includes(collection)
                ? UpdateCollectionArray(collection, photoID)
                : setCollections(collection, photoID);
            })
            .catch((e) => {
              console.log(e);
            });
          setCollection("");
          setPhotoSrc("");
          setDescription("");
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
        <button>Add Photo</button>
      </form>
    </div>
  );
}

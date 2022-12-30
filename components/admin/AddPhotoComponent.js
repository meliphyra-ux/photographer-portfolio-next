import React, { useState } from 'react';
// Redux imports
import { useSelector } from 'react-redux';
// Firebase imports
import {
  setCollection,
  setPhoto,
  updateCollectionArray,
} from '../../firebase/Firestore';
//Styles imports
import styles from './AddPhotoComponent.module.scss';

const defaultFormFieldValues = {
  collectionName: '',
  photoSrc: '',
  description: '',
  collectionImage: '',
  aspectRatio: '',
};

const AddPhotoComponent = () => {
  const collections = useSelector((state) => state.collection.collectionsList);
  const [formFieldValues, setFormFieldValues] = useState(
    defaultFormFieldValues
  );
  const {
    collectionName,
    photoSrc,
    description,
    collectionImage,
    aspectRatio,
  } = formFieldValues;

  const handleFormFieldChange = (event) => {
    const { name, value } = event.target;
    setFormFieldValues({ ...formFieldValues, [name]: value });
  };

  return (
    <div className={styles.adminAddphoto}>
      <h2 className="text-3xl font-bold">Add Photo</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setPhoto(collectionName, description, photoSrc, aspectRatio)
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
          setFormFieldValues(defaultFormFieldValues);
        }}
      >
        <label>Photo Src</label>
        <input
          type="url"
          placeholder="Photo src"
          value={photoSrc}
          onChange={handleFormFieldChange}
          name="photoSrc"
          required
        />
        <label>Description</label>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={handleFormFieldChange}
          name="description"
          required
        />
        <label>Collection</label>
        <input
          type="text"
          placeholder="Collection"
          value={collectionName}
          onChange={handleFormFieldChange}
          name="collectionName"
          required
        />
        <label>Collection Image</label>
        <input
          type="url"
          placeholder="Collection image"
          value={collectionImage}
          onChange={handleFormFieldChange}
          name="collectionImage"
        />
        <label >Aspect Ratio</label>
        <div className="flex items-center">
          <input
            id="aspectRatio1"
            className="inline-block mb-[0_!important]"
            type="radio"
            value="horizontal"
            placeholder="16x9"
            onChange={handleFormFieldChange}
            name="aspectRatio"
          />
          <label htmlFor="aspectRatio1" className="inline-block">Horizontal</label>
          <input
            id="aspectRatio2"
            className="inline-block mb-[0_!important] ml-20"
            type="radio"
            value="vertical"
            onChange={handleFormFieldChange}
            name="aspectRatio"
          />
          <label htmlFor="aspectRatio2" className="inline-block">Vertical</label>
        </div>

        <button>Add Photo</button>
      </form>
    </div>
  );
};
export default AddPhotoComponent;

import React from "react";
import styles from "./Admin.module.scss";
//Redux imports
import { useSelector, useDispatch } from "react-redux";
import { removeCollection } from "../store/collectionSlice";

export default function CollectionsList() {
  const collections = useSelector((state) => state.collection.value);
  const dispatch = useDispatch();
  console.log(collections)
  return (
    <div className={styles.adminCollections}>
      <h2>Collection</h2>

      {collections && collections.length === 0 ? (
        <h1>There is no collections</h1>
      ) : (
        <div className="admin--collections--list">
          {collections.map((collection) => (
            <div className={styles.adminItemBlock} key={collection.collectionName}>
              <h3>{collection.collectionName}</h3>
              <button
                onClick={() => {
                  dispatch(removeCollection(collection));
                }}
              >
                Delete Collection
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

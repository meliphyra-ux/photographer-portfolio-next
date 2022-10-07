import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { removeCollection } from "../store/collectionSlice";

import styles from "./Admin.module.scss";

const CollectionsList = () => {
  const collections = useSelector((state) => state.collection.value);
  const dispatch = useDispatch();
  return (
    <div className={styles.adminCollections}>
      <h2 className="text-3xl font-bold">Collection</h2>

      {collections && collections.length === 0 ? (
        <h1>There is no collections</h1>
      ) : (
        <div>
          {collections.map((collection) => (
            <div className={`${styles.adminItemBlock} mb-4`} key={collection.collectionName}>
              <h3 className="text-xl">{collection.collectionName}</h3>
              <button
                className="mb-2"
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
export default CollectionsList
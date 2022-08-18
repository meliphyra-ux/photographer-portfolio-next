import React from "react";
import styles from "./Admin.module.scss";
import { useRouter } from "next/router";

import { DeletePhoto } from "../../firebase/Firestore";
import { getAuth, signOut } from "firebase/auth";

import { useDispatch, useSelector } from "react-redux";
import { removePhoto } from "../store/photosSlice";


export default function PhotoList() {
  const photos = useSelector((state) => state.photos.photos);
  const dispatch = useDispatch();

  const router = useRouter();

  const LogOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        router.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.adminPhotos}>
      <h2>Photos</h2>
      <div>
        {photos && photos.length === 0 ? (
          <h1>There is no photos</h1>
        ) : (
          photos.map((photo) => (
            <div className={styles.adminItemBlock} key={photo.id}>
              <h3>
                {photo.description.trim().length < 35
                  ? photo.description.trim()
                  : photo.description.trim().slice(0, 35) + "..."}
              </h3>
              <button
                onClick={() => {
                  DeletePhoto(photo.id);
                  dispatch(removePhoto(photo));
                }}
              >
                Delete Photo
              </button>
            </div>
          ))
        )}
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          LogOut();
        }}
      >
        Logout
      </button>
    </div>
  );
}

import {
  addDoc,
  collection,
  updateDoc,
  getDocs,
  setDoc,
  doc,
  deleteDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { db } from "../pages/_app";

export const firebaseConfig = {
  apiKey: "AIzaSyB0L5Hpg9ql9BLPEsEqtJyAWGRqNk_Xgz4",
  authDomain: "photographer-portfolio-cafc5.firebaseapp.com",
  projectId: "photographer-portfolio-cafc5",
  storageBucket: "photographer-portfolio-cafc5.appspot.com",
  messagingSenderId: "365361872824",
  appId: "1:365361872824:web:7c96a85b9e0f77e2f9994d",
  measurementId: "G-6BP3G12PE1",
};

export async function setPhoto(collect, description, photoSrc) {
  try {
    const docRef = await addDoc(collection(db, "photos"), {
      collection: collect.trim(),
      description: description.trim(),
      src: photoSrc.trim(),
    });
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
export async function GetPhoto() {
  return getDocs(collection(db, "photos"));
}
export async function GetCollections() {
  return getDocs(collection(db, "collections"));
}

export async function setCollections(collectionName, photoID, collectionImage) {
  await setDoc(doc(db, "collections", collectionName), {
    collectionName: collectionName.trim(),
    photoArray: [photoID],
  });
  await updateCollectionImage(collectionImage)
}

export async function DeletePhoto(photoID, collectionName) {
  const collectionRef = doc(db, "collections", collectionName);
  await updateDoc(collectionRef, {
    photoArray: arrayRemove(photoID),
  });
  await deleteDoc(doc(db, "photos", photoID));
}

export async function DeleteCollection(collectionName) {
  await deleteDoc(doc(db, "collections", collectionName));
}

export async function UpdateCollectionArray(collectionName, photoID, collectionImage) {
  const collectionRef = doc(db, "collections", collectionName);
  await updateDoc(collectionRef, {
    photoArray: arrayUnion(photoID),
  });
  await updateCollectionImage(collectionName, collectionImage)
}
async function updateCollectionImage(collectionName, collectionImage){
  const collectionRef = doc(db, "collections", collectionName);
  if(collectionImage){
  await updateDoc(collectionRef,
    {
      collectionImage,
    })
  }
}

import { addDoc, collection, updateDoc ,getDocs, setDoc, doc, deleteDoc, arrayUnion } from "firebase/firestore";
import { db } from "../pages/_app"

export async function setPhoto(collect, description, photoSrc) {
  try {
    const docRef = await addDoc(collection(db, "photos"), {
      collection: collect.trim(),
      description: description.trim(),
      src: photoSrc.trim(),
    });
    // return docRef.id
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
export async function GetPhoto() {
  const querySnapshot = await getDocs(collection(db, "photos"));
  const docs = [];
  querySnapshot.forEach((doc) => {
    docs.push(doc)
  });
  return docs;
}
export async function GetCollections() {
  const querySnapshot = await getDocs(collection(db, "collections"));
  const docs = [];
  querySnapshot.forEach((doc) => {
    docs.push(doc)
  });
  return docs;
}

export async function setCollections(collectionName, photoID){
  // const collectionRef = doc(db, "collections", collectionName);
  // console.log(collectionRef.docs)
  await setDoc(doc(db, "collections", collectionName), {
    collectionName: collectionName.trim(),
    photoArray: [photoID]
  });
}

export async function DeletePhoto(fotoID){
  await deleteDoc(doc(db, "photos", fotoID));
}
export async function DeleteCollection(collectionName){
  await deleteDoc(doc(db, "collections", collectionName));
}
export async function UpdateCollectionArray(collectionName, photoID){
  const collectionRef = doc(db, "collections", collectionName);
  await updateDoc(collectionRef, {
    photoArray: arrayUnion(photoID)
});
}

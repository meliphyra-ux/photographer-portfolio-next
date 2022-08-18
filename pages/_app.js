import React, { useEffect } from "react";
import Head from "next/head";

//Redux store
import store from "../components/store/store";
import { Provider, useDispatch } from "react-redux";
import { updatePhotos } from "../components/store/photosSlice";
import { updateCollection } from "../components/store/collectionSlice";

import "../styles/styles.scss";

// Firestore initialize
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0L5Hpg9ql9BLPEsEqtJyAWGRqNk_Xgz4",
  authDomain: "photographer-portfolio-cafc5.firebaseapp.com",
  projectId: "photographer-portfolio-cafc5",
  storageBucket: "photographer-portfolio-cafc5.appspot.com",
  messagingSenderId: "365361872824",
  appId: "1:365361872824:web:7c96a85b9e0f77e2f9994d",
  measurementId: "G-6BP3G12PE1",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };

import { GetCollections, GetPhoto } from "../firebase/Firestore";

function ProviderWrap({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    GetCollections()
      .then((docs) => {
        docs.forEach((doc) => {
          dispatch(updateCollection(doc.data()));
        });
      })
      .catch((e) => {
        console.log(e);
      });
    GetPhoto()
      .then((docs) => {
        docs.forEach((doc) => {
          dispatch(updatePhotos(doc));
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return <div>{children}</div>;
}

const MyApp = ({ Component, pageProps }) => {
  // Collections and Photos fetch

  return (
    <Provider store={store}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      </Head>
      <ProviderWrap>
        <Component {...pageProps} />
      </ProviderWrap>
    </Provider>
  );
};
export default MyApp;

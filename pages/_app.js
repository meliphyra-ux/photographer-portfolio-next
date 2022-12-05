import React from "react";
import Head from "next/head";
import ProviderWrapComponent from "../components/ProviderWrapComponent";
//Redux imports
import store from "../components/store/store";
import { Provider } from "react-redux";
// Firestore imports
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase/Firestore";
import { getFirestore } from "firebase/firestore";
// Style imports
import "../styles/styles.css";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <title>Photographer portfolio</title>
        <meta
          name="description"
          content="I'm Sasha - professional photographer. Welcome to my portfolio website!"
        />
      </Head>
      <ProviderWrapComponent>
        <Component {...pageProps} />
      </ProviderWrapComponent>
    </Provider>
  );
};
export default MyApp;

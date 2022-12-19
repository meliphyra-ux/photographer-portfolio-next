import React from 'react';
import Head from 'next/head';

// Firestore imports
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase/Firestore';
import { getFirestore } from 'firebase/firestore';
// Style imports
import '../styles/styles.css';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
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
        <Component {...pageProps} />
    </>
  );
};
export default MyApp;

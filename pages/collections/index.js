import React from 'react';
import UserCollectionsListComponent from '../../components/collections/UserCollectionsListComponent';

import { getCollections } from '../../firebase/Firestore';
import BackButton from '../../components/back-button/Back-button.component';

const Collections = ({ collectionsProps }) => {
  return (
    <section className="p-8 sm:px-16 lg:px-32 py-10 flex flex-col h-screen relative">
      <BackButton navigateTo="/" title="Collections list" />
      <UserCollectionsListComponent collectionsProps={collectionsProps} />
    </section>
  );
};
export async function getStaticProps() {
  const collections = await getCollections();
  const collectionsProps = [];
  collections.forEach((collection) => collectionsProps.push(collection.data()));
  return {
    props: {
      collectionsProps,
    },
    revalidate: 10,
  };
}

export default Collections;

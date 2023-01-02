import { useRouter } from 'next/router';
import Image from 'next/future/image';
import ImagePopup from '../../components/image-popup/Image-popup.component';

import {
  getPhotosByCollection,
  getCollections,
} from '../../firebase/Firestore';
import { useState } from 'react';
import BackButton from '../../components/back-button/Back-button.component';

const defaultPopUpProps = {
  visibility: false,
  aspectRatio: '',
  url: '',
};

const Collection = ({ photosProps }) => {
  const {
    query: { id },
  } = useRouter();
  const [popUp, setPopUp] = useState(defaultPopUpProps);
  const { visibility, url, aspectRatio } = popUp;

  return (
    <section className="text-white px-8 sm:px-16 lg:px-32 py-10">
      <BackButton navigateTo="/collections" title={id} />
      <div className="grid 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 w-full">
        {photosProps.map((photo) => (
          <figure
            key={photo.id}
            className={`w-full relative hover:scale-105 duration-150 ${
              (photo.aspectRatio || 'vertical') === 'horizontal'
                ? 'col-span-2'
                : ''
            }`}
          >
            <Image
              onClick={() =>
                setPopUp({
                  visibility: true,
                  url: photo.src,
                  aspectRatio: photo.aspectRatio,
                })
              }
              width={700}
              height={700}
              src={photo.src}
              className="w-full h-full object-cover object-top hover:opacity-10 duration-150 relative rounded-xl z-10 cursor-pointer"
              alt={`Photo of collection ${id}`}
            />
            <h3 className="w-full h-full absolute top-0 left-0 flex justify-center items-center bg-neutral-800 rounded-xl">
              {photo.description}
            </h3>
          </figure>
        ))}
      </div>
      {visibility && (
        <ImagePopup
          closePopup={() => setPopUp(defaultPopUpProps)}
          url={url}
          aspectRatio={aspectRatio}
        />
      )}
    </section>
  );
};

export async function getStaticPaths() {
  const collectionPaths = await getCollections();
  const collectionPathsList = [];
  collectionPaths.forEach((collectionPath) =>
    collectionPathsList.push(collectionPath.data())
  );

  return {
    paths: collectionPathsList.map((path) => ({
      params: { id: path.collectionName },
    })),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params: { id } }) {
  const photos = await getPhotosByCollection(id);
  const photosProps = [];
  photos.forEach((photo) =>
    photosProps.push({ id: photo.id, ...photo.data(), timestamp: null })
  );
  return {
    props: {
      photosProps,
    },
    revalidate: 10,
  };
}

export default Collection;

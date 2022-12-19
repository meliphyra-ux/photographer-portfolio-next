import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/future/image';

import { getPhotosByCollection } from '../../firebase/Firestore';

const Collection = ({ photosProps }) => {
  const {
    query: { id },
  } = useRouter();
  return (
    <section className="text-white px-8 sm:px-16 lg:px-32 py-10">
      <Link href="/collections">
        <h1 className="md:text-5xl text-3xl mb-12 flex items-center">
          <button
            className="text-white text-3xl max-w-fit mr-10 cursor-pointer duration-150 hover:scale-150"
          >{`<-`}</button>
          {id}
        </h1>
      </Link>
        <div className="grid 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 w-full">
          {photosProps.map((photo) => (
            <figure
              key={photo.id}
              className="w-full relative hover:scale-105 duration-150"
            >
              <Image
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
    </section>
  );
};

export async function getServerSideProps({ params: { id } }) {
  const photos = await getPhotosByCollection(id);
  const photosProps = [];
  photos.forEach((photo) => photosProps.push({ id: photo.id, ...photo.data() }));
  return {
    props: {
      photosProps,
    },
  };
}

export default Collection;

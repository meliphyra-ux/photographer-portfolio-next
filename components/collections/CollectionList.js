import React from "react";
import { useSelector } from "react-redux";

import Image from "next/future/image";
import { useRouter } from "next/router";

const CollectionList = () => {
  const collections = useSelector((state) => state.collection.value);
  const router = useRouter();
  return (
    <section className="text-white text-3xl grid 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-8">
      {collections &&
        collections.map((collection) => (
          <div
            onClick={(e) => {
              e.stopPropagation();
              router.push(`/collections/${collection.collectionName}`);
            }}
            className="w-full aspect-square bg-neutral-800 rounded-xl flex justify-center flex-col items-center cursor-pointer hover:bg-neutral-700 hover:text-4xl hover:scale-105 duration-150"
            key={`${collection.collectionName}`}
          >
            <Image
                width={300}
                height={300}
                src={collection.collectionImage}
                className="w-full h-4/5 object-cover object-center duration-150 relative rounded-xl z-10 cursor-pointer"
                alt={`Photo of collection ${collection.collectionName}`}
              />
            <p className="py-4">{collection.collectionName}</p>
          </div>
        ))}
    </section>
  );
};

export default CollectionList;

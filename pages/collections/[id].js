import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Image from "next/future/image";

const Collection = () => {
  const router = useRouter();
  const { id } = router.query;
  const collection = useSelector((state) => state.photos.photos).filter(
    (collection) => collection.collection === id
  );

  return (
    <section className="text-white px-8 sm:px-16 lg:px-32 py-10">
      <h1 className="md:text-5xl text-3xl mb-12 flex items-center">
        <button
          className="text-white text-3xl max-w-fit mr-10 cursor-pointer duration-150 hover:scale-150"
          onClick={() => router.push(`/collections`)}
        >{`<-`}</button>
        {id}
      </h1>
      {collection && (
        <div className="grid 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 w-full">
          {collection.map((photo) => (
            <figure
              key={photo.id}
              className="w-full aspect-square relative hover:scale-105 duration-150"
            >
              <Image
                width={400}
                height={400}
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
      )}
    </section>
  );
};

export default Collection;

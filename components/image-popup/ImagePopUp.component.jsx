import Image from 'next/image';

const ImagePopUp = ({ url, setPopUp, aspectRatio }) => {
  return (
    <div
      className="fixed px-5 z-10 top-0 left-0 w-screen h-screen bg-[rgb(0,0,0,0.7)] flex items-center justify-center"
      onClick={setPopUp}
    >
      <picture onClick={(e) => e.stopPropagation()} className={`relative lg:h-[90%] ${aspectRatio === "horizontal" ? 'md:w-3/4 h-[30%] w-[90%]' : 'md:w-1/3 h-2/3 w-[90%]' }`}>
        <Image
          layout="fill"
          objectPosition="center"
          src={url}
          alt="Sized image"
          className="rounded-xl"
        />
      </picture>
    </div>
  );
};

export default ImagePopUp;

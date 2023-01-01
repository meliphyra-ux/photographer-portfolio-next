import Image from 'next/image';

const ImagePopUp = ({ url, setPopUp, aspectRatio }) => {
  return (
    <div
      className="fixed px-5 z-10 top-0 left-0 w-screen h-screen bg-[rgb(0,0,0,0.7)] flex items-center justify-center"
      onClick={setPopUp}
    >
      <picture onClick={(e) => e.stopPropagation()} className={`relative max-w-[95%]  ${aspectRatio === "horizontal" ? 'aspect-video w-[1200px]' : 'aspect-[3/4.5] w-[500px]'}`}>
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

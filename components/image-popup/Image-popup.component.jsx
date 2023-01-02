import Image from 'next/image';

const ImagePopup = ({ url, aspectRatio, closePopup }) => {
  return (
    <div className="pop-up-image">
      <button onClick={closePopup} className="absolute top-2 right-3">
        <Image
          width={45}
          height={45}
          src="/images/x-lg.svg"
          alt="Close button"
        />
      </button>
      <div
        className="w-full h-full flex items-center justify-center cursor-pointer"
        onClick={closePopup}
      >
        <picture
          onClick={(e) => e.stopPropagation()}
          className={`relative max-w-[95%]  cursor-default ${
            aspectRatio === 'horizontal'
              ? 'aspect-video w-[1200px]'
              : 'aspect-[3/4.5] w-[500px]'
          }`}
        >
          <Image
            layout="fill"
            objectPosition="center"
            src={url}
            alt="Sized image"
            className="rounded-xl"
          />
        </picture>
      </div>
    </div>
  );
};

export default ImagePopup;

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/future/image";

const Carousel = () => {
  const photos = useSelector((state) => state.photos.photos).slice(0, 5);
  const [photoSlider, setPhotoSlider] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      if (photoSlider < photos.length - 1) {
        setPhotoSlider(photoSlider + 1);
      } else {
        setPhotoSlider(0);
      }
    }, 15000);
    return () => clearInterval(interval);
  }, [photos, photoSlider]);
  useEffect(()=>{
    setWindowWidth(window.innerWidth)
  }, [])

  return (
    <div className="overflow-hidden md:w-2/5 lg:w-3/6 md:flex hidden flex-row h-screen">
      {windowWidth > 760 && photos && photos.length !== 0 && (
        <>
          {photos.map((photo, index) => (
            <Image
              width={1200}
              height={800}
              key={photo.src}
              src={photo.src}
              className="duration-500 object-cover aspect-square object-center w-full h-full"
              style={{ transform: `translateX(${0 - photoSlider * 100}%)` }}
              alt="Photo carousel"
              placeholder="blur"
              blurDataURL={photo.src}
              priority={index === photoSlider + 1 ? true : false}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Carousel;

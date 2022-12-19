import { useEffect, useState } from "react";
import Image from "next/future/image";

import photoCarouselImages from "./store/photoCarouselImages.json";

const CarouselComponent = () => {
  const [photoSlider, setPhotoSlider] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      if (photoSlider < photoCarouselImages.length - 1) {
        setPhotoSlider(photoSlider + 1);
      } else {
        setPhotoSlider(0);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [ photoSlider]);
  useEffect(()=>{
    setWindowWidth(window.innerWidth)
  }, [])

  return (
    <div className="overflow-hidden md:w-2/5 lg:w-3/6 md:flex hidden flex-row h-screen">
      {windowWidth > 760 && (
        <>
          {photoCarouselImages.map((photo) => (
            <Image
              width={1200}
              height={800}
              key={photo.src}
              src={photo.src}
              className="duration-300 object-cover aspect-square object-center w-full h-full"
              style={{ transform: `translateX(${0 - photoSlider * 100}%)` }}
              alt="Photo carousel"
              placeholder="blur"
              blurDataURL={photo.src}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default CarouselComponent;

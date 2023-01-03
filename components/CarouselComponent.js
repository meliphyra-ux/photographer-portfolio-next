import { useEffect, useState } from 'react';
import Image from 'next/image';

import photoCarouselImages from './store/photoCarouselImages.json';

const CarouselComponent = () => {
  const [photoSlider, setPhotoSlider] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (photoSlider < photoCarouselImages.length - 1) {
        setPhotoSlider(photoSlider + 1);
      } else {
        setPhotoSlider(0);
      }
    }, 7000);
    return () => clearInterval(interval);
  }, [photoSlider]);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <div className="absolute z-[-5] overflow-hidden w-full md:flex hidden h-screen opacity-[0.2]">
      {windowWidth > 760 && (
        <>
          {photoCarouselImages.map((photo) => (
            <div key={photo.src} className="w-full h-full flex-none relative duration-700 inline-block" style={{ transform: `translateX(${0 - photoSlider * 100}%)` }}>
              <Image
                layout="fill"
                src={photo.src}
                className=" object-cover object-center"
                alt="Photo carousel"
                placeholder="blur"
                blurDataURL={photo.src}
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default CarouselComponent;

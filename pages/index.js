import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function index() {
  const photos = useSelector((state) => state.photos.photos);
  const [photoSlider, setPhotoSlider] = useState(0);

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

  return (
    <div className="flex flex-row items-center sm:text-left justify-center sm:justify-between h-screen ">
      <div className="lg:mx-32 mx-16 flex flex-col">
        <h1 className="text-white lg:text-6xl text-4xl">
          Hello, I'm Sasha.
          <br />
          Professional
          <br />
          Photographer
        </h1>
        <p className="text-white lg:text-3xl text-2xl mt-12 font-extralight">Lorem ipsum</p>
      </div>
      <div className="overflow-hidden lg:w-2/5 md:flex hidden flex-row h-screen">
        {photos.map((photo) => (
          <img
            src={photo.src}
            className="relative duration-300 object-cover object-center"
            style={{ left: `${0 - photoSlider * 100}%` }}
          />
        ))}
      </div>
    </div>
  );
}

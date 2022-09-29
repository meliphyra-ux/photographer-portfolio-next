import React, { useEffect, useState } from "react";
import instagram from "../styles/assets/instagram.png"
import facebook from "../styles/assets/facebook.png"
import telegram from "../styles/assets/telegram.png"
import { useSelector } from "react-redux";
import Image from 'next/image'
import { useRouter } from "next/router";

export default function index() {
  const router = useRouter()
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
    <section className="flex flex-row items-center sm:text-left justify-center sm:justify-between h-screen ">
      <article className="lg:mx-32 mx-16 flex flex-col justify-evenly h-1/2">
        <h1 className="text-white lg:text-6xl text-2xl mb-3">
          Hello, I'm Sasha.
          <br />
          Professional
          <br />
          Photographer
        </h1>
        <p className="text-white lg:text-4xl text-2xl font-extralight mb-3">
          Lorem ipsum
        </p>
        <button className="px-2.5 w-1/2 py-2 text-white border-2 border-white hover:bg-white hover:text-black duration-300 mb-3"
        onClick={() => router.push('/collections')}
        >
          Collections
        </button>
        <section>
          <button className="mr-5"><a href="" target="_blank"><Image src={instagram} alt="Instagram" width={32} height={32}/></a></button>
          <button className="mr-5"><a href="https://t.me/gamewithsasha" target="_blank"><Image src={telegram} alt="Telegram" width={32} height={32}/></a></button>
          <button className="mr-5"><a href="" target="_blank"><Image src={facebook} alt="Facebook" width={32} height={32}/></a></button>
        </section>
      </article>
      <div className="overflow-hidden lg:w-2/5 md:flex hidden flex-row h-screen">
        {photos.map((photo) => (
          <img
            src={photo.src}
            className="relative duration-300 object-cover object-center"
            style={{ left: `${0 - photoSlider * 100}%` }}
          />
        ))}
      </div>
    </section>
  );
}

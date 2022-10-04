import React, { useEffect, useState } from "react";
import instagram from "../styles/assets/instagram.png"
import facebook from "../styles/assets/facebook.png"
import telegram from "../styles/assets/telegram.png"
import { useSelector } from "react-redux";
import Image from 'next/future/image'
import { useRouter } from "next/router";
// import Link from "next/link";


const Main = () => {
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
    <section className="flex flex-row items-center sm:text-left justify-center md:justify-between h-screen ">
      <article className="lg:mx-32 mx-16 md:w-3/5 lg:w-3/6 flex flex-col justify-center h-2/3">
        <h1 className="text-white lg:text-6xl text-4xl mb-6">
          Hello, I&apos;m Sasha.
          <br />
          Professional
          <br />
          Photographer
        </h1>
        <p className="text-white lg:text-4xl text-2xl font-extralight mb-10">
          Lorem ipsum
        </p>
        <button className="px-2.5 md:w-1/3 py-4 text-white border-2 border-white hover:bg-white hover:text-black duration-300 text-xl mb-6"
        onClick={() => router.push('/collections')}
        >
          Collections
        </button>
        <section>
          <button className="mr-5"><a href=""><Image src={instagram} alt="Instagram" width={50} height={50}/></a></button>
          <button className="mr-5"><a href="https://t.me/gamewithsasha" alt="Telegram"><Image src={telegram} alt="Telegram" width={50} height={50}/></a></button>
          <button className="mr-5"><a href="" alt="Facebook"><Image src={facebook} alt="Facebook" width={50} height={50}/></a></button>
        </section>
      </article>
      <div className="overflow-hidden md:w-2/5 lg:w-3/6 md:flex hidden flex-row h-screen">
        {photos && photos.length != 0 && 
            <Image
              width={1400}
              height={1400}
              key={photos[photoSlider].src}
              src={photos[photoSlider].src}
              className="relative duration-300 object-cover object-center w-full photoSlider"
              // style={{ left: `${0 - photoSlider * 100}%` }}
              alt="Photo carusel"
            />}
      </div>
    </section>
  );
}
export default Main;
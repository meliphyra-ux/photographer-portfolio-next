import React, { useEffect, useState } from "react";
import instagram from "../styles/assets/instagram.png";
import telegram from "../styles/assets/telegram.png";
import { useSelector } from "react-redux";
import Image from "next/future/image";
import { useRouter } from "next/router";

const Main = () => {
  const router = useRouter();
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
    // Section with main info
    <section className="flex flex-row items-center sm:text-left justify-center md:justify-between h-screen ">
      <article className="lg:mx-32 mx-16 md:w-3/5 lg:w-3/6 flex flex-col justify-center h-2/3">
        <h1 className="text-white lg:text-5xl text-3xl  mb-5">
          Hello, I&apos;m Sasha.
          <br />
          Professional
          <br />
          Photographer
        </h1>
        <p className="text-white lg:text-3xl text-2xl font-extralight mb-8">
          &quot;Taking photos is like routine for me,
          <br /> a nice one routine&quot;
        </p>
        <button
          className="px-2.5 md:w-1/3 py-4 text-white border-2 border-white hover:bg-white hover:text-black duration-300 text-xl mb-6"
          onClick={() => router.push("/collections")}
        >
          Collections
        </button>
        <section>
          <button className="mr-5">
            <a href="https://www.instagram.com/gamewithsasha/">
              <Image src={instagram} alt="Instagram" width={50} height={50} />
            </a>
          </button>
          <button className="mr-5">
            <a href="https://t.me/gamewithsasha">
              <Image src={telegram} alt="Telegram" width={50} height={50} />
            </a>
          </button>
        </section>
      </article>

      {/* Section for photo slider */}

      <div className="overflow-hidden md:w-2/5 lg:w-3/6 md:flex hidden flex-row h-screen">
        {windowWidth > 768 && photos && photos.length !== 0 && (
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
    </section>
  );
};
export default Main;

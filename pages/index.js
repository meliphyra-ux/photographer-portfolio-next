import instagram from "../styles/assets/instagram.png";
import telegram from "../styles/assets/telegram.png";

import Image from "next/future/image";
import { useRouter } from "next/router";
import Carousel from "../components/Carousel";

const Main = () => {
  const router = useRouter();
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
      <Carousel />
    </section>
  );
};
export default Main;

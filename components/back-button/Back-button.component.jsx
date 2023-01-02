import Link from 'next/link';

const BackButton = ({ navigateTo, title }) => {
  return (
    <Link href={navigateTo}>
      <h1 className="text-white md:text-5xl text-3xl mb-12 flex items-center">
        <button className="text-white text-3xl max-w-fit mr-10 cursor-pointer duration-150 hover:scale-150">{`<-`}</button>
        {title}
      </h1>
    </Link>
  );
};

export default BackButton;

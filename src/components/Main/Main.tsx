import Link from 'next/link';
import DownNavButton from './DownNavButton';

const Main = () => {
  return (
    <main id="hero" className="section">
      <div className="flex flex-col items-start hero--content">
        <h1 className="text-4xl md:text-5xl lg:text-6xl my-3 fade--up">
          Hi, my name is <span className="text-[#66FCF1]">Shawn</span>
        </h1>

        {/* make this a type writer effect later */}
        <h2 className="text-lg md:text-xl lg:text-2xl fade--up">
          Full-Stack Web Developer.
        </h2>

        <Link
          href={`${process.env.NEXT_PUBLIC_RESUME_LINK}`}
          target="_blank"
          className="fade--up text-xs md:text-md lg:text-lg mt-6 px-5 py-2 border-[#66FCF1] border-2 rounded-lg hover:bg-[#66FCF1]/70"
        >
          View Resume
        </Link>

        <DownNavButton />
      </div>
    </main>
  );
};

export default Main;

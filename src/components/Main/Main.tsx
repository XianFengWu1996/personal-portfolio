import DownNavButton from './DownNavButton';

const Main = () => {
  return (
    <div>
      <main
        id="hero"
        className="container h-screen flex justify-center items-center text-left relative"
      >
        <div className="flex flex-col items-start ">
          <h1 id="main__title" className="text-6xl my-3">
            Hi, my name is <span className="text-[#66FCF1]">Shawn</span>
          </h1>
          <h2 className="text-2xl">Full-Stack Web Developer.</h2>
          <h2 className="text-2xl">Also a passionate rookie game developer.</h2>

          <button className="mt-6 px-5 py-2 border-[#66FCF1] border-2 rounded-2xl hover:bg-[#66FCF1]/70">
            Learn more about me
          </button>

          <DownNavButton />
        </div>
      </main>
    </div>
  );
};

export default Main;

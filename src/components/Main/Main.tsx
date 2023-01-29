const Main = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center text-left">
      <div className="flex flex-col items-start">
        <h1 className="text-6xl my-3">
          Hi, my name is <span className="text-[#66FCF1]">Shawn</span>
        </h1>
        <h2 className="text-2xl">Full-Stack Web Developer.</h2>
        <h2 className="text-2xl">Also a passionate rookie game developer.</h2>

        <button className="mt-6 px-5 py-2 border-[#66FCF1] border-2 rounded-2xl hover:bg-[#66FCF1]/70">
          Learn more about me
        </button>
      </div>
    </div>
  );
};

export default Main;

import { FiChevronsDown } from 'react-icons/fi';

const Main = () => {
  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center text-left relative">
        <div className="flex flex-col items-start ">
          <h1 className="text-6xl my-3">
            Hi, my name is <span className="text-[#66FCF1]">Shawn</span>
            <span className="flash">_</span>
          </h1>
          <h2 className="text-2xl">Full-Stack Web Developer.</h2>
          <h2 className="text-2xl">Also a passionate rookie game developer.</h2>

          <button className="mt-6 px-5 py-2 border-[#66FCF1] border-2 rounded-2xl hover:bg-[#66FCF1]/70">
            Learn more about me
          </button>

          <div className="nav-down flex absolute bottom-20 left-[50%] translate-x[-50%] border-2 py-2 rounded-2xl hover:bg-gray-700 cursor-pointer">
            <FiChevronsDown size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

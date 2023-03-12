import { AiOutlineHeart } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className=" w-full mx-auto py-10">
      <div className="flex items-center justify-center">
        <AiOutlineHeart className="text-[#66fcf1]" />
        <p className="text-[#66fcf1] pl-4">Designed and Built by Shawn Wu</p>
      </div>
    </footer>
  );
};

export default Footer;

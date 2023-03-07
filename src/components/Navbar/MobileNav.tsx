import { scrollTo } from '@/helper/Scroll';
import Image from 'next/image';
import { IoMdClose } from 'react-icons/io';
import WhiteLogo from '../../../public/assets/images/logos/logo-white.png';
import SocialIcons from './SocialIcons';

interface MobileNavProps {
  isOpen: boolean;
  onClose: VoidFunction;
}

const MobileNav = (props: MobileNavProps) => {
  const handleOnClick = (id: string) => {
    props.onClose();

    setTimeout(() => {
      scrollTo(id);
    }, 500);
  };
  return (
    <div
      className={
        props.isOpen
          ? 'md:hidden fixed top-0 left-0 w-full h-screen bg-white/40 z-[100]'
          : ''
      }
    >
      <div
        className={
          props.isOpen
            ? 'md:hidden fixed top-0 left-0 w-[100%] sm:w-[65%] h-full z-[999] ease-in duration-300 py-4 bg-gray-900'
            : 'md:hidden fixed left-[-100%] w-[75%] h-full ease-in duration-300 bg-gray-900'
        }
      >
        <div className="flex flex-col justify-between h-[90%] w-full">
          {/* Logo and Close button  */}
          <div className="flex justify-between items-center mx-6">
            <Image src={WhiteLogo} alt="Logo Image" height={75} width={75} />
            {/* Close Icon */}
            <div
              className="hover:bg-gray-800 rounded-full cursor-pointer p-1"
              onClick={props.onClose}
            >
              <IoMdClose size={30} />
            </div>
          </div>

          {/* Navigation  */}
          <ul className="w-full flex flex-col justify-between uppercase cursor-pointer">
            <div
              role={'link'}
              className="menu_item"
              onClick={() => handleOnClick('expertise')}
            >
              Expertise
            </div>
            <div
              role={'link'}
              className="menu_item"
              onClick={() => handleOnClick('projects')}
            >
              Projects
            </div>
            <div
              role={'link'}
              className="menu_item"
              onClick={() => handleOnClick('aboutme')}
            >
              About Me
            </div>
          </ul>

          {/* Social  */}
          <SocialIcons onClose={props.onClose} />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;

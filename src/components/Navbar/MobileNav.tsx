import Image from 'next/image';
import Link from 'next/link';
import { IoMdClose } from 'react-icons/io';
import WhiteLogo from '../../../public/assets/images/logos/logo-white.png';
import SocialIcons from './SocialIcons';

interface MobileNavProps {
  isOpen: boolean;
  onClose: VoidFunction;
}

const MobileNav = (props: MobileNavProps) => {
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
            ? 'md:hidden fixed top-0 left-0 w-[75%] bg-gray-900 h-full z-[999] ease-in duration-300 py-4 px-6'
            : 'md:hidden fixed left-[-100%] w-[75%] bg-gray-900 h-full ease-in duration-300'
        }
      >
        <div className="flex flex-col justify-between h-[75%] w-full">
          {/* Logo and Close button  */}
          <div className="flex justify-between items-center ">
            <div>
              <Image src={WhiteLogo} alt="Logo Image" height={75} width={75} />
            </div>
            {/* Close Icon */}
            <div
              className="hover:bg-gray-800 rounded-full cursor-pointer p-1"
              onClick={props.onClose}
            >
              <IoMdClose size={30} />
            </div>
          </div>

          {/* Navigation  */}
          <ul className="w-full h-[125px] flex flex-col justify-between uppercase cursor-pointer px-2">
            <Link href={'/'}>Expertise</Link>
            <Link href={'/'}>Projects</Link>
            <Link href={'/'}>About Me</Link>
          </ul>

          {/* Social  */}
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;

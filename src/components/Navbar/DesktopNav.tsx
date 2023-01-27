import { AiOutlineMenu } from 'react-icons/ai';

import WhiteLogo from '../../../public/assets/images/logos/logo-white.png';
import Image from 'next/image';
import Link from 'next/link';
import SocialIcons from './SocialIcons';

interface DesktopNavProps {
  onOpen: VoidFunction;
}

const DesktopNav = (props: DesktopNavProps) => {
  return (
    <div>
      <div className="fixed w-full h-20 flex justify-between items-center py-5 px-3 sm:px-5 md:px-7 lg:px-10 border-b border-gray-800">
        {/* logo image */}
        <div>
          <Image src={WhiteLogo} alt="Logo Image" height={75} width={75} />
        </div>

        {/* navigation buttons */}
        <div className="hidden md:flex">
          <ul className=" w-[400px] flex justify-between uppercase cursor-pointer">
            <Link href={'/'}>Technologies</Link>
            <Link href={'/'}>Projects</Link>
            <Link href={'/'}>About Me</Link>
          </ul>
        </div>

        {/* social icons */}
        <div className="hidden md:flex">
          <SocialIcons />
        </div>

        <div
          className="md:hidden hover:bg-gray-800 rounded-full cursor-pointer p-3 "
          onClick={props.onOpen}
        >
          <AiOutlineMenu size={22} />
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;

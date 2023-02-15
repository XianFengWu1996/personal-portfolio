import { AiOutlineMenu } from 'react-icons/ai';

import WhiteLogo from '../../../public/assets/images/logos/logo-white.png';
import Image from 'next/image';
import Link from 'next/link';
import SocialIcons from './SocialIcons';
import { useEffect } from 'react';

interface DesktopNavProps {
  onOpen: VoidFunction;
}

const DesktopNav = (props: DesktopNavProps) => {
  const scrollHandler = () => {
    // find the navbar with the id of "navbar"
    const navbar = document.getElementById('navbar');

    if (!navbar) return;

    // get the height of the navbar then add a bit of offset
    const navbarHeight = navbar.getBoundingClientRect().height + 15;

    // check for if the scollY is at the navbar height
    // add the border and background color if the the scroll has passed the navbar height
    // else remove the border and background color to keep the navbar transparent
    if (window.scrollY > navbarHeight) {
      navbar.classList.add('border-b', 'border-gray-800', 'bg-gray-900');
    } else {
      navbar.classList.remove('border-b', 'border-gray-800', 'bg-gray-900');
    }
  };

  useEffect(() => {
    // add the scroll listener
    document.addEventListener('scroll', scrollHandler);

    // remove the listen
    return () => document.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <nav
      id="navbar"
      className="fixed w-full h-20 flex justify-between items-center py-5 px-3 sm:px-5 md:px-7 lg:px-10 z-[100] "
    >
      {/* logo image */}
      <div>
        <Image src={WhiteLogo} alt="Logo Image" height={75} width={75} />
      </div>

      {/* navigation buttons */}
      <div className="hidden md:flex">
        <ul className=" w-[400px] flex justify-between uppercase cursor-pointer items-center">
          <Link href={'/'}>Expertise</Link>
          <Link href={'/'}>Projects</Link>
          <Link href={'/'}>About Me</Link>
          <button className="border-[#66fcf1] rounded-lg border-2 px-4 py-1">
            Resume
          </button>
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
    </nav>
  );
};

export default DesktopNav;

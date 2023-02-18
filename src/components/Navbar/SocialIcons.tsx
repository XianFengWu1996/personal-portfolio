import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <ul className="flex uppercase text-xl cursor-pointer px-2 w-full mx-6">
      <Link href={'/'} className="pr-5">
        <FaLinkedin />
      </Link>
      <Link href={'/'} className="pr-5">
        <FaGithub />
      </Link>
      <Link href={'/'} className="pr-5">
        <AiOutlineMail />
      </Link>
    </ul>
  );
};

export default SocialIcons;

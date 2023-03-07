import { scrollTo } from '@/helper/Scroll';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface Props {
  onClose?: Function;
}
const SocialIcons = (props: Props) => {
  return (
    <ul className="flex uppercase text-xl cursor-pointer px-2 w-full mx-6">
      <Link
        href={'https://www.linkedin.com/in/xian-feng-wu/'}
        target="_blank"
        className="pr-5"
      >
        <FaLinkedin />
      </Link>
      <Link
        href={'https://github.com/XianFengWu1996'}
        target="_blank"
        className="pr-5"
      >
        <FaGithub />
      </Link>
      <div
        role={'link'}
        onClick={() => {
          scrollTo('contact');
          if (props.onClose) props.onClose();
        }}
        className="pr-5"
      >
        <AiOutlineMail />
      </div>
    </ul>
  );
};

export default SocialIcons;

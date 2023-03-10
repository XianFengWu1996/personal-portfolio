import { scrollTo } from '@/helper/Scroll';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface Props {
  onClose?: Function;
}
const SocialIcons = (props: Props) => {
  return (
    <ul className="flex items-center uppercase text-xl cursor-pointer px-2 w-full mx-6 social--icons">
      <div className="pr-5 fade--down">
        <Link
          href={'https://www.linkedin.com/in/xian-feng-wu/'}
          target="_blank"
        >
          <FaLinkedin />
        </Link>
      </div>

      <div className="pr-5 fade--down">
        <Link href={'https://github.com/XianFengWu1996'} target="_blank">
          <FaGithub />
        </Link>
      </div>
      <div
        role={'link'}
        onClick={() => {
          scrollTo('contact');
          if (props.onClose) props.onClose();
        }}
        className="pr-5 fade--down"
      >
        <AiOutlineMail />
      </div>
    </ul>
  );
};

export default SocialIcons;

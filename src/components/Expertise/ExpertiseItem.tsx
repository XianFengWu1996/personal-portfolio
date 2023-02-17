import { IoTriangleOutline } from 'react-icons/io5';

interface ExpertiseItemProps {
  skill: string;
}

const ExpertiseItem = ({ skill }: ExpertiseItemProps) => {
  return (
    <li className="flex justify-start items-center list-none">
      <IoTriangleOutline className="rotate-90 text-[#66fcf1] text-[.6rem]" />

      <p className="pl-5 text-md tracking-wide">{skill}</p>
    </li>
  );
};

export default ExpertiseItem;

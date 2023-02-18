import Link from 'next/link';
import { FaLaptopCode } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

interface Props {
  alignImageLeft: boolean;
  github: string;
  demoUrl?: string;
}

const ProjectSocial = ({ alignImageLeft, github, demoUrl }: Props) => {
  return (
    <div className={`flex ${alignImageLeft ? 'justify-end' : 'justify-start'}`}>
      <button className="text-[#66fcf1]">
        <Link href={github} target="_blank">
          <FiGithub size={22} />
        </Link>
      </button>
      {demoUrl && (
        <button className="text-[#66fcf1] ml-2">
          <Link href={demoUrl} target="_blank">
            <FaLaptopCode size={22} />
          </Link>
        </button>
      )}
    </div>
  );
};

export default ProjectSocial;

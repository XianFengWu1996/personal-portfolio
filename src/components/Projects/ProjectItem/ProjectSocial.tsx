import Link from 'next/link';
import { FaLaptopCode } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

interface Props {
  alignImageLeft: boolean;
  links: Project.Links;
}

const ProjectSocial = ({ alignImageLeft, links }: Props) => {
  return (
    <div className={`flex`}>
      <button className="text-[#66fcf1]">
        <Link href={links.github} target="_blank">
          <FiGithub size={22} />
        </Link>
      </button>
      {links.demoUrl && (
        <button className="text-[#66fcf1] ml-4">
          <Link href={links.demoUrl} target="_blank">
            <FaLaptopCode size={22} />
          </Link>
        </button>
      )}
    </div>
  );
};

export default ProjectSocial;

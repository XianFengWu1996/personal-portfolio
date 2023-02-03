import Image from 'next/image';
import Link from 'next/link';
import { FaLaptopCode } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { projectData } from './data';

const Projects = () => {
  return (
    <div className="w-full bg-inherit  px-16 py-10">
      <h1 className="title mx-auto my-5">Projects</h1>

      {projectData.map((project, index) => {
        return (
          <div
            key={index}
            className={`w-[80%] mt-10 mb-36  mx-auto relative flex ${
              project.alignImageLeft ? 'justify-end' : 'justify-start'
            } `}
          >
            <div className="z-10">
              <h1
                className={`${
                  project.alignImageLeft ? 'text-end' : 'text-start'
                } text-2xl my-3 text-[#66fcf1]`}
              >
                {project.name}
              </h1>
              <div
                className={`bg-[#061f32] w-[475px] h-[150px] shadow-lg z-10 p-4 text-[15px] ${
                  project.alignImageLeft ? 'text-end' : 'text-start'
                }`}
              >
                {project.content}
              </div>
              <div>
                {project.frontend.length > 0 && (
                  <div className="my-2">
                    <h1
                      className={`${
                        project.alignImageLeft ? 'text-end' : 'text-start'
                      } text-[#66fcf1]`}
                    >
                      Frontend
                    </h1>
                    <ul
                      className={`flex text-sm ${
                        project.alignImageLeft ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      {project.frontend.map((pro, i) => {
                        return (
                          <li
                            key={i}
                            className={project.alignImageLeft ? 'ml-2' : 'mr-2'}
                          >
                            {' '}
                            {pro}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
                {project.backend.length > 0 && (
                  <div className="my-2">
                    <h1
                      className={`${
                        project.alignImageLeft ? 'text-end' : 'text-start'
                      } text-[#66fcf1]`}
                    >
                      Backend
                    </h1>
                    <ul
                      className={`flex text-sm ${
                        project.alignImageLeft ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      {project.backend.map((pro, i) => {
                        return (
                          <li
                            key={i}
                            className={project.alignImageLeft ? 'ml-2' : 'mr-2'}
                          >
                            {pro}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
                <div
                  className={`flex ${
                    project.alignImageLeft ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <button className="text-[#66fcf1]">
                    <Link href={project.github} target="_blank">
                      <FiGithub size={22} />
                    </Link>
                  </button>
                  {project.demoUrl && (
                    <button className="text-[#66fcf1] ml-2">
                      <Link href={project.demoUrl} target="_blank">
                        <FaLaptopCode size={22} />
                      </Link>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* image */}
            <div
              className={`w-[60%] h-[375px] absolute ${
                project.alignImageLeft ? 'left-0' : 'right-0'
              } image-container`}
              onMouseEnter={(e) => {
                const image = e.currentTarget;

                const overlay = image.querySelector('.overlay');

                if (!overlay) return;

                overlay.setAttribute('style', 'opacity: 0; z-index:-1');
              }}
              onMouseLeave={(e) => {
                const image = e.currentTarget;

                const overlay = image.querySelector('.overlay');

                if (!overlay) return;

                overlay.setAttribute('style', 'opacity: 1');
              }}
            >
              <div className="overlay"></div>
              {project.clipImage && (
                <Image
                  className="image-clip"
                  src={project.clipImage}
                  alt="project1 home page"
                  fill
                />
              )}
              <Image
                className="image-below"
                src={project.image}
                alt="project2 home page"
                fill
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;

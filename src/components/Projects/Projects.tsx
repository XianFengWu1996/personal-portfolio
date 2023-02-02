import Image from 'next/image';
import { FaLaptopCode } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { projectData } from './data';

const Projects = () => {
  return (
    <div className="w-full h-full bg-inherit  px-16 py-10">
      <h1 className="title mx-auto my-5">Projects</h1>

      {projectData.map((project, index) => {
        return (
          <div
            key={index}
            className="w-[80%] mt-10 mb-36  mx-auto relative flex justify-end"
          >
            <div className="z-10">
              <h1 className="text-end text-2xl my-3 text-[#66fcf1]">
                {project.name}
              </h1>
              <div className="bg-[#061f32] w-[475px] h-[150px] shadow-lg z-10 text-end p-4 text-[15px]">
                {project.content}
              </div>
              <div>
                {project.frontend.length > 0 && (
                  <div className="my-2">
                    <h1 className="text-end text-[#66fcf1]">Frontend</h1>
                    <ul className="flex text-sm justify-end">
                      <li className="ml-2">NextJS</li>
                      <li className="ml-2">Typescript</li>
                      <li className="ml-2">Redux</li>
                      <li className="ml-2">Material UI</li>
                      <li className="ml-2">Firebase</li>
                    </ul>
                  </div>
                )}
                {project.backend.length > 0 && (
                  <div className="my-2">
                    <h1 className="text-end text-[#66fcf1]">Backend</h1>
                    <ul className="flex text-sm justify-end">
                      <li className="ml-2">Node </li>
                      <li className="ml-2">Express</li>
                      <li className="ml-2">Firebase Admin</li>
                      <li className="ml-2">Cloud Function</li>
                      <li className="ml-2">Nodemailer</li>
                    </ul>
                  </div>
                )}
                <div className="flex justify-end">
                  <button className="text-[#66fcf1]">
                    <FiGithub size={22} />
                  </button>
                  <button className="text-[#66fcf1] ml-2">
                    <FaLaptopCode size={22} />
                  </button>
                </div>
              </div>
            </div>

            {/* image */}
            <div
              className={`w-[60%] h-[375px] absolute ${project.imageAlignment}-0 image-container`}
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

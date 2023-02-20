import { projectData } from './data';
import ProjectItem from './ProjectItem/ProjectItem';

const Projects = () => {
  return (
    <section className="section">
      <h1 className="title mx-auto my-5">Projects</h1>

      <div className="grid grid-cols-1 place-items-center lg:grid-cols-3 lg:gap-x-[5%] lg:px-16 lg:items-start">
        {projectData.map((project, index) => {
          return <ProjectItem key={index} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;

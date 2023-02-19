import { projectData } from './data';
import ProjectItem from './ProjectItem/ProjectItem';

const Projects = () => {
  return (
    <section className="section">
      <h1 className="title mx-auto my-5">Projects</h1>

      <div className="flex flex-col items-center">
        {projectData.map((project, index) => {
          return <ProjectItem key={index} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;

import { projectData } from './data';
import ProjectItem from './ProjectItem/ProjectItem';

const Projects = () => {
  return (
    <section className="section">
      <h1 className="title mx-auto my-5">Projects</h1>

      {projectData.map((project, index) => {
        return <ProjectItem key={index} project={project} />;
      })}
    </section>
  );
};

export default Projects;

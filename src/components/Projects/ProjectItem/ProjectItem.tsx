import { ProjectData } from '../data';
import ProjectName from './ProjectName';
import ProjectContent from './ProjectContent';
import ProjectTechStack from './ProjectTechStack';
import ProjectSocial from './ProjectSocial';
import ProjectImages from './ProjectImages';

interface Props {
  project: ProjectData;
}

const ProjectItem = ({ project }: Props) => {
  return (
    <div
      className={`w-[80%] mt-20 mb-44  mx-auto relative flex ${
        project.alignImageLeft ? 'justify-end' : 'justify-start'
      } `}
    >
      {/* Text Contents  */}
      <div className="z-10">
        <ProjectName
          text={project.name}
          alignImageLeft={project.alignImageLeft}
        />

        <ProjectContent
          text={project.content}
          alignImageLeft={project.alignImageLeft}
        />

        <ProjectTechStack
          text="Frontend"
          list={project.frontend}
          alignImageLeft={project.alignImageLeft}
        />

        <ProjectTechStack
          text="Backend"
          list={project.backend}
          alignImageLeft={project.alignImageLeft}
        />

        <ProjectSocial
          demoUrl={project.demoUrl}
          github={project.github}
          alignImageLeft={project.alignImageLeft}
        />
      </div>

      {/* Images */}
      <ProjectImages
        image={project.image}
        clipImage={project.clipImage}
        alignImageLeft={project.alignImageLeft}
      />
    </div>
  );
};

export default ProjectItem;

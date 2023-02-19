import ProjectContent from './ProjectContent';
import ProjectImages from './ProjectImages';
import ProjectName from './ProjectName';
import ProjectSocial from './ProjectSocial';
import ProjectTechStack from './ProjectTechStack';

interface Props {
  project: ProjectData;
}

const ProjectItem = ({ project }: Props) => {
  return (
    <div className="bg-gray-800/80 max-w-sm min-h-fit rounded overflow-hidden shadow-lg mb-14">
      {/* Images */}
      <ProjectImages
        images={project.images}
        alignImageLeft={project.alignImageLeft}
      />
      <div className="px-6 py-4">
        {/* Text Contents  */}
        <div>
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
            list={project.techStack.frontend}
            alignImageLeft={project.alignImageLeft}
          />

          <ProjectTechStack
            text="Backend"
            list={project.techStack.backend}
            alignImageLeft={project.alignImageLeft}
          />

          <ProjectSocial
            links={project.links}
            alignImageLeft={project.alignImageLeft}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;

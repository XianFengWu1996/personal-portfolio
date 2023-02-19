interface Props {
  alignImageLeft: boolean;
  images: Project.Images;
}
const ProjectImages = ({ alignImageLeft, images }: Props) => {
  return (
    <div>
      <picture>
        {/* for mobile screen  */}
        <source srcSet={images.minified.src} media="(max-width: 600px)" />

        <img
          className="brightness-75"
          src={images.original.src}
          alt="project2 home page"
        />
      </picture>
    </div>
  );
};

export default ProjectImages;

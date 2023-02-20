interface Props {
  alignImageLeft: boolean;
  images: Project.Images;
}
const ProjectImages = ({ alignImageLeft, images }: Props) => {
  return (
    <div>
      <picture>
        {/* for mobile screen  */}
        <source srcSet={images.minified.src} media="(max-width: 768px)" />

        <img
          className="brightness-[.85] h-[14rem] hover:brightness-100 transition-all object-fit w-full lg:h-[12rem]"
          src={images.original.src}
          alt="project2 home page"
        />
      </picture>
    </div>
  );
};

export default ProjectImages;

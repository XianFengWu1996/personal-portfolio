import Image, { StaticImageData } from 'next/image';

interface Props {
  alignImageLeft: boolean;
  clipImage?: StaticImageData;
  image: StaticImageData;
}
const ProjectImages = ({ alignImageLeft, clipImage, image }: Props) => {
  return (
    <div
      className={`w-[100%] h-[375px] absolute ${
        alignImageLeft ? 'left-0' : 'right-0'
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
      {clipImage && (
        <Image
          className="image-clip"
          src={clipImage}
          alt="project1 home page"
          fill
        />
      )}
      <Image
        className="image-below"
        src={image}
        alt="project2 home page"
        fill
      />
    </div>
  );
};

export default ProjectImages;

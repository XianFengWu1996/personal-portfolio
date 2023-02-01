import Image from 'next/image';

const Projects = () => {
  return (
    <div className="w-full h-full bg-inherit  px-16 py-10">
      <h1 className="title mx-auto my-5">Projects</h1>

      {/* project 1 */}
      <div className="bg-slate-300 w-full">
        {/* image */}
        <div className="w-[55%] h-[375px] bg-red-50 relative image-container">
          <Image
            className="image-clip"
            src="/assets/images/projects/tc-home.png"
            alt="project1 home page"
            fill
          />
          <Image
            className="image-below"
            src="/assets/images/projects/tc-version2.png"
            alt="project2 home page"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

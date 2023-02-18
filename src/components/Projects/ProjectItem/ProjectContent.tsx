interface Props {
  text: string;
  alignImageLeft: boolean;
}

const ProjectContent = ({ alignImageLeft, text }: Props) => {
  return (
    <div
      className={`bg-[#061f32] w-[475px] h-[150px] shadow-lg z-10 p-4 text-[15px] ${
        alignImageLeft ? 'text-end' : 'text-start'
      }`}
    >
      {text}
    </div>
  );
};

export default ProjectContent;

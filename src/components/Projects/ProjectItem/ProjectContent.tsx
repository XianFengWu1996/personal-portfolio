interface Props {
  text: string;
  alignImageLeft: boolean;
}

const ProjectContent = ({ alignImageLeft, text }: Props) => {
  return (
    <div
      className={`w-[100%] min-h-fit text-[0.85rem] md:text-[0.95rem] text-start tracking-wide`}
    >
      {text}
    </div>
  );
};

export default ProjectContent;

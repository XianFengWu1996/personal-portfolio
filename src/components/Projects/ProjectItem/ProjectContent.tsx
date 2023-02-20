interface Props {
  text: string;
  alignImageLeft: boolean;
}

const ProjectContent = ({ alignImageLeft, text }: Props) => {
  return (
    <div
      className={`w-[100%] min-h-full text-[0.85rem] md:text-[0.95rem] lg:text-[0.85rem] text-start tracking-wide slide--top-hide`}
    >
      {text}
    </div>
  );
};

export default ProjectContent;

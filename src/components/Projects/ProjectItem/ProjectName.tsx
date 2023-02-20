interface Props {
  text: string;
  alignImageLeft: boolean;
}

const ProjectName = ({ text, alignImageLeft }: Props) => {
  return (
    <h1 className={'text-xl my-3 md:text-2xl lg:my-1 text-[#66fcf1]'}>
      {text}
    </h1>
  );
};

export default ProjectName;

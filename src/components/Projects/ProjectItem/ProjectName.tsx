interface Props {
  text: string;
  alignImageLeft: boolean;
}

const ProjectName = ({ text, alignImageLeft }: Props) => {
  return <h1 className={'text-xl my-3 text-[#66fcf1]'}>{text}</h1>;
};

export default ProjectName;

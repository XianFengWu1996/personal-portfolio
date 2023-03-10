interface Props {
  text: string;
}

const SectionHeader = ({ text }: Props) => {
  return (
    <div className="flex justify-center items-center">
      <h1 className="section--title mb-6">{text}</h1>
    </div>
  );
};

export default SectionHeader;

interface Props {
  text: string;
}

const SectionHeader = ({ text }: Props) => {
  return (
    <div className="flex justify-center items-center mt-20 mb-3">
      <h1 className="title mb-6">{text}</h1>
    </div>
  );
};

export default SectionHeader;

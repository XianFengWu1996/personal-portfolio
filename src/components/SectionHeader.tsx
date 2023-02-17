interface Props {
  text: string;
}

const SectionHeader = ({ text }: Props) => {
  return (
    <div className="flex justify-center items-center px-16 py-10">
      <h1 className="title mb-6">{text}</h1>
    </div>
  );
};

export default SectionHeader;

import ExpertiseItem from './ExpertiseItem';

interface ExpertiseListProps {
  list: string[];
}

const ExpertiseList = ({ list }: ExpertiseListProps) => {
  return (
    <ul className="grid grid-cols-2 gap-x-5 min-w-[325px]">
      {list.map((skill, index) => {
        return <ExpertiseItem key={index} skill={skill} />;
      })}
    </ul>
  );
};

export default ExpertiseList;

import ExpertiseItem from './ExpertiseItem';

interface ExpertiseListProps {
  list: string[];
  type: 'skill' | 'package';
}

const ExpertiseList = ({ list, type }: ExpertiseListProps) => {
  const style =
    type === 'skill'
      ? 'grid grid-cols-2 gap-x-5 min-w-[325px] lg:flex lg:flex-col lg:items-start lg:min-w-fit'
      : 'grid grid-cols-2 gap-x-5 min-w-[325px] lg:grid-cols-3 lg:justify-items-center lg:w-[100%]';
  return (
    <ul className={style}>
      {list.map((skill, index) => {
        return <ExpertiseItem key={index} skill={skill} />;
      })}
    </ul>
  );
};

export default ExpertiseList;

interface Props {
  list: string[];
  text: string;
  alignImageLeft: boolean;
}

const ProjectTechStack = ({ list, alignImageLeft, text }: Props) => {
  return (
    <div>
      {list.length > 0 && (
        <div className="my-2">
          <h1
            className={`${
              alignImageLeft ? 'text-end' : 'text-start'
            } text-[#66fcf1]`}
          >
            {text}
          </h1>
          <ul
            className={`flex text-sm ${
              alignImageLeft ? 'justify-end' : 'justify-start'
            }`}
          >
            {list.map((pro, i) => {
              return (
                <li key={i} className={alignImageLeft ? 'ml-2' : 'mr-2'}>
                  {pro}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProjectTechStack;

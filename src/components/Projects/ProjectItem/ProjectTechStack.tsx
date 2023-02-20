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
            className={`text-[#66fcf1] text-[0.85rem] md:text-[0.95rem] mb-2 mt-1`}
          >
            {text}
          </h1>
          <ul className={`flex flex-wrap text-[0.70rem]`}>
            {list.map((pro, i) => {
              return (
                <li
                  key={i}
                  className={
                    'mr-2 mb-2 inline-block bg-[#d5fdfa] rounded-full px-3 py-[0.3rem] text-gray-900 md:text-[0.8rem] lg:text-[0.65rem] slide--top-hide'
                  }
                >
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

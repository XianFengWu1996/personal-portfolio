const expertise = {
  frontEnd: [
    {
      name: 'HTML',
    },
  ],
};

const Expertise = () => {
  return (
    <div className="w-full min-h-full bg-inherit p-24 flex flex-col justify-start items-center">
      <h1 className="title mb-10">Expertise</h1>

      {/* version 1 */}
      {/* <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-4 lg:gap-0 w-full">
        <div className="p-4 min-h-[250px] border-2 lg:border-r-0  flex flex-col">
          <div className="flex items-center">
            <FaReact size={30} />
            <p className="mx-2 text-2xl">Frontend</p>
          </div>
          <ul>
            <li className="flex items-center">
              <GiSpiderWeb size={12} />
              <p className="px-2">HTML</p>
            </li>
            <li className="flex items-center">
              <GiSpiderWeb size={12} />
              <p className="px-2">CSS</p>
            </li>
            <li className="flex items-center">
              <GiSpiderWeb size={12} />
              <p className="px-2">Javascript</p>
            </li>
            <li className="flex items-center">
              <GiSpiderWeb size={12} />
              <p className="px-2">HTML</p>
            </li>
          </ul>
        </div>
        <div className="p-4 min-h-[250px] border-2  flex flex-col">
          <div className="flex items-center">
            <FiServer size={30} />
            <p className="mx-2 text-2xl">Backend</p>
          </div>

          <ul>
            <BiGame size={8} />
          </ul>
        </div>
        <div className="p-4 min-h-[250px] border-2  lg:border-l-0  flex flex-col">
          <div className="flex items-center">
            <CiMobile3 size={30} />
            <p className="mx-2 text-2xl">Mobile</p>
          </div>

          <ul>
            <BiGame size={8} />
          </ul>
        </div>

        <div className="p-4 min-h-[250px] border-2  lg:border-l-0  flex flex-col">
          <div className="flex items-center">
            <IoGameControllerOutline size={30} />
            <p className="mx-2 text-2xl">Gaming</p>
          </div>

          <ul className="flex flex-col justify-start">
            <li className="flex items-center">
              <BiGame size={12} />
              <p className="px-2">Unity</p>
            </li>
            <li className="flex items-center">
              <BiGame size={12} />
              <p className="px-2">C#</p>
            </li>
            <li className="flex items-center">
              <BiGame size={12} />
              <p className="px-2">Unreal Engine</p>
            </li>
            <li className="flex items-center">
              <BiGame size={12} />
              <p className="px-2">C++</p>
            </li>
          </ul>
        </div>
      </div> */}

      {/* version 2 */}
    </div>
  );
};

export default Expertise;

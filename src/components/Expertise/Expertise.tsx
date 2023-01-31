import { IoTriangleOutline } from 'react-icons/io5';
import { data, packages } from './data';

const Expertise = () => {
  return (
    <div className="w-full h-full bg-gray-800 px-16 py-10">
      <div className="flex justify-center items-center">
        <h1 className="title mb-6">Expertise</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {data.map((d, i) => {
          return (
            <div key={i} className="flex flex-col items-center justify-start">
              <div>
                <d.Icon size={25} />
              </div>
              <h1 className="my-2">{d.name}</h1>

              <ul>
                {d.skills.map((s, index) => {
                  return (
                    <div key={index} className="flex items-center">
                      <IoTriangleOutline
                        size={8}
                        className="rotate-90 text-[#66fcf1]"
                      />
                      <li className="pl-2">{s}</li>
                    </div>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      {/* outter grid */}
      <div className="grid grid-cols-1 mt-4">
        {/* to layout the header and content vertically */}
        <div className="flex flex-col items-center">
          {/* header */}
          <div>
            <packages.Icon size={25} />
          </div>
          <h1 className="my-2">{packages.name}</h1>
          {/* content */}
          <div className="grid grid-cols-3 w-full">
            {packages.skills.map((s, i) => {
              return (
                <div key={i} className="flex justify-center items-center">
                  <IoTriangleOutline
                    size={8}
                    className="rotate-90 text-[#66fcf1]"
                  />
                  <div className="pl-2">{s}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;

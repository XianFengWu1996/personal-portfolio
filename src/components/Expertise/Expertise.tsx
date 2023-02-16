import { useEffect } from 'react';
import { IoTriangleOutline } from 'react-icons/io5';
import { data, packages } from './data';

const Expertise = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('show', entry.isIntersecting);
      });
    });

    const leftItems = document.querySelectorAll('.slide--left-hide');
    const rightItems = document.querySelectorAll('.slide--right-hide');

    leftItems.forEach((item) => observer.observe(item));
    rightItems.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="expertise" className="w-full h-full my-16">
      <div className="flex justify-center items-center px-16 py-10">
        <h1 className="title mb-6">Expertise</h1>
      </div>

      <div className="flex justify-around items-start">
        {data.map((d, i) => {
          return (
            <div
              key={i}
              className="slide--left-hide expertise--item flex flex-col items-center justify-start"
            >
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
      <div className="slide--right-hide mt-10">
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
    </section>
  );
};

export default Expertise;

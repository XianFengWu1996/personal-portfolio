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
    <section id="expertise" className="container min-h-screen my-16 px-16">
      <div className="flex justify-center items-center px-16 py-10">
        <h1 className="title mb-6">Expertise</h1>
      </div>

      <div className="flex flex-col justify-center items-center">
        {data.map((d, i) => {
          return (
            <div
              key={i}
              className={`slide--${
                i % 2 == 0 ? 'left' : 'right'
              }-hide expertise--item flex flex-col items-center mb-10`}
            >
              <div>
                <d.Icon size={25} />
              </div>
              <h1 className="my-2 text-2xl tracking-widest">{d.name}</h1>

              <ul className="grid grid-cols-2 gap-x-5 min-w-[300px]">
                {d.skills.map((s, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-start"
                    >
                      <IoTriangleOutline className="rotate-90 text-[#66fcf1] text-[.6rem]" />
                      <li className="pl-5 text-md tracking-wide">{s}</li>
                    </div>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      {/* outter grid */}
      <div className="slide--right-hide">
        {/* to layout the header and content vertically */}
        <div className="flex flex-col items-center">
          {/* header */}
          <div>
            <packages.Icon size={25} />
          </div>
          <h1 className="my-2">{packages.name}</h1>
          {/* content */}
          <ul className="grid grid-cols-2 gap-x-5 min-w-[300px]">
            {packages.skills.map((s, i) => {
              return (
                <li
                  key={i}
                  className="flex justify-start items-center list-none"
                >
                  <IoTriangleOutline className="rotate-90 text-[#66fcf1] text-[.6rem]" />

                  <p className="pl-5 text-md tracking-wide">{s}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Expertise;

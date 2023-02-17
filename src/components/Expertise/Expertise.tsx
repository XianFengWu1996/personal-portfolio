import { useEffect } from 'react';
import SectionHeader from '../SectionHeader';
import { Expertises, packages } from './data';
import ExpertiseList from './ExpertiseList';

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
    <section id="expertise" className="container min-h-screen my-16">
      <SectionHeader text="Expertise" />

      <div className="flex flex-col justify-center items-center">
        {Expertises.map((Data, i) => {
          return (
            <div
              key={i}
              className={`slide--${
                i % 2 == 0 ? 'left' : 'right'
              }-hide expertise--item flex flex-col items-center mb-10`}
            >
              <Data.Icon size={25} />
              <h1 className="my-2 text-2xl tracking-wider">{Data.name}</h1>

              <ExpertiseList list={Data.skills} />
            </div>
          );
        })}
      </div>

      {/* outter grid */}
      <div className="slide--right-hide">
        {/* to layout the header and content vertically */}
        <div className="flex flex-col items-center">
          {/* header */}
          <packages.Icon size={25} />
          <h1 className="my-2">{packages.name}</h1>
          {/* content */}
          <ExpertiseList list={packages.skills} />
        </div>
      </div>
    </section>
  );
};

export default Expertise;

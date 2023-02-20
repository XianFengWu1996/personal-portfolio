import { useObserverToggleClass } from '@/hooks/useIntersectionObserver';
import SectionHeader from '../SectionHeader';
import { Expertises, packages } from './data';
import ExpertiseList from './ExpertiseList';

const Expertise = () => {
  useObserverToggleClass({
    classlist: ['.slide--left-hide', '.slide--right-hide'],
    toggleClass: 'show-x',
  });

  return (
    <section id="expertise" className="section">
      <SectionHeader text="Expertise" />

      {/* main skills */}
      <div className="flex flex-col md:flex-row md:justify-around lg:flex-col">
        <div className="flex flex-col justify-center items-center lg:flex-row lg:items-start lg:justify-around">
          {Expertises.map((Data, i) => {
            return (
              <div
                key={i}
                className="slide--left-hide expertise--item flex flex-col items-center mb-10"
              >
                {/* header */}
                <Data.Icon size={25} className="text-[#66fcf1]" />
                <h1 className="my-2 text-2xl tracking-wider ">{Data.name}</h1>

                <ExpertiseList list={Data.skills} type="skill" />
              </div>
            );
          })}
        </div>

        {/* package */}
        <div className="slide--right-hide">
          <div className="flex flex-col items-center">
            {/* header */}
            <packages.Icon size={25} className="text-[#66fcf1]" />
            <h1 className="my-2 text-xl tracking-wider ">{packages.name}</h1>
            {/* content */}
            <ExpertiseList list={packages.skills} type="package" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;

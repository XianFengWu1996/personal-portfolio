import { HiOutlineMapPin } from 'react-icons/hi2';
import { TimelineData } from './data';

const AboutMe = () => {
  return (
    <div className="min-h-full bg-inherit">
      <h1 className="title mx-auto">About Me</h1>

      {/* content */}
      <div className="w-full bg-inherit  px-16 py-10">
        <div className="timeline">
          {TimelineData.map((timeline, i) => {
            return (
              <div
                data-background-icon={HiOutlineMapPin}
                className={`container ${timeline.alignment}`}
                key={i}
              >
                <div className="text-box">
                  <h2 className="text-[#66fcf1] capitalize text-lg">
                    {timeline.title}
                  </h2>
                  <small className="italic">{timeline.date}</small>

                  <p className="text-sm">{timeline.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

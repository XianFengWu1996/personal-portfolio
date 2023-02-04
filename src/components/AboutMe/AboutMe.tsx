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
              <div className={`container ${timeline.alignment}`} key={i}>
                <div className="text-box">
                  <h2>{timeline.title}</h2>
                  <small>{timeline.date}</small>

                  <p>{timeline.content}</p>
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

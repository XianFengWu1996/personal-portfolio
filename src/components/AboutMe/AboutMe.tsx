import { useObserver } from '@/hooks/useIntersectionObserver';
import { TimelineData } from './data';

const AboutMe = () => {
  useObserver({
    watchList: ['.timeline--content-text'],
    callback: (entries) => {
      const container = document.querySelector('.timeline--container');
      if (!container) return;
      const containerHeight = container.clientHeight;

      entries.map((entry) => {
        // variable that is different every iteration
        const elHeight = entry.target.clientHeight; // the height of the element
        // the current height of the timeline display line
        const lineEl = document.getElementById('timeline--line');
        if (!lineEl) return;
        let lineHeight = Number(lineEl.style.height.replace('px', ''));

        if (lineHeight < containerHeight && entry.isIntersecting) {
          lineEl.style.height = (lineHeight + elHeight).toString() + 'px';
        }
      });
    },
    rootMargin: '-35px',
  });

  return (
    <div className="min-h-full ">
      <h1 className="title mx-auto">About Me</h1>

      {/* content */}
      <div className="w-full px-5 py-10">
        <div className="timeline--container">
          <span id="timeline--fill">
            <span id="timeline--line"></span>
          </span>

          <div className="timeline--content">
            {TimelineData.map((timeline, i) => {
              return (
                <div key={i} className="timeline--content-text">
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
    </div>
  );
};

export default AboutMe;

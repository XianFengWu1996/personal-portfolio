import { useObserver } from '@/hooks/useIntersectionObserver';
import { useEffect } from 'react';
import { TimelineData } from './data';

const AboutMe = () => {
  // the observer will monitor the whether or not the each element is in view or not
  // once the element is view, we want to animate the line element to match the element
  useObserver({
    watchList: ['.timeline--content-text'],
    callback: (entries, obs) => {
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
          obs.unobserve(entry.target);
        }
      });
    },
    rootMargin: '-35px',
  });

  // handling the edge case when the window get resize
  // as the screen gets wider, there will be less height due wider screen to place content
  // ex. an element with text in mobile screen can be 300px in height and 300px in width
  // but as screen get resize to 600px in width, the height might just be around 150px, since there are more space horizontally
  // the observer above is meant to handle the height of the line for the timeline as it gets scrolled
  // however, the line might be too long if the user resize the window when the line complete the animation
  function resizeListener() {
    // grab the documents required
    // the content container for the timeline
    const textContent = document.querySelector('.timeline--content');
    if (!textContent) return;

    // the actually line for the timeline
    const timelineLine = document.getElementById('timeline--line');
    if (!timelineLine) return;

    // .style.height return the string format with px ex. "100px"
    // we will need the number version of the height to do comparison
    let lineHeight: number = Number(
      timelineLine.style.height.replace('px', '')
    );

    // if the lineHeight became longer than the container height
    timelineLine.style.height = `${textContent.clientHeight}px`;
  }
  // add a listen for line during window resizing to handle timeline line edge case
  useEffect(() => {
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return (
    <div className="min-h-full ">
      <h1 className="title mx-auto">About Me</h1>

      <div className="w-full px-5 py-10">
        <div className="timeline--container">
          {/* timeline line */}
          <span id="timeline--fill">
            <span id="timeline--line"></span>
          </span>

          {/* timeline contents */}
          <div className="timeline--content h-fit">
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

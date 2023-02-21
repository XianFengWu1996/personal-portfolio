import { useObserver } from '@/hooks/useIntersectionObserver';
import { useEffect } from 'react';
import { TimelineData } from './data';

const AboutMe = () => {
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
  // this is to handle the edge case where the window get resize and the element wider but shorter in height
  // for example the element might be 300px height because its in mobile size, but as the screen
  // get resize and become larger, there are more space for the content, therefore the element height will be less
  // but the timeline height stay the same and be much longer than the container height
  // the solution is to listen to the window resize event, and when the line height surpass the container height
  // we will set the line height to the container height
  // if the line height is still transition then it will not cause a problem, the problem is when the line finish
  // transition and the window gets resize

  function resizeListener(this: Window, ev: UIEvent) {
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
  // add a listen for line during window resizing
  useEffect(() => {
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return (
    <div className="min-h-full ">
      <h1 className="title mx-auto">About Me</h1>

      {/* content */}
      <div className="w-full px-5 py-10">
        <div className="timeline--container">
          <span id="timeline--fill">
            <span id="timeline--line"></span>
          </span>

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

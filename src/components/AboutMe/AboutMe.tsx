import { useObserver } from '@/hooks/useIntersectionObserver';
import { useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import Dialog from '../Dialog';
import DesktopTimeline from './DesktopTimeline';
import MobileTimeline from './MobileTimeline';

const AboutMe = () => {
  // the observer will monitor the whether or not the each element is in view or not
  // once the element is view, we want to animate the line element to match the element

  // watch the upward scroll
  useObserver({
    watchList: ['.timeline--text-left', '.timeline--text-right'],
    callback: (entries, obs) => {
      // when the window width goes above 1024, we deemed it to be a desktop size
      const desktop = window.innerWidth > 1024;

      entries.map((entry) => {
        // we are watching for when the user scroll up, if the element is intersecting with the screen
        // get the index of the element

        if (entry.boundingClientRect.bottom > 0 && entry.isIntersecting) {
          const index = Number(
            entry.target.getAttribute('data-index')?.valueOf()
          );

          // start the animation process
          // perform the animation
          entry.target.animate(
            {
              opacity: [0, 1],
              filter: ['blur(2px)', 'blur(0px)'],
              transform: desktop
                ? [
                    `translateX(${index % 2 === 0 ? '100%' : '-100%'})`,
                    'translateX(0)',
                  ]
                : ['translate(100%)', 'translateX(0)'],
            },
            500
          );

          const elHeight = entry.target.clientHeight; // the height of the element

          // get the line for the timeline element
          const lineEl = document.getElementById(
            `timeline--line-${desktop ? 'desktop' : 'mobile'}`
          );
          if (!lineEl) return;

          const calcIndex = index + 1;

          // base on the index, multiply the index by the element height to get the current line height,
          // however, since we added 1 to the index, the line will never reach 0, therefore when the last element is reach
          // also set the new line height to 0
          let newLineHeight;
          if (calcIndex > 1) {
            newLineHeight = calcIndex * elHeight;
          } else {
            newLineHeight = 0;
          }

          // apply the new line height to the style
          lineEl.style.height = `${newLineHeight}px`;
        }
      });
    },
    rootMargin: '-75px 0px 0px 0px',
  });

  // downward scroll
  useObserver({
    watchList: ['.timeline--text-left', '.timeline--text-right'],
    callback: (entries, obs) => {
      // when the window width goes above 1024, we deemed it to be a desktop size
      const desktop = window.innerWidth > 1024;

      entries.map((entry) => {
        if (entry.boundingClientRect.top < 0 && entry.isIntersecting) {
          // get the index of the element and add one to the index, because we want the first element to be 1 and not 0
          const index = Number(
            entry.target.getAttribute('data-index')?.valueOf()
          );
          // perform the animation
          entry.target.animate(
            {
              opacity: [0, 1],
              filter: ['blur(2px)', 'blur(0px)'],
              transform: desktop
                ? [
                    `translateX(${index % 2 === 0 ? '-100%' : '100%'})`,
                    'translateX(0)',
                  ]
                : ['translate(100%)', 'translateX(0)'],
            },
            500
          );

          // the height of the element that is being tracked
          const elHeight = entry.target.clientHeight;

          // the actual line element for the timeline
          const lineEl = document.getElementById(
            `timeline--line-${desktop ? 'desktop' : 'mobile'}`
          );
          if (!lineEl) return;

          // multiply the element by the index to get the current line height
          let newLineHeight = (index + 1) * elHeight;
          lineEl.style.height = `${newLineHeight}px`;
        }
      });
    },
    rootMargin: '0px 0px -20px 0px',
  });

  const [open, setOpen] = useState<boolean>(false);
  const [data, setData] = useState<TimeLine>();

  const handleOpen = (item: TimeLine) => {
    setOpen(true); // open the dialog
    setData(item); // set the data for the dialog
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section id="aboutme" className="min-h-full overflow-x-clip mb-20">
      <Dialog open={open} onClose={handleClose}>
        <div className="px-8 py-5">
          <IoArrowBack
            size={50}
            className="hover:bg-gray-200 rounded-full p-3 text-2xl cursor-pointer"
            onClick={handleClose}
          />
          <div className="h-full my-2">
            <h1 className="text-2xl my-2">{data?.title}</h1>
            <small className="my-2">{data?.date}</small>
            <p className="my-2 text-sm">{data?.content}</p>
          </div>
        </div>
      </Dialog>
      <h1 className="section--title mx-auto">About Me</h1>

      <MobileTimeline handleOpen={handleOpen} />
      <DesktopTimeline handleOpen={handleOpen} />
    </section>
  );
};

export default AboutMe;

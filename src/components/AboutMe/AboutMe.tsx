import { useObserver } from '@/hooks/useIntersectionObserver';
import { useEffect, useState } from 'react';
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

      // base on the desktop size, we will selected the container for that size
      const container = document.querySelector(
        `.timeline--container-${desktop ? 'desktop' : 'mobile'}`
      );
      if (!container) return; // return if the container is not found
      const containerHeight = container.clientHeight;

      entries.map((entry) => {
        // variable that is different every iteration
        const elHeight = entry.target.clientHeight; // the height of the element

        // the line for the timeline element
        const lineEl = document.getElementById(
          `timeline--line-${desktop ? 'desktop' : 'mobile'}`
        );
        if (!lineEl) return;

        if (entry.boundingClientRect.top < 0 && entry.isIntersecting) {
          // the current height of the timeline display line
          let lineHeight = Number(lineEl.style.height.replace('px', ''));
          entry.target.animate(
            {
              opacity: [0, 1],
              filter: ['blur(2px)', 'blur(0px)'],
              transform: ['translateX(100%)', 'translateX(0)'],
            },
            1000
          );

          const index =
            Number(entry.target.getAttribute('data-index')?.valueOf()) + 1;

          console.log(index);
        }
      });
    },
    rootMargin: '-75px 0px 0px 0px',
  });

  useObserver({
    watchList: ['.timeline--text-left', '.timeline--text-right'],
    callback: (entries, obs) => {
      // when the window width goes above 1024, we deemed it to be a desktop size
      const desktop = window.innerWidth > 1024;

      // base on the desktop size, we will selected the container for that size
      const container = document.querySelector(
        `.timeline--container-${desktop ? 'desktop' : 'mobile'}`
      );
      if (!container) return; // return if the container is not found
      const containerHeight = container.clientHeight;

      entries.map((entry) => {
        // variable that is different every iteration
        const elHeight = entry.target.clientHeight; // the height of the element

        // the line for the timeline element
        const lineEl = document.getElementById(
          `timeline--line-${desktop ? 'desktop' : 'mobile'}`
        );
        if (!lineEl) return;

        if (entry.boundingClientRect.top > 0 && entry.isIntersecting) {
          console.log(entry.isIntersecting);
          entry.target.animate(
            {
              opacity: [0, 1],
              filter: ['blur(2px)', 'blur(0px)'],
              transform: ['translateX(100%)', 'translateX(0)'],
            },
            1000
          );
        }
      });
    },
    rootMargin: '0px 0px -20px 0px',
  });

  // handling the edge case when the window get resize
  // as the screen gets wider, there will be less height due wider screen to place content
  // ex. an element with text in mobile screen can be 300px in height and 300px in width
  // but as screen get resize to 600px in width, the height might just be around 150px, since there are more space horizontally
  // the observer above is meant to handle the height of the line for the timeline as it gets scrolled
  // however, the line might be too long if the user resize the window when the line complete the animation
  function resizeListener(this: Window) {
    // grab the documents required
    // the content container for the timeline
    const textContent = document.querySelector(`.timeline--content`);
    if (!textContent) return;

    // the actually line for the timeline
    const timelineLine = document.getElementById(`timeline--line-mobile`);
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
      <h1 className="title mx-auto">About Me</h1>

      <MobileTimeline handleOpen={handleOpen} />
      <DesktopTimeline handleOpen={handleOpen} />
    </section>
  );
};

export default AboutMe;

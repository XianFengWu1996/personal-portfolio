import { Dispatch, RefObject, SetStateAction } from 'react';
import { opacityAnimation } from './Animation';

export const handleDialogOpenClose = async (
  ref: RefObject<HTMLDivElement>,
  opened: boolean,
  setOpened: Dispatch<SetStateAction<boolean>>,
  open?: boolean
) => {
  const animationDuration = 300;

  // fidn the document for content and overlay
  if (!ref.current) return;
  const element = ref.current;
  const content = element.querySelector('.dialog--content');
  const overlay = element.querySelector('.dialog--overlay');

  if (!content || !overlay) return;
  // listen for the dialog open
  if (open) {
    element.style.display = 'block';
    opacityAnimation({
      el: overlay,
      opacity: [0, 1],
      options: {
        duration: animationDuration,
      },
    });

    opacityAnimation({
      el: content,
      opacity: [0, 1],
      options: {
        duration: animationDuration,
      },
    });

    setOpened(true);

    // disable scrolling for the body
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100%';
  } else {
    if (opened) {
      opacityAnimation({
        el: overlay,
        opacity: [1, 0],
        options: {
          duration: animationDuration,
        },
      });

      let anim = opacityAnimation({
        el: content,
        opacity: [1, 0],
        options: {
          duration: animationDuration,
        },
      });

      if (await anim.finished) {
        element.style.display = 'none';
        // enable scrolling for the body
        document.body.style.overflow = 'auto';
        document.body.style.height = 'auto';
      }
    }
  }
};

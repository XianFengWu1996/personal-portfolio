import { useEffect, useRef, useState } from 'react';

const Dialog = ({
  open,
  onClose,
  bgColor = '#f8f8f8',
  textColor = '#000',
  width = '600px',
  height = 'max-content',
  styles,
  children,
  classes,
  fullScreen,
  id,
}: Dialog) => {
  const ref = useRef<HTMLDivElement>(null);
  const [opened, setOpened] = useState<boolean>(false);

  // STOP SCROLLING
  useEffect(() => {
    const handleElementOpenAndClose = async () => {
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

        content.animate(
          {
            opacity: [0, 1],
          },
          {
            duration: animationDuration,
          }
        );

        overlay.animate(
          {
            opacity: [0, 1],
          },
          {
            duration: animationDuration,
          }
        );

        setOpened(true);

        // disable scrolling for the body
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100%';
      } else {
        if (opened) {
          overlay.animate(
            {
              opacity: [1, 0],
            },
            {
              duration: animationDuration,
            }
          );

          let anim = content.animate(
            {
              opacity: [1, 0],
            },
            {
              duration: animationDuration,
            }
          );

          if (await anim.finished) {
            element.style.display = 'none';
            // enable scrolling for the body
            document.body.style.overflow = 'auto';
            document.body.style.height = 'auto';
          }
        }
      }
    };

    handleElementOpenAndClose();
  }, [open, opened]);

  const classString = () => {
    let s = '';

    classes?.map((c) => {
      s += `${c} `;
    });
    return s;
  };

  useEffect(() => {
    function escapeKeyListener(this: Document, ev: KeyboardEvent) {
      if (ev.key == 'Escape') {
        onClose!();
      }
    }

    document.addEventListener('keydown', escapeKeyListener);

    return () => {
      document.removeEventListener('keydown', escapeKeyListener);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      id={id}
      className="dialog"
      ref={ref}
      style={{ display: 'none' }}
    >
      <div
        style={{
          background: bgColor,
          color: textColor,
          minWidth: fullScreen ? '100%' : width,
          minHeight: fullScreen ? '100%' : height,
          borderRadius: fullScreen ? 0 : '0.75rem',
          ...styles,
        }}
        className={`dialog--content ${classString()}`}
      >
        {children}
      </div>

      <div className="dialog--overlay" onClick={onClose}></div>
    </div>
  );
};

export default Dialog;

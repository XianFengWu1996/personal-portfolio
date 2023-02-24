import { useEffect, useRef, useState } from 'react';

const Dialog = (props: Dialog) => {
  const ref = useRef<HTMLDivElement>(null);
  const [opened, setOpened] = useState<boolean>(false);

  // STOP SCROLLING
  useEffect(() => {
    const handleElementOpenAndClose = async () => {
      const animationDuration = 300;

      // fidn the document for content and overlay
      if (!ref.current) return;
      const element = ref.current;
      const content = element.querySelector('#dialog--content');
      const overlay = element.querySelector('#dialog--overlay');

      if (!content || !overlay) return;

      // listen for the dialog open
      if (props.open) {
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
  }, [props, opened]);

  const classString = () => {
    let s = '';

    props.classes?.map((c) => {
      s += `${c} `;
    });
    return s;
  };

  useEffect(() => {
    function escapeKeyListener(this: Document, ev: KeyboardEvent) {
      console.log(ev.key);
      if (ev.key == 'Escape') {
        if (props.onClose) props.onClose();
      }
    }

    document.addEventListener('keydown', escapeKeyListener);

    return () => {
      document.removeEventListener('keydown', escapeKeyListener);
    };
  }, [props]);

  return (
    <div role="dialog" id="dialog" ref={ref} style={{ display: 'none' }}>
      <div
        id="dialog--content"
        style={{
          background: props.bgColor ?? '#f8f8f8',
          color: props.textColor ?? '#000',
          minWidth: props.fullScreen ? '100%' : props.width ?? '50%',
          minHeight: props.fullScreen ? '100%' : props.height ?? 'max-content',
          borderRadius: props.fullScreen ? 0 : '0.75rem',
          ...props.styles,
        }}
        className={`${classString()}`}
      >
        {props.children}
      </div>

      <div id="dialog--overlay" onClick={props.onClose}></div>
    </div>
  );
};

export default Dialog;

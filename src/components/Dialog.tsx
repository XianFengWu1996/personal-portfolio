import { Fragment, useEffect } from 'react';

const Dialog = (props: Dialog) => {
  useEffect(() => {
    if (props.open) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    }
  }, [props.open]);

  const classString = () => {
    let s = '';

    props.classes?.map((c) => {
      s += `${c} `;
    });
    return s;
  };

  return props.open ? (
    <div>
      <div
        style={{
          background: props.bgColor ?? '#f8f8f8',
          color: props.textColor ?? '#000',
          minWidth: props.fullScreen ? '100%' : props.width ?? '50%',
          minHeight: props.fullScreen ? '100%' : props.height ?? 'max-content',
          borderRadius: props.fullScreen ? 0 : '0.75rem',
          ...props.styles,
        }}
        className={`dialog ${classString()}`}
      >
        {props.children}
      </div>

      <div className="overlay w-screen h-screen" onClick={props.onClose}></div>
    </div>
  ) : (
    <Fragment />
  );
};

export default Dialog;

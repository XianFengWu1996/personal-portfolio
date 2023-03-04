import { handleDialogOpenClose } from '@/helper/Dialog';
import { genClassList } from '@/helper/Utils';
import { useEscapeListener } from '@/hooks/useEscapeListener';
import { useEffect, useRef, useState } from 'react';

const Dialog = ({
  open,
  onClose,
  bgColor = '#f8f8f8',
  textColor = '#000',
  width = '600px',
  height = '70vh',
  styles,
  children,
  classes,
  fullScreen,
  id,
}: Dialog) => {
  const ref = useRef<HTMLDivElement>(null);
  const [opened, setOpened] = useState<boolean>(false);

  // listens to the escape key
  useEscapeListener(onClose);

  useEffect(() => {
    handleDialogOpenClose(ref, opened, setOpened, open);
  }, [open, opened]);

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
          width: fullScreen ? '100%' : width,
          minHeight: fullScreen ? '100%' : height,
          borderRadius: fullScreen ? 0 : '0.75rem',
          ...styles,
        }}
        className={`dialog--content ${genClassList(classes)}`}
      >
        {children}
      </div>

      <div className="dialog--overlay" onClick={onClose}></div>
    </div>
  );
};

export default Dialog;

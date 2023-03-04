import { useEffect } from 'react';

export const useEscapeListener = (onClose?: Function) => {
  useEffect(() => {
    function escapeKeyListener(this: Document, ev: KeyboardEvent) {
      if (ev.key == 'Escape') {
        if (onClose) onClose();
      }
    }

    document.addEventListener('keydown', escapeKeyListener);

    return () => {
      document.removeEventListener('keydown', escapeKeyListener);
    };
  }, [onClose]);
};

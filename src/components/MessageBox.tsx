import { genMessageState, onMessageDismiss } from '@/helper/Message';
import { Poppins } from '@next/font/google';
import { useRef } from 'react';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '900'],
  subsets: ['latin'],
});

const MessageBox = ({
  id,
  type = 'success',
  title = 'Title',
  text = 'text',
  style,
  onClose,
}: Message.Props) => {
  let state: Message.State = {
    bgColor: genMessageState(type).bgColor,
    icon: genMessageState(type).icon,
  };

  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className={`${poppins.className} message--container`}
      style={{
        backgroundColor: state.bgColor,
        ...style,
      }}
    >
      <state.icon size={30} />
      <div className="message--text">
        <h1 className="message--text-title">{title}</h1>
        <p className="text-[0.7rem] message--text-content">{text}</p>
      </div>

      <button
        className="text-[0.75rem] py-5"
        onClick={() => onMessageDismiss(ref, id, onClose)}
      >
        Dismiss
      </button>
    </div>
  );
};

export default MessageBox;

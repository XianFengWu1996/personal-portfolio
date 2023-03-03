import { Poppins } from '@next/font/google';
import { CSSProperties, useRef } from 'react';
import { AiFillExclamationCircle, AiOutlineWarning } from 'react-icons/ai';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '900'],
  subsets: ['latin'],
});

interface Props {
  type?: 'success' | 'error' | 'warning' | 'update';
  title?: string;
  text?: string;
  style?: CSSProperties;
}

interface State {
  bgColor: string;
  icon: IconType;
}

const MessageBox = ({
  type = 'success',
  title = 'Title',
  text = 'text',
  style,
}: Props) => {
  const getState = () => {
    switch (type) {
      case 'error':
        return {
          bgColor: '#ff3333',
          icon: FaTimesCircle,
        };
      case 'warning':
        return {
          bgColor: '#ff9966',
          icon: AiOutlineWarning,
        };

      case 'update':
        return {
          bgColor: '##40b5f0',
          icon: AiFillExclamationCircle,
        };
      default:
        return {
          bgColor: '#4BB543',
          icon: FaCheckCircle,
        };
    }
  };

  let state: State = {
    bgColor: getState().bgColor,
    icon: getState().icon,
  };

  const ref = useRef<HTMLDivElement>(null);

  const onDismiss = async () => {
    if (ref.current) {
      const animation = ref.current.animate(
        {
          transform: ['translate(0) translateX(-25%)', 'translateX(100%)'],
          opacity: [1, 0],
          offset: [0.25, 1],
          easing: ['ease'],
        },
        1000
      );

      if (await animation.finished) {
        ref.current.parentNode?.removeChild(ref.current);
      }
    }
  };

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

      <button className="text-[0.75rem] py-5" onClick={onDismiss}>
        Dismiss
      </button>
    </div>
  );
};

export default MessageBox;

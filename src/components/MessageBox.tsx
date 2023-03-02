import { Poppins } from '@next/font/google';
import { CSSProperties, useEffect, useState } from 'react';
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
  const [state, setState] = useState<State>({
    bgColor: '#4BB543',
    icon: FaCheckCircle,
  });

  useEffect(() => {
    switch (type) {
      case 'error':
        setState({
          ...state,
          bgColor: '#ff3333',
          icon: FaTimesCircle,
        });
        break;

      case 'warning':
        setState({
          ...state,
          bgColor: '#ff9966',
          icon: AiOutlineWarning,
        });
        break;

      case 'update':
        setState({
          ...state,
          bgColor: '##40b5f0',
          icon: AiFillExclamationCircle,
        });
        break;

      default:
        break;
    }
  }, [state, type]);

  return (
    <div
      className={`${poppins.className} message--container exit`}
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

      <button className="text-[0.75rem] py-5" onClick={() => {}}>
        Dismiss
      </button>
    </div>
  );
};

export default MessageBox;

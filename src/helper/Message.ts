import { RefObject } from 'react';
import { AiFillExclamationCircle, AiOutlineWarning } from 'react-icons/ai';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { v4 } from 'uuid';

export const generateMessage = (
  type: Message.MessageType,
  title: string,
  text: string
): Message.Props => {
  const id = v4();

  return {
    key: id,
    id,
    type,
    title,
    text,
  };
};

export const genMessageState = (type: Message.MessageType) => {
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

export const onMessageDismiss = async (
  ref: RefObject<HTMLDivElement>,
  id?: string,
  onClose?: Function
) => {
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

    // wait for the animation to finish
    if (await animation.finished) {
      ref.current.style.display = 'none';
      // ref.current.remove(); // remove the message box
      if (onClose) onClose(id);
    }
  }
};

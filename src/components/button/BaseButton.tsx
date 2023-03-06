import { CSSProperties } from 'react';
import Tailspin from '../SVG/Tailspin';

interface Props extends ButtonProps {}

const BaseButton = ({
  id,
  text,
  onClick,
  style,
  type = 'Transparent',
  textSize = 'base',
  borderRadius = 10,
  loading = false,
}: ButtonProps) => {
  const buttonStyleGenerator = () => {
    switch (type) {
      case 'Filled':
        return {
          backgroundColor: '#000',
          color: '#fff',
          outline: 'none',
          border: 'none',
        } as CSSProperties;
      case 'Transparent':
        return {
          color: '#000',
          outline: 'none',
          border: 'none',
        } as CSSProperties;
      case 'Outlined':
        return {
          outline: '1px solid #000',
          color: '#000',
          border: 'none',
        } as CSSProperties;
      default:
        break;
    }
  };

  return (
    <button
      id={id}
      type="button"
      onClick={onClick}
      className={`button py-2 my-1 text-${textSize} min-w-full flex items-center justify-center`}
      style={{
        transition: 'all 1s ease',
        borderRadius: borderRadius,
        ...buttonStyleGenerator(),
        ...style,
      }}
    >
      {loading ? <Tailspin size={25} thickness={3} /> : text}
    </button>
  );
};

export default BaseButton;

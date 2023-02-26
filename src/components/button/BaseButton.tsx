import { CSSProperties } from 'react';

const BaseButton = ({
  text,
  onClick,
  style,
  type = 'Transparent',
  textSize = 'base',
  borderRadius = 10,
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
      type="button"
      onClick={onClick}
      className={`button py-2 my-1 text-${textSize}`}
      style={{
        borderRadius: borderRadius,
        ...buttonStyleGenerator(),
        ...style,
      }}
    >
      {text}
    </button>
  );
};

export default BaseButton;

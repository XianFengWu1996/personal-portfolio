type RefObject = import('react').RefObject;

type TextSize =
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl';

type ButtonType = 'Filled' | 'Outlined' | 'Transparent';

interface ButtonProps {
  id?: string;
  text: string;
  textColor?: Color;
  textSize?: TextSize;
  type?: ButtonType;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
  borderRadius?: number;
  loading?: boolean;
}

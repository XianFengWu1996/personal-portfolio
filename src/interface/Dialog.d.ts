type Color = string;

interface Dialog {
  open?: boolean;
  onClose?: VoidFunction;
  classes?: string[];
  styles?: CSSProperties | undefined;
  children: ReactNode;
  bgColor?: Color;
  textColor?: Color;
  width?: string;
  height?: string;
  fullScreen?: boolean;
}

type Color = string;

interface DialogState {
  open?: boolean;
  onClose?: VoidFunction;
}

interface Dialog extends DialogState {
  classes?: string[];
  styles?: CSSProperties | undefined;
  children: ReactNode;
  bgColor?: Color;
  textColor?: Color;
  width?: string;
  height?: string;
  fullScreen?: boolean;
  overlayColor?: Color;
}

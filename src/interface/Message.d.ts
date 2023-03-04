declare namespace Message {
  type MessageType = 'success' | 'error' | 'warning' | 'update';

  interface State {
    bgColor: string;
    icon: IconType;
  }

  interface Default {
    type?: MessageType;
    title?: string;
    text?: string;
  }

  interface Props extends Default {
    id?: string;
    style?: CSSProperties;
    key?: Key | null;
    onClose?: Function;
  }
}

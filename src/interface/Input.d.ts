type autoComplete = 'on' | 'off';
type autoCorrect = autoComplete;
type autoCapitalize =
  | autoComplete
  | 'none'
  | 'sentences'
  | 'words'
  | 'characters';

interface Input {
  id: string;
  name?: string;
  value: string | number | readonly string[];
  onChange: ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  placeholder?: string;
  autoComplete?: autoComplete;
  autoCapitalize?: autoCapitalize;
  autoCorrect?: autoCorrect;
  autoFocus?: boolean;
}

interface InputProps extends Input {
  type?: React.HTMLInputTypeAttribute | undefined;
}

interface TextAreaProps extends Input {
  rows?: number;
}
